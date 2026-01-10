const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async ({ name, email, password }) => {
  if (!name || !email || !password) {
    throw new Error('All fields required')
  }

  const existingUser = await User.findOne({ email })
  if (existingUser) {
    throw new Error('User already exists')
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await User.create({
    name,
    email,
    password: hashedPassword
  })

  return {
    message: 'User registered successfully',
    user: {
      id: user._id,
      email: user.email
    }
  }
}

const login = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error('Invalid credentials')
  }

  const user = await User.findOne({ email }).select('+password')
  if (!user) {
    throw new Error('Invalid credentials')
  }

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    throw new Error('Invalid credentials')
  }

  const token = jwt.sign(
    {
      userId: user._id,
      email: user.email
    },
    process.env.JWT_SECRET,
    {expiresIn: "1h"}
  )

  return{
    message: 'Login successful',
    token,
    user: {
      id: user._id,
      email: user.email
    }
  }
}

module.exports = { register, login }
