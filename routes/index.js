const router = require('express').Router()

router.use('/api', require('./workoutRoutes'))
router.use('', require('./htmlRoutes.js'))

module.exports = router