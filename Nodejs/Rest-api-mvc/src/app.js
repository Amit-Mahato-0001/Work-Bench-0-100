const express = require('express')
const router = require('./routes/user.route')

const app = express()

app.use('/users', router)

module.exports = app