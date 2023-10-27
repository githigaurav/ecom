const express = require('express')
const admin = express.Router()


admin.get('/',(req, res)=>{
    res.json({message:"Admin Routes is working"})
})


module.exports=admin