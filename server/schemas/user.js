const {mongoose, Schema} =require("mongoose")
const {allowedAToZWord,allowedNumberOnly,allowedBooleanOnly, allowedEmailOnly} =require("./utils.js")
const userSchema = mongoose.Schema({
    email:{
        type:String,
        unique:[true, "Email is already exists"],
        required:[true, "Email is required"],
        validate:{
            validator:function(value){
                return allowedEmailOnly(value)
            },
            message:"Valid email is required"
        }
        
    },
    password:{
        type:String,
        required:[true, "Password is required"]
    },
    address:{
        type:Array,
        default:[]
    },
    orders:{
        type:Array,
        default:[]
    },
    accountStatus:{
        type:String,
        enum:["pending","verified","suspended","deactivated"],
        default:"pending"
    }
},
{timestamps:true},
{collection:'user'}
)

const User = mongoose.model("User", userSchema)

module.exports=User