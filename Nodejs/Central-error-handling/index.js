const express = require('express')
const errorHandler = require('./errorHandler')

const app = express()

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

app.get('/health', (req, res) => {
    res.send({
        status: "ok",
        message: "Everything is fine..."
    })
})

app.get("/error", async (req, res, next) => {
    try {
        throw new Error("Test error");
    } catch (err) {
        next(err); // sends error to central handler
    }
});

app.use(errorHandler)

module.exports = app