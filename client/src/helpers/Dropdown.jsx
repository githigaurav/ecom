import React from 'react'

function Dropdown({
  dropDownStyle,
  categoryLable="Category",
  category=[''],
  onCategoryChange
}) {
  return (
    <>
        <select name="select" id="" className={` p-3 text-gray-400 bg-blue-200 max-w-[256px] ${dropDownStyle}`} onChange={(e)=>{onCategoryChange && onCategoryChange(e.target.value)}}>
            <option value="" className='text-gray-600 bg-white' >{categoryLable}</option>
            {category.map((item, index)=>{
              return <option value={item} key={index} className='text-gray-600 bg-white' >{item}</option>
            })}
            
        </select> 
      
    </>
  )
}

export default Dropdown