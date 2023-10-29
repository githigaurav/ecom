import * as yup from 'yup'


const loginVal = new yup.ObjectSchema({
    email:yup.string().email("Valid Email is required").required("Email is required"),
    password:yup.string().required("Password is required").min(4,"Minimum 4 character password is required").max(72,"Maximum 72 Character is allowed"),
    confirm_password:yup.string().required("Confirm Password is required").oneOf([yup.ref("password")], "Password does not matched")
  

})




export {loginVal}