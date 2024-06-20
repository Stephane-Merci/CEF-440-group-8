const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roadStateSchema  = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('RoadState', roadStateSchema)