const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const register = async (req, res) => {

    try {
        //data from req.body
        const { name, email, password } = req.body
        //hash pass
        const hashedPassword = await bcrypt.hash(password, 10)
        //user create
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        res.status(201).json({
            user,
            message: "User registered successfully"
        })

    } catch (err) {
        console.log(err.errors)
        res.status(500).json({ error: err.message})
    }
}

const login = async(req, res) => {

    try {
        //data from req.body
        const {email, password} = req.body
        //find user by email
        const user = await User.findOne({ email })
        if(!user){
            return res.status(401).json({ error: "Invalid credentials" })
        }
        //if user matched then after compare password
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(401).json({ error: "Invalid credentials"})
        }
        //if password matched give token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
        )

        res.json({ token })

    } catch (err) {
        res.status(500).json({ error: err.message})
    }
}

module.exports = {register, login}