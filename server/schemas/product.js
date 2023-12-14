const mongoose = require("mongoose")
const {Schema}= require("mongoose")

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
    },
    brandName:{
        type:String
    },
    category:{
        type:String,
    },
    subCategory:{
        type:String,
    },
    price:{
        type:String
    },
    returnApplicable:{
        type:Boolean
    },
    warranty:{
        type:String
    },
    cod:{
        type:Boolean
    },
    quantity:{
        type:Number
    },
    discount:{
        type:String
    },
    discription:{
        type:String
    },
    fileURL:{
        type:String
    },
    seller:[
        {
            type:Schema.Types.ObjectId,
            ref:"Seller"
        }
    ]
},
{timestamps:true},
{collection:'Product'}
)

const Product = mongoose.model("Product", productSchema)
module.exports=Product