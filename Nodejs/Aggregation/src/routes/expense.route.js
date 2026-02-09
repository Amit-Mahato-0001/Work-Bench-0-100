const express = require('express')
const { getTotalExpense, seedExpenses, getCategoryExpense, getRecentExpense } = require('../controller/expense.controller')

const router = express.Router()

//seed expense
router.post('/seed-expenses', seedExpenses)
//user's total expense
router.get('/total/:userId', getTotalExpense)
//category wise expense
router.get('/category/:userId', getCategoryExpense)
//last 5 expenses
router.get('/recent/:userId', getRecentExpense)

module.exports = router