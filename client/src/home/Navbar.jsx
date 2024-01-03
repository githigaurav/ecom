import React, { useEffect, useState } from 'react'
import { Tab } from '../helpers/index'
const Navbar = () => {
  const[isOpen, setIsOpen]=useState(false)
  console.log(isOpen)
  useEffect(()=>{

  },[setIsOpen])
  return (
    <div className='w-full  '>
      <div className='bg-blue-400  w-full relative z-[1]'>
      <div className='flex justify-between  items-center max-w-[1120px] m-auto  '>
        <div className='py-5'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>
        </div>
        <div>
              <div className='sm:hidden ' onClick={()=>{setIsOpen((prev)=> !prev)}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

              </div>
          {/* hidden */}
          {/* ${isOpen ? 'right-0 top-[64px]' : 'top-[64px] -right-[1000px]'}  */}
        
          
          <div className={`sm:flex absolute sm:relative    ${isOpen ? 'top-[64px] -right-[1000px]' : 'right-0 top-[64px]'} sm:top-0 -z-[0] sm:z-0 duration-300 w-full  bg-blue-600 sm:bg-inherit   `}>
            <Tab
              label={"Login"}
              imgPath={"./../assets/login.svg"}
              imgInfo="login"
              boxStyle={`hover:text-white hover:bg-green-400 hover:shadow-md sm:hover:shadow-none sm:hover:bg-blue-400`}
              imgStyle={`text-white`}
            // handleTab={() => { handleTab("dashboard") }}
            />
            <Tab
              label={"Cart"}
              imgPath="./../assets/cart.svg"
              imgInfo="login"
              boxStyle={`hover:text-white  hover:bg-green-400 hover:shadow-md sm:hover:shadow-none sm:hover:bg-blue-400 `}
            // boxStyle={` ${tab === "dashboard" && `bg-blue-200`}`}
            // handleTab={() => { handleTab("dashboard") }}
            />
            <Tab
              label={"Become Seller"}
              imgPath="./../assets/becomeSeller.svg"
              imgInfo="login"
              boxStyle={`hover:text-white  hover:bg-green-400 hover:shadow-md sm:hover:shadow-none sm:hover:bg-blue-400 `}
            // boxStyle={` ${tab === "dashboard" && `bg-blue-200`}`}
            // handleTab={() => { handleTab("dashboard") }}
            />
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Navbar