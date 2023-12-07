const mongoose = require("mongoose")
const { ApiError } = require("../utils/ErrorHandling")

const dbURL = process.env.DBCON

const connectToDb = async () => {
    try {
         await mongoose.connect(dbURL, { dbName: 'ecommerce' })
        console.log("db Connection established")

    } catch (error) {
       console.log(error)

    }
}

module.exports=connectToDb