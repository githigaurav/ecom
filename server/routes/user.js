const user = require("express").Router()

user.post("/",(req,res)=>{
    res.json("working routes")
})

module.exports=user;