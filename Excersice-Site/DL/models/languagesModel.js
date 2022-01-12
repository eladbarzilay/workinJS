const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    language:{
        type: String,
        required: true,
        unique: true,
        caseSensitive: true,
        minLength: 2,
        trim: true,
    },
    tags:[String],
    icon: {
        type: String,
    },
})

module.exports = mongoose.model('language', schema)