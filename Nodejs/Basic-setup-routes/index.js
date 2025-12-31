const express = require("express")

const app = express()
app.use(express.json())

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

app.get("/health", (req,res) => {
    res.send({
        status: "ok",
        message: "Server is running well"
    })
})

app.get("/info", (req, res) => {
    res.send({
        app: "My First Node App",
        version: "1.0.0"
    })
})

app.post("/sum", (req, res) => {
    const {a, b} = req.body

    if(typeof a !== "number" || typeof b !== "number"){
        return res.status(400).json({ error: "Invalid input" })
    }

    const result = a + b

    res.json({ result })

})



