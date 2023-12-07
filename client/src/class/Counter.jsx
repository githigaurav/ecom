import React, { useEffect, useState } from 'react'

function Counter() {
    const [pause, setPause]=useState(false)
    const [id, setId]=useState(null)
    const [counter, setcounter] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    // setInterval create a closure and remember only it's initial value that's why console.log(counter.seconds) will be zero
    // const startCounter = () => {
    //     if (!pause) {
    //         if (counter.seconds < 60) {
    //             setcounter((prev) => ({ ...prev, seconds: prev.seconds + 20 }));
    //         } else if (counter.seconds > 60) {
    //             setcounter((prev) => ({ ...prev, minutes: prev.minutes + 1 }));
    //         }
    //     }
    // };

    const startCounter = () => {
        if (!pause) {
            setcounter((prev) => {
                if (prev.seconds <=60) {
                    return { ...prev, seconds: prev.seconds + 1 };
                } else if(prev.seconds >=60 && prev.minutes < 60) {
                    return { ...prev, minutes: prev.minutes + 20 };
                }else if(prev.minutes >=60 ){
                    return { ...prev, hours: prev.hours + 1 };
                }
            });
        }
    };
    
    const handleCounter = () => {  
        const intervalId= setInterval(startCounter,1000)
        setId(intervalId)
    }
    console.log(counter.seconds)
    return (
        <div className='bg-black max-w-[600px] m-auto mt-10 py-5 rounded-xl'>
            <h3 className='text-white uppercase font-bold text-2xl text-center'>COUNTER</h3>
            <div className=' text-red-900 p-5  flex gap-10 justify-center items-center'>
                <div className='bg-white p-5 rounded-sm'>
                    <h3 className='text-bold text-2xl'>{counter.hours}</h3>
                </div>
                <div className='bg-white p-5 rounded-sm'>
                    <h3 className='text-bold text-2xl'>{counter.minutes}</h3>
                </div>
                <div className='bg-white p-5 rounded-sm'>
                    <h3 className='text-bold text-2xl'>{counter.seconds}</h3>
                </div>
            </div>
            <div className='text-center'>
                <button className='text-black bg-gray-300 py-2 px-10 uppercase ' onClick={handleCounter}>Start</button>
                <button className='text-black bg-gray-300 py-2 px-10 uppercase ' >Pause</button>
            </div>
        </div>
    )
}

export default Counter