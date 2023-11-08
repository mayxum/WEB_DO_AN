const app = require('./app.js')
const config = require('./app/config').app

app.listen(config.PORT,()=>{
    console.log('Server Listen in Port' , config.PORT)
})