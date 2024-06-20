const { addRoadSign, getRoadSigns} = require('../controllers/roadSignController')
const express = require('express')

const router = express.Router()

router.get('/get', getRoadSigns)
router.post('/add', addRoadSign)

module.exports = router