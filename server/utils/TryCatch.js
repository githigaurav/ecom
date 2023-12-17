const { ApiResponse } = require("./ApiResponse");

const mongooseErrorHandler = (res, data) => {
  const customeMsg = {
    email: "Email already exists",
    gstNo: "GST No already exists",
    phoneNumber: "Phone Number already exists",
    email: "Email already exists",
  };
  ApiResponse.failure([], customeMsg[data], 400).send(res);
};

const TryCatch = (fn) => async (req, res, next) => {
  try {
    await fn(req, res);
  } catch (error) {

    // Unique Value Validator for mongoose
    if (error.constructor.name === "MongoServerError") {
   
      if (error.code === 11000) {
        if (error?.keyPattern) {
          mongooseErrorHandler(res, Object.keys(error?.keyPattern)[0]);
        }
      }
    }

    if (error?.name === "ValidationError") {
      const message = Object.values(error?.errors).map((e) => e.message);
      ApiResponse.failure([], message[0], 400).send(res);
    }

    // if(error?.message){
    //   ApiResponse.failure([], error.message, 400).send(res)
    // }
    console.log(error)
  }
};

module.exports = TryCatch;
