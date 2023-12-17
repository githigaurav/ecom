const { mongoose, Schema } = require("mongoose")


const ordersSchema = new mongoose.Schema({
    productId: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    quantity:{
        type:Number
    },
    totalAmount:{
        type:Number,

    },
    orderType:{ 
        type:String,
        enum:["cod","prepaid"],
        default:"cod"
    } ,
    deliverAddress:{
        type:String
    },
    paymentStatus:{
        type:Boolean,
        defaut:false
    },
    seller:[{
        type:Schema.Types.ObjectId,
        ref:'Seller'
    }]
    
    },
    { timestamps: true },
    { collection: 'Orders' }
)

const Order = mongoose.model("Order", ordersSchema)
module.exports=Order