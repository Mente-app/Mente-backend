const express = require("express")
const logger = require("morgan")
require("dotenv").config()


const PORT = process.env.PORT
const app = express()


app.use(morgan("development"))

app.get("/", (req,res)=>{
    res.send({status:1, message:"Request to home successful"})
})

app.listen(PORT,()=>{
    console.log(`Server is now running on port ${PORT}`)
})