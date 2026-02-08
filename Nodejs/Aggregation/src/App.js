require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const router = require('./routes/expense.route')

const App = express()
connectDB()

App.use(express.json())

App.use('/expenses', router)

module.exports = App