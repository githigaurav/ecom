import React from 'react'
import { Input } from '../../helpers'
import { useFormik } from 'formik'
import { loginVal } from './../../validation/Validation'
import {Link} from 'react-router-dom'
function Login() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirm_password: ''
        },
        validationSchema: loginVal,
        onSubmit: (values) => { alert("working") }
    })
    console.log(formik.values.email)
    console.log(formik.errors)
    return (
        <>
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
                    <Input
                        type={"password"}
                        placeholder={"Confirm_Password"}
                        value={formik.values.confirm_password}
                        name={"confirm_password"}
                        onValueChange={(data) => { formik.setFieldValue("confirm_password", data) }}
                        onInputBlur={formik.handleBlur}
                    />
                    {formik.touched.confirm_password && formik.errors.confirm_password ? <p className='text-red-600'>{formik.errors.confirm_password}</p> : null}
                    <button className='text-white bg-blue-600 p-3' onClick={formik.handleSubmit}>Login</button>
                     <Link to="/signup" className='text-blue-600 font-thin text-center'>Forget Password</Link> 
                    <p className='text-center'>Don't have an account ? <Link to="/signup" className='text-blue-600 font-semi-bold'>Sign Up</Link> </p>
                </div>
            </div>
        </>
    )
}

export default Login