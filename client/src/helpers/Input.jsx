import React from 'react'

function Input({
    type,
    placeholder,
    value,
    name,
    onValueChange,
    onInputBlur,
    inputStyle,
   

}) {
    return ( 
        <>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={(e) => onValueChange && onValueChange(e.target.value)}
                onBlur={onInputBlur}
                className={`${inputStyle} p-3 bg-blue-200`}
                
            />
        </>
    )
}

export default Input