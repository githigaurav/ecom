import React, { useEffect, useState } from "react";
import Dashboard from './seller/Dashboard'
import Signup from "./auth/seller/Signup";
import Login from "./auth/seller/Login";
import {createBrowserRouter , RouterProvider , redirect, Navigate} from 'react-router-dom'
import NotFound from "./helpers/NotFound";
import { Loading } from "./helpers";
import CookieParser from "js-cookie"
function App() {

  const [cookie , setCookie]=useState(CookieParser.get("token"))
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Login/>
      
    },
    {
      path:'/signup',
      element:<Signup/>,
      
    },
    {
      path:'*',
      element:<NotFound/>
    },
    {
      path:'/dashboard',
      element: cookie ? <Dashboard /> : <Navigate to="/" />  
    },
    {
      path:'/load',
      element:<Loading/>
    },
    
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}


export default App;
