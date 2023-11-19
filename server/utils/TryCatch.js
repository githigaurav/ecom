const {ApiResponse} = require("./ApiResponse")



const TryCatch = (fn)=> async(req, res, next)=>{
    try {
        await fn(req, res)
    } catch (error) {
       
    }
}


module.exports=TryCatch