require("dotenv").config()
require("./connections/dbConnection")
const express = require("express")
const server= express()
const cors = require('cors')
const cookieParser = require("cookie-parser")

// setting up server
server.use(cors({
    origin: true,
    credentials: true }))
server.use(express.json())
server.use(cookieParser())

// routes
const {seller, admin }= require('./routes/index')

server.use('/seller',seller)
server.use('/admin', admin)












const PORT=process.env.PORT
server.listen(PORT,()=>{
    console.log(`Server Status:OK  PORT ${PORT} `)
})