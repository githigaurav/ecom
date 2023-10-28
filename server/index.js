require("dotenv").config()
require("./connections/dbConnection")
const express = require("express")
const server= express()


// setting up server
server.use(express.json())

// routes
const {seller, admin }= require('./routes/index')

server.use('/seller',seller)
server.use('/admin', admin)












const PORT=process.env.PORT
server.listen(PORT,()=>{
    console.log(`Server Status:OK  PORT ${PORT} `)
})