const router = require('express').Router()
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    return res.json({key: 'get all incomes here'})
  } catch (err) {
    next(err)
  }
})