const express = require('express')
const app = express()

app.get("/api", (req,res) => {
    res.json({"user":["Userone","Usertwo","Userthree","userfour"]})
})

app.listen(5000, () => {
    console.log("Server was testing....")
})