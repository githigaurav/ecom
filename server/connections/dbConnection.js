const mongoose = require("mongoose")

const dbURL = process.env.DBCON

const connectToDb = async () => {
    try {
        await mongoose.connect(dbURL,{dbName:'ecommerce'})
        console.log("db Connection established")
    } catch (error) {
        console.log("Error while mongodb Connection ", error)
        process.exit(1)
    }
}
connectToDb()
