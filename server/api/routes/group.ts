import express from 'express'

export default () => {
  const router = express.Router()
  // Get Group Info
  router.get('/:groupId', async (req, res) => {
    res.json({
      groupId: req.params.groupId,
    })
  })

  // Create Group
  router.post('/', async (req, res) => {})
  return router
}
