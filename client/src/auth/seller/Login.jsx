import React, { useState } from 'react'
import { Input } from '../../helpers'
import { useFormik } from 'formik'
import { loginVal } from './../../validation/Validation'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate=useNavigate()
    const [exists , setExists]=useState(null)
    const [warning , setWarning]=useState("bg-red-400")
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginVal,
        onSubmit: async(values) => { 
           try {
             const result = await axios.post("http://localhost:3001/seller/login", JSON.stringify(values), {headers:{"Content-Type":"application/json"}, withCredentials:true})
           
             if(result.data?.message){
                setWarning("bg-green-600") 
                setExists(result.data?.message)
                setTimeout(()=>{
                    setExists(null)
                    navigate("/dashboard")
                },2000)
             }
            } catch (error) {
                if(error.response.data?.message){
                    setWarning("bg-red-400")
                    setExists(error.response.data?.message)
                    setTimeout(()=>{
                        setExists(null)
                    },2000)
                }
           }
         }
    })
    
    return (
        <>
            <div className='flex h-screen justify-center items-center w-full'>
                    {
                exists ? <div className=' text-center absolute top-5  '>
                    <h3 className={`${warning} p-4 text-white rounded-sm`}>{exists}</h3>
                </div> : null
            }
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
                    <p className='text-center'>Don't have an account ? <Link to="/signup" className='text-blue-600 font-semi-bold'>Sign Up</Link> </p>
                </div>
            </div>
        </>
    )
}

export default Login