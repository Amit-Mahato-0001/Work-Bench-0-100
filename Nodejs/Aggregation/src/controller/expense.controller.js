const Expense = require('../models/expense.model')
const mongoose = require('mongoose')

//SEED EXPENSES FOR TESTING

exports.seedExpenses = async (req, res, next) => {

    try {
        
        const userId = new mongoose.Types.ObjectId("64f1a9c2e3a8b9c1d1234567")

        await Expense.insertMany([
            {
                title: "coffee", amount: 150, category: "food", userId
            },
            {
                title: "pizaa", amount: 400, category: "food", userId
            },
            {
                title: "bus", amount: 100, category: "travel", userId
            },
            {
                title: "flight", amount: 4000, category: "travel", userId
            },
            {
                title: "tshirt", amount: 150, category: "shopping", userId
            },
            {
                title: "jeans", amount: 150, category: "shopping", userId
            },
        ])

        res.send("Dummy expenses inserted successfully")

    } catch (error) {
        
        next(error)
    }
} 

//TOTAL EXPENSE

exports.getTotalExpense = async (req, res, next) => {

    try {
        
        const userId = new mongoose.Types.ObjectId(req.params.userId)

        const result = await Expense.aggregate([

            {
                $match: { userId: userId }
            },

            {
                $group: {
                    _id: null,
                    totalAmount: { $sum: "$amount" }
                }
            }

        ])

        const total = result.length > 0 ? result[0].totalAmount: 0

        res.json({ totalAmount: total })

    } catch (error) {

        next(error)
    }
}

//CATEGORY WISE EXPENSE

exports.getCategoryExpense = async (req, res, next) => {

    try {
        
        const userId = new mongoose.Types.ObjectId(req.params.userId)

        const result = await Expense.aggregate([
            {
                $match: { userId: userId}
            },
            {
                $group: {
                    _id: "$category",
                    totalAmount: { $sum: "$amount"}
                }
            },
            {
                $project: {
                    _id: 0,
                    category: "$_id",
                    totalAmount: 1
                }
            }
        ])

        res.json(result)

    } catch (error) {

        next(error)
    }
}

//RECENT 5 EXPENSES

exports.getRecentExpense = async (req, res, next) => {

    try {
        
        const userId = new mongoose.Types.ObjectId(req.params.userId)

        const result = await Expense.aggregate([
            {
                $match: { userId: userId}
            },
            {
                $sort: {createdAt: -1}
            },
            {
                $limit: 2
            },
            {
                $project: {
                    _id: 0,
                    title: 1,
                    amount: 1,
                    category: 1,
                    createdAt: 1
                }
            }
        ])

        res.json(result)

    } catch (error) {
        
        next(error)
    }
}