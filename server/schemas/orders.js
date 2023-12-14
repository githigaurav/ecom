const { mongoose, Schema } = require("mongoose")


const ordersSchema = new mongoose.Schema({
    productId: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],
    userID:{
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
    } 
    
    },
    { timestamps: true },
    { collection: 'Orders' }
)

const Orders = mongoose.model("Orders", ordersSchema)
module.exports=Orders