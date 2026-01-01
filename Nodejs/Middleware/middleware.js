//Logger middleware

const logger = (req, res, next) => {
    console.log(req.method, req.url)
    next()
}

//API key checker middleware

const checkApiKey = (req, res, next) => {
    
    const apiKey = req.headers["x-api-key"]

    if(!apiKey) {
        return res.status(401).json({error: "API key is missing"})
    }

    next()
}

module.exports = {logger, checkApiKey}