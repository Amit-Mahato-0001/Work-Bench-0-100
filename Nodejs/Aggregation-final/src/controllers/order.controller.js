const Order = require('../models/order.model')
const Product = require('../models/product.model')

const createOrder = async (req, res) => {

    try {
        
        const { userId, productId, quantity } = req.body;

        const product = await Product.findById(productId);

        const order = await Order.create({

            userId,
            productId,
            quantity,
            totalAmount: product.price * quantity

        })

        res.json(order)

    } catch (error) {
        
        console.log("Order creation failed", error.message)
    }
}

module.exports = createOrder