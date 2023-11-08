const express = require('express')
const cors = require('cors')
const router = require('./app/routes/home.route')

const app = express()

app.use(cors())
app.use(express.json())

app.get("",(req,res)=>{
    res.json({message : "Welcome To My Shop "})
})

app.use("/api" , router)

module.exports = app