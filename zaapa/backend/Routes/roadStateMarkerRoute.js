const {addRoadStateLocation, getRoadStateLocations} = require('../controllers/roadStateMarkerController')
const express = require('express')

const router = express.Router();

router.post('/add', addRoadStateLocation)
router.get('/get',getRoadStateLocations)

module.exports = router;