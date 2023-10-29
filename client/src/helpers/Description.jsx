import React from 'react'

function Description({
  value='',
  col='0',
  row='0',
  label='Discription',
  onInputBlur,
  onValueChange,
  name
}) {
  return (
    <>
        <textarea onBlur={onInputBlur} onChange={(e)=>{ onValueChange && onValueChange(e.target.value)}} name={name} id="description" cols={col} rows={row} placeholder={label} className='bg-blue-200 p-2'>{value}</textarea>
    </>
  )
}

export default Description