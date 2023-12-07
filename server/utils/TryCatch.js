const { ApiResponse } = require("./ApiResponse")
const mongoose = require("mongoose")
const mongooseErrorHandler = (res, data) => {
    const customeMsg = {
        email: "Email already exists",
        gstNo: "GST No already exists",
        phoneNumber: "Phone Number already exists",
        email: "Email already exists",
    }
    ApiResponse.failure([], customeMsg[data], 400).send(res)
}

const TryCatch = (fn) => async (req, res, next) => {
    try {
        await fn(req, res);
    } catch (error) {
        // Unique Value Validator for mongoose
        if (error.constructor.name === "MongoServerError") {
            if (error.code === 11000) {
                if (error.keyPattern?.email) {
                    mongooseErrorHandler(res, "email");
                }
                if (error.keyPattern?.gstNo) {
                    mongooseErrorHandler(res, "gstNo");
                }
                if (error.keyPattern?.phoneNumber) {
                    mongooseErrorHandler(res, "phoneNumber");
                }
            }
        }

        // Value required validator for mongoose
        if (error instanceof mongoose.Error.ValidationError) {
            const message = Object.values(error.errors).map((e) => e.message);
            ApiResponse.failure([], message[0], 400).send(res);

        }
    }
};



module.exports=TryCatch