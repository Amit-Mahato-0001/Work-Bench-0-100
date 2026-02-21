const User = require('../models/user.model')

const createUser = async (req, res) => {

    try {
        
        const user = await User.create(req.body)
        res.json(user)

    } catch (error) {
        
        console.log("User creation failed", error.message)
    }

}

module.exports = createUser