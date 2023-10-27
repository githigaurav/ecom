import * as yup from 'yup'


const loginVal = new yup.ObjectSchema({
    email:yup.string().email("Valid Email is required").required("Email is required"),
    password:yup.string().required("Password is required").min(6,"Minimum 6 Character is required").max(72,"Max 72 Character is allowed only"),
    type:yup.string().required("Role is required")

})

export {loginVal}