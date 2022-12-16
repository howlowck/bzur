import express from 'express'
import bp from 'body-parser'
import path from 'path'
import healthCheckRouter from './api/routes/healthcheck'
import groupRouter from './api/routes/group'
const { WebPubSubServiceClient } = require('@azure/web-pubsub')

export type AppConfig = {
  environment: 'dev' | 'prod' | 'test'
  dataStorageType: 'aztable' | 'inMemory'
  pubsubConnectionString: string
  pubsubHub: string
  dataStorageConnectionString?: string
}

export default (appConfig: AppConfig) => {
  const { dataStorageType } = appConfig
  const serviceClient = new WebPubSubServiceClient(
    appConfig.pubsubConnectionString,
    appConfig.pubsubHub
  )
  const app = express()

  // Needed for parsing http body content.
  app.use(bp.json())
  app.use(bp.urlencoded({ extended: true }))

  // Put the api routes here.
  app.use('/api/healthz', healthCheckRouter())
  app.use('/api/groups', groupRouter())

  // Static files
  app.use('/', express.static(path.join(__dirname, './static')))

  // // Error Handling
  // app.use(function (err, req, res) {
  //   console.error(`Unexpected error ${err.message} for request ${req}`)
  // } as express.ErrorRequestHandler)

  return app
}
