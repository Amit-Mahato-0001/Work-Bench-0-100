const express = require('express')
const {seedOrders, completedOrders, ordersById} = require('../controllers/controller')

const router = express.Router()

router.post('/seed-orders', seedOrders)

router.get('/completed-orders', completedOrders)

router.get('/orders/user/:userId', ordersById)

module.exports = router