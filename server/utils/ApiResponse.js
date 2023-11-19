class ApiResponse {
    constructor( data, message, statusCode) {
      this.data = data; // any data to be sent with the response
      this.message = message; // optional message to be displayed
      this.statusCode = statusCode; // HTTP status code provided manually
    }
  
    // A static method to create a success response with data, message and status code
    static success(data, message, statusCode) {
      return new ApiResponse(data, message, statusCode);
    }
  
    // A static method to create a failure response with data, message and status code
    static failure(data, message, statusCode) {
      return new ApiResponse(data, message, statusCode);
    }
  
    // A method to send the response as JSON to the client
    send(res) {
      res.status(this.statusCode).json(this);
    }
  }
  
  module.exports = {ApiResponse};
  