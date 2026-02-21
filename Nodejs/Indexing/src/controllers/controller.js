const mongoose = require('mongoose')
const Order = require('../models/order.model')

const createUsers = () => {
    const users = []
    for(let i=0; i<100; i++){
        users.push(new mongoose.Types.ObjectId())
    }

    return users
}

const seedOrders = async (req, res) => {

    try {
        
        const users = createUsers()
        const orders = []

        for(let i=0; i<50000; i++) {
     
        orders.push({
            userId: users[i % 100],
            productId: new mongoose.Types.ObjectId(),
            status: i%2 === 0 ? "completed" : "pending",
            totalAmount: Math.floor(Math.random() * 1000)
        })
    }

    await Order.insertMany(orders)

    res.json({
        message: "50k orders inserted",
        testUserIds: users
    })

    } catch (error) {
        
        console.log("Orders insertion failed", error.message)
    }
}

const completedOrders = async (req, res) => {

    try {
        
        const orders = await Order.find({ status: "completed" })
        
        res.json({
            count: orders.length
        })

    } catch (error) {
        
        console.log("orders fetching failed", error.message)
    }

}

const ordersById = async (req, res) => {

    try {
        
        const orders = await Order.find({
            userId: new mongoose.Types.ObjectId(req.params.userId)
        }).sort({ createdAt: -1 })

        res.json(orders)

    } catch (error) {

        console.log("failed fetching orders", error.message)
        
    }
}

module.exports = { seedOrders, completedOrders, ordersById}