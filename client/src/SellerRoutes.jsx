import React, { useEffect, useState } from "react";
import Dashboard from './seller/Dashboard'
import {createBrowserRouter , RouterProvider , redirect, Navigate} from 'react-router-dom'

function SellerRoutes() {
    const router = createBrowserRouter([
      {
        path:'/dashboard',
        element:<Dashboard/>        
      }

    ])
  return (
    <RouterProvider router={router}/>
  )
}

export default SellerRoutes

