...under process 
*** 
## Client Directory
📦src

    Framer Animation Directory
    📦animation
    ┗ 📜Animation.jsx

    Custom Hooks for getting data to Dashboard (later name will be changed)
    📦api
    ┗ 📜Api.js

    Role based  Login && Signup Page
    📦auth
    ┣ 📂seller
    ┃ ┣ 📜Login.jsx
    ┃ ┗ 📜Signup.jsx

    Custome Component which can be used any time just import and use
    📦helpers
        ┣ 📜Description.jsx
        ┣ 📜Dropdown.jsx
        ┣ 📜index.js
        ┣ 📜Input.jsx
        ┣ 📜Loading.jsx
        ┣ 📜Message.jsx
        ┣ 📜NotFound.jsx
        ┣ 📜ProductsList.jsx
        ┣ 📜Tab.jsx
        ┗ 📜Upload.jsx

    Custome Hooks (not optomised yet)
    📦hooks
        ┗ 📜dashboard.js

    Role Based Routes Config
    📦routes
        ┗ 📜RoutesConfig.jsx

    Seller Essential component
    📦seller
        ┣ 📜AddProduct.jsx
        ┣ 📜Dashboard.jsx
        ┣ 📜Profile.jsx
        ┗ 📜ProfileTab.jsx

    Form or Input Validation Config
    📦validation
        ┗ 📜Validation.js
   
## Server Directory
📦server

    Mongoose Connection
    📦connections
        ┗ 📜dbConnection.js

    Global Control for CRUD Operation
    📦controllers
        ┗ 📜globalControllers.js

    Milddleware such as JWT Multer etc.
    📦middleware
        ┗ 📜globalMiddleware.js

    Role based Routes 
    📦routes
        ┣ 📜admin.js
        ┣ 📜index.js
        ┣ 📜seller.js
        ┗ 📜user.js

    Schema For User , Seller , Admin and some validatio files under Utils
    📦schemas
        ┣ 📜orders.js
        ┣ 📜product.js
        ┣ 📜seller.js
        ┗ 📜utils.js

    Global Response && Error Handling
    📦utils
        ┣ 📜ApiResponse.js
        ┣ 📜ErrorHandling.js
        ┣ 📜GlobalUtils.js
        ┗ 📜TryCatch.js
    
    Environment Variable Config file
        ┗ 📜.env


    Server Configuration
        ┗ 📜index.js

   
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