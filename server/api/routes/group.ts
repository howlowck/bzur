import express from 'express'

export default () => {
  const router = express.Router()
  // Get Group Info
  router.get('/:groupId', async (req, res) => {
    if (req.params.groupId === '2022-devsquad-party') {
      return res.json({
        teams: ['Team Ocean', 'Team Sunshine', 'Team Mountain'],
      })
    }
    res.json({
      groupId: req.params.groupId,
    })
  })

  // Create Group
  router.post('/', async (req, res) => {})
  return router
}
