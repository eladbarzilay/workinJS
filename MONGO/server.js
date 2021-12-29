const express = require('express')
const app = express()

app.use(require('cors')())
app.use(express.json())

const db = require('./db')

const router = require('./router')
app.use(express.static('public'))


db.connect().then(() => {
    router(app)

    app.listen(3030,
        () => console.log('server is up'))
})
    .catch((err) => {
        console.error(err);
    })