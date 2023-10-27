const express = require('express')
const seller = express.Router()


seller.get('/',(req, res)=>{
    res.json({message:"Seller routes is working fine"})
})


module.exports=seller