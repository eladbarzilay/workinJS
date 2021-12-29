const mongoose = require('mongoose')

const taskModel = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    title: {
        type: String,
        required: true,
        minlength: 2,
        trim: true,
    },
    isDone: Boolean
})

module.exports = mongoose.model('task', taskModel)