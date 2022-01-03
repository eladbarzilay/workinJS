require('dotenv').config({path:'server/.env'})
const express = require('express')
const app = express()

// app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({exdended: true}))

const router = require('./router')
router(app)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server Is Running On Port: ${PORT}`))