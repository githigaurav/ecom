import React from 'react'

function Upload({
  uploadLable='',
  uploadStyle='',
  onFileUpload,
  file
}) {
  console.log(file)
  return (
    <>
        <input type="file" id='fileUpload' onChange={(e)=>{ onFileUpload && onFileUpload(e.target.files)}} className={`hidden `} name='file'/>
        <label htmlFor="fileUpload" className={` flex flex-col justify-center items-center cursor-pointer  border border-dotted  bg-blue-200 overflow-hidden ${uploadStyle} `}><img src={file !==null ? file : "./assets/upload.png"} alt="uploadIcon" className='block'/><p>{uploadLable}</p></label>
    </>
  )
}

export default Upload