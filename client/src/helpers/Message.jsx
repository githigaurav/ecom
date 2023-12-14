import React, { useEffect, useState } from 'react'

function Message({
    label='Default messaging',
    messageStyle='bg-teal-200 border-teal-600 border-w-1/2',

}) {

  return (
    <>
        
          <div className={`w-full sm:max-w-[400px] border-t-4 flex  justify-between   absolute top-1 left-1/2 -translate-x-1/2    md:text-xl lg:text-2xl ${messageStyle}`}>
          <p className='p-2'>{label}</p>
          </div> 
        
    </> 
  )
}

export default Message