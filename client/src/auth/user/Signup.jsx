import React, { useState } from 'react'
import {Input } from '../../helpers'
import { useFormik } from 'formik'
import { userReg } from './../../validation/Validation'
import { Link , useNavigate } from 'react-router-dom'
import {ToastContainer , toast} from 'react-toastify'
import Animation from '../../animation/Animation'
import { auth } from '../utils/Auth'
function Signup() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: userReg,
    onSubmit: async (values) => {       
      const id = toast.loading("Please wait....")
      try {
        const result = await auth("post","user/register", values)
        // const result = await axios.post('http://localhost:3001/seller/register' ,JSON.stringify(values) , {headers:{"Content-Type":"application/json"} , withCredentials: true})
        if(result.data?.message){
          toast.update(id, {render:result.data?.message, type:'success' , isLoading:false})
          setTimeout(()=>{
              toast.dismiss(id)
            // navigate("/seller/dashboard")
          },3000)
        }
      } catch (error) {
  
        if(error.response.data?.message){
          toast.update(id, {render:error.response.data?.message, type:'error' , isLoading:false})            
          setTimeout(()=>{
            toast.dismiss(id)
          },3000)
        }
        
      }
     }
  })
  console.log(formik.errors)
  return (
  <Animation>
       <>
      <ToastContainer
           position="top-center"
           
      />
      <div className='flex h-screen justify-center items-center'>
      <div className='flex flex-col gap-3 w-full max-w-[600px]'>      
        <h3 className='text-center uppercase text-blue-600 font-bold text-4xl m-5'>Registration</h3>
        <Input
          type={"text"}
          placeholder={"Name"}
          value={formik.values.name}
          name={"name"}
          onInputBlur={formik.handleBlur}
          onValueChange={(value) => { formik.setFieldValue("name", value) }}
        />
        {formik.touched.name && formik.errors.name ? <p className='text-red-600'>{formik.errors.name}</p> : null}
        <Input
          type={"email"}
          placeholder={"Email"}
          name={"email"}
          value={formik.values.email}
          onInputBlur={formik.handleBlur}
          onValueChange={(value) => { formik.setFieldValue("email", value.toLowerCase()) }}
        />
        {formik.touched.email && formik.errors.email ? <p className='text-red-600'>{formik.errors.email}</p> : null}
        <Input
          type={"password"}
          placeholder={"Password"}
          name={"password"}
          value={formik.values.password}
          onInputBlur={formik.handleBlur}
          onValueChange={(value) => { formik.setFieldValue("password", value) }}
        />
        {formik.touched.password && formik.errors.password ? <p className='text-red-600'>{formik.errors.password}</p> : null}
        <Input
          type={"password"}
          placeholder={"Confirm Password"}
          name={"confirmPassword"}
          value={formik.values.confirmPassword}
          onInputBlur={formik.handleBlur}
          onValueChange={(value) => { formik.setFieldValue("confirmPassword", value) }}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? <p className='text-red-600'>{formik.errors.confirmPassword}</p> : null}
   
        <button className='bg-blue-600 text-white p-3 uppercase ' type='submit' onClick={formik.handleSubmit}>Register</button>
        <p className='text-center'>Already have an account  ? <Link to="/user/login" className='text-blue-600 font-semi-bold' >Login</Link> </p>
      </div>
    </div>

    </>
  </Animation>

  )
}

export default Signup