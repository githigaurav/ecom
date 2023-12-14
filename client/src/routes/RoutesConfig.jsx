import React, { useState } from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import CookieParser from "js-cookie"




const SellerRoutes=()=>{
  const [cookie , setCookie]=useState(CookieParser.get("token"))
  return(
    cookie ? <Outlet/> : <Navigate to="/seller/login"/>
  )
}


export {SellerRoutes }