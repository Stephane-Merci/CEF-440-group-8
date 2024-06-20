const {addRoadSignLocation, getRoadSignLocations} = require('../controllers/roadSignMarkerController')
const express = require('express')

const router = express.Router();

router.post('/add', addRoadSignLocation)
router.get('/get',getRoadSignLocations)

module.exports = router;