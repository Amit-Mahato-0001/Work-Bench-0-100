require('dotenv').config()
const express = require('express')
const router = require('./routes/auth.route')

const connectDB = require('./config/db')

const app = express()
app.use(express.json())
connectDB()

app.use('/api/auth', router)

module.exports = app