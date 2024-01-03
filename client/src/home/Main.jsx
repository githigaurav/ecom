import React, { useEffect, useState } from 'react'
import Card from '../helpers/Card'
import { useRef } from 'react';
import Slider from "react-slick";
import {motion} from 'framer-motion'

const Main = () => {
  const divRef = useRef();
  const [width, setWidth]=useState(0)

  useEffect(()=>{
    setWidth(divRef.current.scrollWidth - divRef.current.offsetWidth)
  },[])
  return (
  <>
    <div className='w-full flex flex-col pt-[64px] px-2 items-center'>

      <div className='max-w-[1600px] m-2 bg-white'>
        <h3 className='p-2 uppercase font-bold text-3xl'>Shoes</h3>     
        <motion.div whileTap={{cursor:"grabbing"}} className='flex flex-col overflow-hidden   'ref={divRef} >
            <motion.div  drag="x" dragConstraints={{right:0 , left:-width}}  className=' p-2  flex gap-4  sm:px-2   w-full  m-auto scroll-smooth'  >
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </motion.div>
        </motion.div>
      </div>

      <div className='max-w-[1600px] m-2 bg-white'>
        <h3 className='p-2 uppercase font-bold text-3xl'>Shoes</h3>     
        <motion.div whileTap={{cursor:"grabbing"}} className='flex flex-col overflow-hidden   'ref={divRef} >
            <motion.div  drag="x" dragConstraints={{right:0 , left:-width}}  className=' p-2  flex gap-4  sm:px-2   w-full  m-auto scroll-smooth'  >
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </motion.div>
        </motion.div>
      </div>


      


      </div>
  </>
  )
}

export default Main