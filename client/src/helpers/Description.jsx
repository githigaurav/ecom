import React from 'react'

function Description({
  text='',
  col='0',
  row='0',
  label='Discription'
}) {
  return (
    <>
        <textarea name="description" id="description" cols={col} rows={row} placeholder={label} className='bg-blue-200 p-2'></textarea>
    </>
  )
}

export default Description