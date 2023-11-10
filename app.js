const express = require('express')
const cors = require('cors')
const Account = require('./app/routes/account.route')
const Product = require('./app/routes/product.route')
const Bill = require('./app/routes/bill.route')
const cartRouter = require('./app/routes/cart.route')
const ErrorAPI =  require('./app/ErrorAPI')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/account', Account)
app.use('/api/bill', Bill)
app.use('/api/product', Product)
app.use('/api/cart', cartRouter)


//Catch Not Found
app.use((req,res,next)=>{
    return next(new ErrorAPI(404,"Page Not Found"))
})

//Catch Error
app.use((err , req ,res , next ) => {
        return res.status(err.status || 500).json({
            message : err.message || "Internal Server Error"
        })
})


module.exports = app