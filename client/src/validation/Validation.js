import * as yup from 'yup'


const loginVal = new yup.ObjectSchema({
    email:yup.string().email("Valid Email is required").required("Email is required"),
    password:yup.string().required("Password is required").min(4,"Minimum 4 character password is required").max(72,"Maximum 72 Character is allowed"),
    confirm_password:yup.string().required("Confirm Password is required").oneOf([yup.ref("password")], "Password does not matched")
  

})

const regVal = new yup.ObjectSchema({
    name:yup.string().required("Name is required").min(3, "Minimum 3 Character is required"),
    email:yup.string().email("Valid Email is required").required("Email is required"),
    password:yup.string().required("Password is required").min(4,"Minimum 4 character password is required").max(72,"Maximum 72 Character is allowed"),
    confirmPassword:yup.string().required("Confirm Password is required").oneOf([yup.ref("password")], "Password does not matched"),
    phoneNumber:yup.string().required("Phone Number is required").max(10,"Please Provide a valid number").min(10,"Please Provide a valid number"),
    companyName:yup.string().required("Company Name is required").min(6, "Min 6 Character is required"),
    address:yup.string().required("Address is required").min(3,"Minimum 3 Character is required"),
    gstNo:yup.string().required("GST No is required")

  

})




export {loginVal , regVal}