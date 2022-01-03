const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTION_STRING)
.then(() => console.log('mongo connected!'))