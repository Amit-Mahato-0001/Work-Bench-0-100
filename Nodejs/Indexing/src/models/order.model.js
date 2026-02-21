const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    
    userId: mongoose.Schema.Types.ObjectId,
    productId: mongoose.Schema.Types.ObjectId,
    status: String,
    totalAmount: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

orderSchema.index({ status: 1 })

orderSchema.index({ userId: 1, createdAt: -1 })

module.exports = mongoose.model("Order", orderSchema)