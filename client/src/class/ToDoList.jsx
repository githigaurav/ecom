import React from 'react'

function ToDoList() {
    return (
        <>
            <div className='w-full flex justify-center py-5'>
                <div className='flex flex-col gap-5 m-auto'>

                    <div className='p-2'>
                        <input type="text" className='p-2' placeholder='Task...' />
                        <button className='bg-blue-400 py-2 px-5'>Add</button>
                    </div>

                    <div className='bg-blue-200 max-w-[600px]'>
                        <p className='p-2'>List will be visible here</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoList