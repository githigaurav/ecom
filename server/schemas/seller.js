const {mongoose, Schema} = require("mongoose")
const sellerSchema = new mongoose.Schema({
    name: {
      type: String,
      // required: [true, "Name is required"]
    },
    email: {
      type: String,
      // required: [true, "Email is required"],
      // unique:[true , "Email must be unique"]
    },
    password: {
      type: String,
      // required: [true, "Password is required"]
    },
    phoneNumber: {
      type: Number,
      // required: [true, "Phone Number is required"],
      // unique:[true , "Phone Number must be unique"]
    },
    companyName: {
      type: String,
      // required: [true, "Company Name is required"]
    },
    address: {
      type: String,
      // required: [true, "Address is required"]
    },
    gstNo: {
      type: String,
      // required: [true, "GST No is required"],
      // unique:[true , "GST No must be unique"]
    },
    listedProducts:[
      {
        type:Schema.Types.ObjectId,
        ref:'Product'
    }
    ],
    accountStatus: {
      type: String,
      enum:{
        values:['Pending','Approved','Suspended'],
        default:"Pending"
      }
    }
  },
  
  {timestamps:true},
  {collection:'seller'}
  )


  

 const Seller = mongoose.model('Seller', sellerSchema)
module.exports=Seller