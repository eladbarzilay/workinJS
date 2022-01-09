const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        minLength: 2,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        select:false,
    },
    permit:{
        type: String,
        enum:['user','editor','admin']
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minLength: 2,
        trim: true,
    },
    profilPicture: {
        type: String,
    },
})

module.exports = mongoose.model('user', schema)