require('dotenv').config({path:'.env'})
const express = require('express')
const app = express()

// app.use(express.static('public'))

app.use(require('cors')())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const router = require('./router')
router(app)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server Is Running On Port: ${PORT}`))