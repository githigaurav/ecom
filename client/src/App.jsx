import React, { useState } from "react";
import Dashboard from './seller/Dashboard'
import Signup from "./auth/seller/Signup";
// import Login from "./auth/seller/Login";
import {Input} from './helpers'
import {useFormik} from 'formik'

function App() {
 
  return (
    <>
      {/* <Login/> */}
      <Signup/>
    </>
  );
}

export default App;
