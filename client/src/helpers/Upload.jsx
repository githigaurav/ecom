import React from 'react'

function Upload({
  uploadLable='',
  uploadStyle=''
}) {
  return (
    <>
        <input type="file" id='fileUpload' className={`hidden `} />
        <label htmlFor="fileUpload" className={` flex flex-col justify-center items-center cursor-pointer  border border-dotted  bg-blue-200  ${uploadStyle} `}><img src={'./assets/upload.png'} alt="uploadIcon" className='w-[50px]'/><p>{uploadLable}</p></label>
    </>
  )
}

export default Upload