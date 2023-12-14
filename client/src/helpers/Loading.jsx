import React from 'react'

import Message from './Message'
function Loading() {
    return (
        <>
            <div className='grid place-content-center h-screen'>
                <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
            </div>
        </>
    )
}

export default Loading