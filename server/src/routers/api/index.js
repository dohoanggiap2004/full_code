const express = require('express')
const router = express.Router()
const userRouter = require('./user')
const statisticRouter = require('./statistic')
router.use('/users', userRouter)
router.use('/statistics', statisticRouter)

module.exports = router
