const mongoose = require('mongoose')

const Schema = mongoose.Schema

const roadStatePosSchema = new Schema({
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

roadStatePosSchema.index({coordinates: '2dsphere'})

module.exports = mongoose.model('RoadStatePosition', roadStatePosSchema)