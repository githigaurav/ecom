import React, { useState } from 'react'
import { Input } from '../../helpers'
import { useFormik } from 'formik'
import { loginVal } from './../../validation/Validation'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { auth } from '../utils/Auth'
import { useNavigate } from 'react-router-dom'
import { ToastContainer , toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Animation from '../../animation/Animation'
function Login() {
    const navigate=useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginVal,
        onSubmit: async(values) => { 
            const id= toast.loading("Signing in please wait") 
            try {
                const result = await auth("post", "seller/login", values)
                // const result = await axios.post("http://localhost:3001/seller/login", JSON.stringify(values), {headers:{"Content-Type":"application/json"}, withCredentials:true})
                
             if(result.data?.message){
                toast.update(id, {render:result.data?.message, type:'success', isLoading:false })
                setTimeout(()=>{
                    toast.dismiss(id)
                    navigate("/seller/dashboard")
                },2000)
             }
            } catch (error) {
                if(error.response.data?.message){
                    toast.update(id, {render:error.response.data?.message, type:'error', isLoading:false})
                    setTimeout(()=> toast.dismiss(id), 2000)

                }
           }
         }
    })
    
    return (
        <>
            <Animation >
            <ToastContainer
             hideProgressBar={false}
             position="top-center"
             autoClose={5000}
             closeOnClick
        />
            <div className='flex h-screen justify-center items-center w-full'>
                <div className='flex flex-col gap-3 w-full max-w-[600px]'>
                    <h3 className='m-5 uppercase font-bold text-4xl text-center text-blue-600'>Seller Login</h3>
                    <Input
                        type={"text"}
                        placeholder={"Email"}
                        value={formik.values.email}
                        name={"email"}
                        onValueChange={(data) => { formik.setFieldValue("email", data.toLowerCase()) }}
                        onInputBlur={formik.handleBlur}
                    />
                
                    {formik.touched.email && formik.errors.email ? <p className='text-red-600'>{formik.errors.email}</p> : null}
                    <Input
                        type={"password"}
                        placeholder={"Password"}
                        value={formik.values.password}
                        name={"password"}
                        onValueChange={(data) => { formik.setFieldValue("password", data) }}
                        onInputBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password ? <p className='text-red-600'>{formik.errors.password}</p> : null}
                   
                    <button className='text-white bg-blue-600 p-3' onClick={formik.handleSubmit} type='submit'>Login</button>
                     <Link to="/signup" className='text-blue-600 font-thin text-center'>Forget Password</Link> 
                    <p className='text-center'>Don't have an account ? <Link to="/seller/signup" className='text-blue-600 font-semi-bold'>Sign Up</Link> </p>
                </div>
            </div>
            </Animation>
        </>
    )
}

export default Login