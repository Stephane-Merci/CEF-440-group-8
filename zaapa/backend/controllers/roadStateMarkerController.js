const RoadStatePosition = require('../models/roadStateMarkerModel')


const addRoadStateLocation = async (req, res) => {
    const { name, coordinates } = req.body;

    try {
        const newStatePosition = new RoadStatePosition({
            name,
            coordinates: {
                type: 'Point',
                coordinates: coordinates // assuming coordinates is [longitude, latitude]
            }
        });

        await newStatePosition.save();
        res.status(201).json({ message: 'Road Sign Location added successfully' });
    } catch (error) {
        console.error('Error adding road sign location:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
    }
    

const getRoadStateLocations = (req, res) => {

}

module.exports = {addRoadStateLocation, getRoadStateLocations}