const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        required: true,
        type: String,
        trim: true,
        unique: true,
    },
    password: {
        required: true,
        type: String,
        trim: true
    }
})

module.exports = mongoose.model("User", userSchema)