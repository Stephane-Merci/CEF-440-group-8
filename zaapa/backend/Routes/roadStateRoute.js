const {getRoadState, addRoadState} =require('../controllers/roadStateController')
const express = require('express')

const router = express.Router();

router.get('/get', getRoadState)
router.post('/add', addRoadState)

module.exports = router