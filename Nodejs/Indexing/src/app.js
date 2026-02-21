require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const router = require('./routes/route')

const app = express()
app.use(express.json())

connectDB()
app.use('/', router)

module.exports = app