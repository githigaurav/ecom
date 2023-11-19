import React, { useEffect, useState } from "react";
import Dashboard from './seller/Dashboard'
import Signup from "./auth/seller/Signup";
import Login from "./auth/seller/Login";
import {createBrowserRouter , RouterProvider , redirect, Navigate} from 'react-router-dom'
import NotFound from "./helpers/NotFound";
import { Loading } from "./helpers";
import CookieParser from "js-cookie"
import SellerRoutes from "./SellerRoutes";
import Class from "./class/Class";
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
      path:'/load',
      element:<Loading/>
    },
    {
      path:'/dashboard',
      element:<Dashboard/>        
    },
    {
      path:'/class',
      element:<Class/>
    }
    
  ])

  useEffect(()=>{

  },[cookie])

  return (
    <>
      {cookie ? <SellerRoutes/> :  <RouterProvider router={router}/>}
    </>
  );
}


export default App;
