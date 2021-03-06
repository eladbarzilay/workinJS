const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: 2,
        trim: true,
    },
    icon: {
        type: String,
    }, 
    password: {
        type: String,
        required: true,
        select:false,
    },
    lastSeen:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('user', schema)