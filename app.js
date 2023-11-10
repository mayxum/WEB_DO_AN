const express = require('express')
const cors = require('cors')
const router = require('./app/routes/home.route')
const ErrorAPI =  require('./app/ErrorAPI')

const app = express()

app.use(cors())
app.use(express.json())

app.get("",(req,res)=>{
    res.json({message : "Welcome To My Shop "})
})

app.use((req,res,next)=>{
    return next(new ErrorAPI(404,"Page Not Found"))
})

//Catch Error
app.use((err , req ,res , next ) => {
    //Xu Ly Loi O Day 
        return res.status(err.status || 500).json({
            message : err.message || "Internal Server Error"
        })
})

app.use("/api" , router)

module.exports = app