const express = require('express')
const createUser = require('../controllers/user.controller')
const createProduct = require('../controllers/product.controller')
const createOrder = require('../controllers/order.controller')
const { totalRevenue, categoryRevenue, userSpending } = require('../controllers/analytics.controller')
const router = express.Router()

router.post('/users', createUser)
router.post('/products', createProduct)
router.post('/orders', createOrder)
router.get('/total-revenue', totalRevenue)
router.get('/category-revenue', categoryRevenue)
router.get('/user-spending', userSpending)


module.exports = router