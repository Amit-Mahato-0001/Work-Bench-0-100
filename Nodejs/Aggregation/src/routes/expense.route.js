const express = require('express')
const { getTotalExpense, seedExpenses } = require('../controller/expense.controller')

const router = express.Router()

router.post('/seed-expenses', seedExpenses)
router.get('/total/:userId', getTotalExpense)

module.exports = router