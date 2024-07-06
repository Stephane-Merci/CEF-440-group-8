const RoadSign = require('../models/roadSignModel');

// Get all road Signs
const getRoadSigns = async (req, res) => {
    try {
        const roadSigns = await RoadSign.find();
        res.status(200).json(roadSigns);
    } catch (error) {
        console.error('Error retrieving road signs:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Upload roadSign 
const addRoadSign = async (req, res) => {
    const { name, description, image } = req.body;

    try {
        const newRoadSign = new RoadSign({
            name,
            description,
            image
        });

        await newRoadSign.save();
        res.status(201).json({ message: 'Road Sign added successfully' });
    } catch (error) {
        console.error('Error adding road sign:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { getRoadSigns, addRoadSign };
