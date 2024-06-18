const RoadSign = require('../models/roadSignModel')

// Get all road Signs
const getRoadSigns = (req, res) => {
    res.json({mssg:"All Road Signs"})
}

// upload roadSign 
const addRoadSign = async(req, res) => {
    const { name,description , image } = req.body;

    try {
       const newRoadSign = new RoadSign({
            name,
            description,
            image
        });

        await newRoadSign.save();
        res.status(201).json({ message: 'Road Sign  added  successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {getRoadSigns, addRoadSign}
