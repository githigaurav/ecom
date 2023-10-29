import React from 'react'
import { Description, Input } from '../../helpers'
import {useFormik} from 'formik'
import {regVal} from './../../validation/Validation'


function Signup() {
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            password:'',
            confirmPassword:'',
            phoneNumber:'',
            companyName:'',
            address:'',
            gstNo:''
        },
        validationSchema:regVal,
        onSubmit:(values)=>{console.log(values)}
    })
    console.log(formik.values)
    console.log(formik.errors)
  return (
 <div className='flex h-screen justify-center items-center'>
     <div className='flex flex-col gap-3 w-full max-w-[600px]'>
        <h3 className='text-center uppercase text-blue-600 font-bold text-4xl m-5'>Registration</h3>
      <Input
    type={"text"}
    placeholder={"Name"}
    value={formik.values.name}
    name={"name"}
    onInputBlur={formik.handleBlur}
    onValueChange={(value)=>{ formik.setFieldValue("name", value.toLowerCase()) }}
    />
     {formik.touched.name && formik.errors.name ? <p className='text-red-600'>{formik.errors.name}</p> : null}
      <Input
    type={"email"}
    placeholder={"Email"}
    name={"email"}
    value={formik.values.email}
    onInputBlur={formik.handleBlur}
    onValueChange={(value)=>{formik.setFieldValue("email", value.toLowerCase())}}
    />
      {formik.touched.email && formik.errors.email ? <p className='text-red-600'>{formik.errors.email}</p> : null}
      <Input
    type={"password"}
    placeholder={"Password"}
    name={"password"}
    value={formik.values.password}
    onInputBlur={formik.handleBlur}
    onValueChange={(value)=>{formik.setFieldValue("password", value)}}
    />
    {formik.touched.password && formik.errors.password ? <p className='text-red-600'>{formik.errors.password}</p> : null}
      <Input
    type={"password"}
    placeholder={"Confirm Password"}
    name={"confirmPassword"}
    value={formik.values.confirmPassword}
    onInputBlur={formik.handleBlur}
    onValueChange={(value)=>{formik.setFieldValue("confirmPassword", value)}}
    />
    {formik.touched.confirmPassword && formik.errors.confirmPassword ? <p className='text-red-600'>{formik.errors.confirmPassword}</p> : null}
      <Input
    type={"number"}
    placeholder={"Phone Number"}
    name={"phoneNumber"}
    value={formik.values.phoneNumber}
    onInputBlur={formik.handleBlur}
    onValueChange={(value)=>{formik.setFieldValue("phoneNumber", value)}}
    />
    {formik.touched.phoneNumber && formik.errors.phoneNumber ? <p className='text-red-600'>{formik.errors.phoneNumber}</p> : null}
    <Input
     type={"text"}
    placeholder={"Company Name"}
    name={"companyName"}
    value={formik.values.companyName}
    onInputBlur={formik.handleBlur}
    onValueChange={(value)=>{formik.setFieldValue("companyName", value.toLowerCase())}}
    />
        {formik.touched.companyName && formik.errors.companyName ? <p className='text-red-600'>{formik.errors.companyName}</p> : null}

    <Description
        label='address'
        onInputBlur={formik.handleBlur}
        value={formik.values.address}
        name={'address'}
        onValueChange={(value)=>{formik.setFieldValue("address", value.toLowerCase())}}
    />
    
    {formik.touched.address && formik.errors.address ? <p className='text-red-600'>{formik.errors.address}</p> : null}

     <Input
     type={"text"}
    placeholder={"GST Number"}
    name={"gstNo"}
    value={formik.values.gstNo}
    onInputBlur={formik.handleBlur}
    onValueChange={(value)=>{formik.setFieldValue("gstNo", value.toLowerCase())}}
    />
    {formik.touched.gstNo && formik.errors.gstNo ? <p className='text-red-600'>{formik.errors.gstNo}</p> : null}
    <button className='bg-blue-600 text-white p-3 uppercase '>Register</button>
  </div>
 </div>
    
    
  )
}

export default Signup