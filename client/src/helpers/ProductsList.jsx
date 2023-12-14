import React from 'react'

function ProductsList() {
  return (
    <>
        <div className='flex gap-5 max-w-[1120px] bg-blue-200 w-full justify-between rounded-sm py-5'>
            <div className='flex '>
                <img src={'./../assets/sample.png'} alt="productsLIst" className='p-2' />
                <div className='  p-2 flex flex-col gap-3 border-l-2 '>
                    <h2 className='font-bold text-2xl'>BenQ EX 27</h2>
                    <ul>
                        <li className=''>1 Year Warranty</li>
                        <li className=''>1 Year Warranty</li>
                        <li className=''>1 Year Warranty</li>
                        <li className=''>1 Year Warranty</li>
                    </ul>
            </div>

            </div>
           
            <div className='px-5 py-2 flex flex-col justify-between'>
                <p className='font-bold text-2xl'>Rs. 25000</p>
                <button className='bg-blue-600 text-white uppercase px-10 py-2'>Edit</button>
            </div>
        </div>
    </>
  )
}

export default ProductsList