// import { useState } from "react";

// function Login() {
//     const [user, setUser] = useState({
//         email: "",
//         password: "",
//     });

//     const handleChange = (e) => {
//         // console.log(e.target.name);
//         // console.log(e.target.value);
//         setUser({ ...user, [e.target.name]: e.target.value });
//     };
//     console.log(user);
//     return (
//         <div className="w-full h-screen flex justify-center items-center">

//             <form className="flex flex-col gap-3 w-full max-w-[600px] text-center bg-blue-400 p-5 rounded-lg">
//                 <h3 className="font-bold uppercase text-2xl m-5">Login</h3>                              
//                     <input
//                         type="email"
//                         value={user.email}
//                         onChange={handleChange}
//                         name="email"
//                         placeholder="username/email"
//                         className="p-3"
//                     ></input>
//                     <input
//                         type="password"
//                         value={user.password}
//                         onChange={handleChange}
//                         name="password"
//                         placeholder="Password"
//                         className="p-3"
//                     ></input>
//                     {/* <select name="" id="" className="p-3 text-blue-600">
//                         <option value="">Type</option>
//                         <option value="seller">Seller</option>
//                         <option value="admin">Admin</option>
//                     </select> */}
//                 <div>

//                     <button className="bg-blue-600 py-2 px-6 text-white uppercase">Login</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Login;

import React from 'react'
import { Input } from '../../helpers'
import { useFormik } from 'formik'
import { loginVal } from './../../validation/Validation'
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
                    {/* <input type="text" onClick={formik.handleChange} /> */}
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
                </div>
            </div>
        </>
    )
}

export default Login