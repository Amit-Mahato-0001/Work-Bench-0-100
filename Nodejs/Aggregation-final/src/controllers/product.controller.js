const Product = require('../models/product.model')

const createProduct = async (req, res) => {

    try {
        
        const product = await Product.create(req.body)
        res.json(product)

    } catch (error) {
        
        console.log("Product creation failed", error.message)
    }

}

module.exports = createProduct