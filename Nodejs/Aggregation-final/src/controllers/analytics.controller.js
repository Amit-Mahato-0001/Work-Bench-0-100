const Order = require('../models/order.model')
const User = require('../models/user.model')

//Total revenue

const totalRevenue = async (req, res) => {

    try {
        
        const result = await Order.aggregate([

            {
                $match: { status: "completed" }
            },

            {
                $group: {
                    _id: null,
                    totalRevenue: { $sum: "$totalAmount" }
                }
            }
        ])

        res.json(result)

    } catch (error) {
        
        console.log("Revenue fetching failed try again later", error.message)
    }
}

//Category wise revenue

const categoryRevenue = async (req, res) => {

    const result = await Order.aggregate([

        {
            $match: { status: "completed"}
        },

        {
            $lookup: {
                from: "products",
                localField: "productId",
                foreignField: "_id",
                as: "productInfo"
            } //orders ka productId = Products ka _id match karke product data join karo
        },

        {
            $unwind: "$productInfo",
        },

        {
            $group: {
                _id: "$productInfo.category",
                totalRevenue: { $sum: "$totalAmount" }
            }
        },

        {
            $project: {
                _id: 0,
                category: "$_id",
                totalRevenue: 1
            }
        }
    ])

    res.json(result)
}

//User wise spending

const userSpending = async (req, res) => {

    const result = await Order.aggregate([

        {
            $match: { status: "completed" }
        },

        {
            $lookup: {
                from: "users",
                localField: "userId",
                foreignField: "_id",
                as: "userInfo"
            } // orders ka userId = Users ka _id match karke user ka data join karro
        },

        {
            $unwind: "$userInfo"
        },

        {
            $group: {
                _id: "$userId",
                userName: {$first: "$userInfo.name"},
                totalAmount: {$sum: "$totalAmount"}
            }
            
        }
    ])

    res.json(result)
}


module.exports = { totalRevenue, categoryRevenue, userSpending}