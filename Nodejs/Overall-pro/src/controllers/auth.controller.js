const { register, login } = require('../services/auth.service')

const registerUser = async (req, res, next) => {
  try {
    const result = await register(req.body)
    return res.status(201).json(result)
  } catch (error) {
    next(error)
  }
}

const loginUser = async (req, res, next) => {
  try {
    const result = await login(req.body)
    return res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = { registerUser, loginUser }
