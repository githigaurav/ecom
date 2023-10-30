import React, { useState } from "react";
// import Dashboard from './seller/Dashboard'
import Signup from "./auth/seller/Signup";
import Login from "./auth/seller/Login";
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import NotFound from "./helpers/NotFound";

function App() {
 
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'*',
      element:<NotFound/>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
