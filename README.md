# Status Code For Client and Server

## Success Responses:
1. 200 OK - Standard response for successful requests
2. 201 Created - Successful creation of a resource
3. 204 No Content - Successful request, but no content to return

## Client Error Responses:
1. 400 Bad Request - Malformed request syntax
2. 401 Unauthorized - Authentication required
3. 403 Forbidden - User does not have permission
4. 404 Not Found - Resource could not be found
5. 422 Unprocessable Entity - Validation failed on data

## Server Error Responses:
1. 500 Internal Server Error - Generic server error
2. 503 Service Unavailable - Service temporarily unavailable