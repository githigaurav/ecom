import React from 'react'

function Profile({
  label
}) {
  return (
   <>
    <div className='flex flex-col items-center gap-2'>
        <img src={"./../assets/profile.webp"} alt="" className='rounded-full w-[100px] h-[100px] ' />
        <p className='font-bold text-2xl py-2'>{label}</p>
    </div>
   </>
  )
}

export default Profile