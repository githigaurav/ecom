import React, { useEffect, useState } from 'react';

function Timer() {
    const [date, setDate] = useState(new Date())
    const [data, setData] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });


    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setData({
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds()
        });
    }, [date]);
   

    return (
        <>
            <div className='bg-black max-w-[600px] m-auto mt-10 py-5 rounded-xl'>
                <h3 className='text-white uppercase font-bold text-2xl text-center'>Timer</h3>
                <div className=' text-red-900 p-5  flex gap-10 justify-center items-center'>
                    <div className='bg-white p-5 rounded-sm'>
                        <h3 className='text-bold text-2xl'>{data.hours}</h3>
                    </div>
                    <div className='bg-white p-5 rounded-sm'>
                        <h3 className='text-bold text-2xl'>{data.minutes}</h3>
                    </div>
                    <div className='bg-white p-5 rounded-sm'>
                        <h3 className='text-bold text-2xl'>{data.seconds}</h3>
                    </div>
                </div>
            </div>

           
        </>
    );
}

export default Timer;