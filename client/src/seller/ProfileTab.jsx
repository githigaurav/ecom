import React from 'react'

function ProfileTab(props) {
  const {name, email, phoneNumber, address, companyName, gstNo }=props.data
  console.log(props.data)
  return (
    <div className='bg-white h-screen  w-full  p-5 flex flex-col items-center'>
       <div className='  flex gap-20 justify-center p-10 max-w-[900px] w-full border '>
       <div className='flex flex-col gap-10 flex-1'>
          <div>Name</div>
          <div>Email</div>
          <div>Phone Number</div>
          <div>Company Name</div>
          <div>GST No.</div>
          <div>Companyy Address</div>
        </div>
        <div className='flex flex-col gap-10 flex-1'>
          <div>{name}</div>
          <div>{email}</div>
          <div>{phoneNumber}</div>
          <div>{companyName}</div>
          <div>{gstNo}</div>
          <div>{address}</div>
        </div>
        
       </div>
       <div className=' w-full max-w-[900px] text-center'>
          <button className='py-3 px-12 text-white bg-blue-500 m-5 uppercase'>Edit</button>
        </div>
    </div>
  )
}

export default ProfileTab