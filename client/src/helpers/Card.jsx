import React from 'react'
import {motion} from 'framer-motion'
const Card = () => {
  return (
    <motion.div initial={{ zIndex: 0 }} whileHover={{scale:1.2 , zIndex: 100}} transition={{ type: "spring", damping: 30, stiffness: 200 }} className='flex flex-col  w-fit max-w-[200px] sm:max-w-[250px] bg-white border p-3 '>
    <div className='relative  aspect-video max-w-[200px] min-h-[200px] '>
        <img src={"./../assets/shoes.webp"}
        alt='img'
        className='w-full h-full absolute top-0 object-contain rounded-lg'
        />
    </div>
    <div className='flex flex-col items-start gap-2 p-2'>
        <h3 className='font-bold uppercase text-2xl text-blue-800'>Puma Shoes </h3>
        <p className='font-thin text-xl text-blue-700'>25000 Rs. Only</p>
    </div>
</motion.div>
  )
}

export default Card