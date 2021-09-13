const express = require("express")

const app = express()

app.get("/", (req,res) => {
    res.send("Welcome to nodemailer tutorial")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`App running on port ${PORT}`) })