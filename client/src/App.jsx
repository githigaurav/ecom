import React, { useEffect, useState } from "react";
import Dashboard from './seller/Dashboard'
import Signup from "./auth/seller/Signup";
import Login from "./auth/seller/Login";
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import NotFound from "./helpers/NotFound";
import { Loading } from "./helpers";
import CookieParser from "js-cookie"
import SellerRoutes from "./SellerRoutes";
import Timer from "./class/Timer";
import Counter from "./class/Counter";
import ToDoList from "./class/ToDoList";
function App() {

  const [cookie , setCookie]=useState(CookieParser.get("token"))
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Login/>,
      
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
      path:'/timer',
      element:<Timer/>   
    },
    {
      path:'/counter',
      element:<Counter/>        
    },
    {
      path:'/todolist',
      element:<ToDoList/>        
    },   
    
  ])

  useEffect(()=>{

  },[cookie])

  return (
    <>
     
      {cookie ? <SellerRoutes/> :  <RouterProvider router={router}/>}
      {/* {cookie ? <h1>Login Successfully</h1> :  <h1>You are not logged in</h1>} */}
     
    </>
  );
}


export default App;
