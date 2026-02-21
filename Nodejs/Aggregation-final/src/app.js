require('dotenv').config()
const connectDB = require('./config/db')
const express = require('express')
const routes = require('./routes/routes')

const app = express()
app.use(express.json())

connectDB()
app.use('/', routes)

module.exports = app