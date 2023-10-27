require("dotenv").config()
require("./connection/dbConnection")
const server = require("express")()




// routes
const {seller, admin }= require('./routes/index')

server.use('/seller',seller)
server.use('/admin', admin)












const PORT=process.env.PORT
server.listen(PORT,()=>{
    console.log(`Server Status:OK  PORT ${PORT} `)
})