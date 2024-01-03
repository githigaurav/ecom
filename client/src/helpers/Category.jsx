import React from 'react'

const Category = () => {
  return (
    <div className='flex flex-col  w-fit max-w-[200px] sm:max-w-[250px] bg-white shadow-md p-3 rounded-lg'>
        <div className='relative  aspect-video max-w-[400px] min-h-[200px] '>
            <img src={"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D"}
            alt='img'
            className='w-full h-full absolute top-0 object-cover rounded-lg'
            />
        </div>
        <div className='flex flex-col items-start gap-2 p-2'>
            <h3 className='font-bold uppercase text-2xl text-blue-800'>Puma Shoes </h3>
            <p className='font-thin text-xl text-blue-700'>25000 Rs. Only</p>
            <button className='bg-blue-600 w-full p-2 text-white uppercase rounded-sm'>Add to Cart</button>
        </div>
    </div>
  )
}

export default Category