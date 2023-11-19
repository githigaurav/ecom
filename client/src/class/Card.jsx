import React from 'react'

function Card({
    imgUrl='',
    imgAlt='',
}) {
  return (
    <>
        <div className='w-full max-w-[300px] bg-white m-1 '>
            <div className=''>
                <img className='w-[300px]  h-[200px] object-cover' src={imgUrl} alt="" />
            </div>
        </div>
    </>
  )
}

export default Card