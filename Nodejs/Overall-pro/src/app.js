require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const authRoutes = require('./routes/auth.route')
const errorHandler = require('./middlewares/error.middleware')

const app = express()

connectDB()
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use(errorHandler)

module.exports = app
