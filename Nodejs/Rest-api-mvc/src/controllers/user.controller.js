const User = require('../models/user.model')

const createUser = async (req, res, next) => {
    try{
       const user = User.create(req.body)
       res.status(201).json(user)
    }
    catch(err){
        res.status(500).json({ error: err.message })
    }
}

module.exports = createUser