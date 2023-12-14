import React from 'react'

function Home() {
  return (
    <>
      <div className='max-w-[450px] bg-blue-600  flex flex-col items-center overflow-hidden'>
          <div>
            <img src={"./assets/product.webp"} alt="product" className='max-w-[400px] max-h[200px] rounded-xl object-fill ' />
          </div>
          <div className='flex w-full justify-between  max-w-[400px]'>
              <h3 className='font-bold uppercase'>Puma shoes</h3>
              <p className='font-light'>Rs. 5000</p>
          </div>        
      </div>
    </>
  )
}

export default Home