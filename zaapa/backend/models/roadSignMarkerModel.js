const mongoose = require('mongoose')

const Schema = mongoose.Schema

const roadSignPosSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    coordinates:{
        type:{
            type:String,
            enum:['Point'],
            required:true
        },
        coordinates:{
            type:[Number],
            required:true
        }
    }
});

roadSignPosSchema.index({coordinates: '2dsphere'})

module.exports = mongoose.model('RoadSignPosition', roadSignPosSchema)