import React from 'react'
import { Outlet } from 'react-router'
function Parent() {
  return (
    <>
        <Outlet/>
    </>
  )
}

export default Parent