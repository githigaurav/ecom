require("dotenv").config()
const connectToDb = require("./connections/dbConnection")
const express = require("express")
const server= express()
const cors = require('cors')
const cookieParser = require("cookie-parser")
connectToDb()

// setting up server
server.use(cors({
    origin: true,
    credentials: true }))
server.use(express.json())
server.use(cookieParser())

// routes
const {seller, admin , user}= require('./routes/index')
const { ApiError } = require("./utils/ErrorHandling")


server.use('/seller',seller)
server.use('/seller',seller)
server.use('/admin', admin)
server.use('/user', user)
server.get('/error',(req , res)=>{
   throw new ApiError(500, "New Custome Error" , ["welcome to global error"] , "test")
})
server.all('*',(req, res)=>{    
    res.status(404).json({message:` URL ${req.get('host')}${req.url} not found`})
})

// Error-handling middleware
server.use((err, req, res, next) => {

    if (err instanceof ApiError) {
        console.log("new eror coming " + err)
    }
    if (err instanceof Error) {
        console.log("Error in mongoose" + err.message)
    }

    next()
});


const PORT=process.env.PORT
server.listen(PORT,()=>{
    console.log(`Server Status:OK  PORT ${PORT} `)
})