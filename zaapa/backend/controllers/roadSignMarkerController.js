const RoadSignPosition = require('../models/roadSignMarkerModel')


const addRoadSignLocation = async (req, res) => {
    const { name, coordinates } = req.body;

    try {
        const newSignPosition = new RoadSignPosition({
            name,
            coordinates: {
                type: 'Point',
                coordinates: coordinates // assuming coordinates is [longitude, latitude]
            }
        });

        await newSignPosition.save();
        res.status(201).json({ message: 'Road Sign Location added successfully' });
    } catch (error) {
        console.error('Error adding road sign location:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
    }
    

const getRoadSignLocations = (req, res) => {

}

module.exports = {addRoadSignLocation, getRoadSignLocations}