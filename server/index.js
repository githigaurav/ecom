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
const TryCatch = require("./utils/TryCatch")



server.use('/seller',seller)
server.use('/admin', admin)

server.all('*',(req, res)=>{    
    res.status(404).json({message:` URL ${req.get('host')}${req.url} not found`})
})


const PORT=process.env.PORT
server.listen(PORT,()=>{
    console.log(`Server Status:OK  PORT ${PORT} `)
})