const RoadState = require('../models/roadStateModel')

// Add road State
const addRoadState = async(req, res) => {
    const { name,description  } = req.body;

    try {
       const newRoadState = new RoadState({
            name,
            description
        });

        await newRoadState.save();
        res.status(201).json({ message: 'Road State added  successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

// get road State 

const getRoadState = (req, res) => {
    res.json({mssg: "Get all road States"})
}

module.exports = { addRoadState, getRoadState}