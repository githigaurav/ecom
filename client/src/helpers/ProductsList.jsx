import React from 'react'
import { GetProduct } from '../api/CustomeAPI'
import Loading from './Loading'
const urlPath="http://localhost:3001/seller/products"
function ProductsList() {
    const[data, error, loading, msg]=GetProduct(urlPath)


    if(loading){
        return <Loading/>
    }
    if(error){
        return <p>{msg}</p>
    }
    console.log(data)
  if(data?.data?.length){

    return (
        <>
            <div className='flex flex-col w-full items-center gap-3 '>
            {
                data?.data?.map((product , index)=>{
                    let {productName,price,fileURL,brandName,category,...data}=product
                    return (
                        <div className='flex gap-5 max-w-[1120px]  bg-blue-200 w-full justify-between rounded-lg py-5 px-4 '>
                            <div className='flex'>
                                    <img src={fileURL} alt="productsLIst" className='p-2 w-[300px] h-[200px]' />
                                    <div className='  p-2 flex flex-col gap-3 border-l-2 '>
                                        <h2 className='font-bold text-2xl'>{productName}</h2>
                                        <ul>
                                            <li className=''>1 Year Warranty</li>
                                            <li className=''>1 Year Warranty</li>
                                            <li className=''>1 Year Warranty</li>
                                            <li className=''>1 Year Warranty</li>
                                        </ul>
                                    </div>
                            </div>

                            <div className='px-5 py-2 flex flex-col justify-between'>
                                    <p className='font-bold text-2xl'>Rs. {price}</p>
                                    <button className='bg-blue-600 text-white uppercase px-10 py-2'>Edit</button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </>
      )
  }
}

export default ProductsList