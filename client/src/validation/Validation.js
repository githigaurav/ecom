import * as yup from 'yup'


const loginVal = new yup.ObjectSchema({
    email:yup.string().email("Valid Email is required").required("Email is required"),
    password:yup.string().required("Password is required").min(4,"Minimum 4 character password is required").max(72,"Maximum 72 Character is allowed"),
  

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

const addProductValidation = new yup.ObjectSchema({
    productName: yup.string().required("Product name is required").min(3, "Minim 3 Character is required").max(72, "Maximum 72 Character allowed only"),
    brandName: yup.string().required("Brand is required.").min(3, "Minim 3 Character is required").max(72, "Maximum 72 Character allowed only"),
    category: yup.string().required("Category is required.").min(3, "Minim 3 Character is required").max(72, "Maximum 72 Character allowed only"),
    subCategory: yup.string().required("Sub Category is required.").min(3, "Minim 3 Character is required").max(72, "Maximum 72 Character allowed only"),
    price: yup.number("Valid Price required").required("Product price is required").max(999999 , "Maximum price reached"),
    returnApplicable: yup.boolean().required("Return applicable is required"),
    warranty: yup.number().required("Warranty is required").max(5, "Maximum warranty limited reached"),
    cod: yup.boolean().required("Cash on delivery is required"),
    quantity: yup.number("Valid quantity is required").required("Quanityt is required."),
    discount: yup.number("Vallid discount is required").required("Discount is required").max(50,"Maximum disocunt limit reached"),
    discription: yup.string().required("Discription is required"),
    file: yup.mixed().required('File is required'),
})




export {loginVal , regVal , addProductValidation}