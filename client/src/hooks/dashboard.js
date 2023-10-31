import { useEffect, useState } from 'react'
import axios from 'axios'
export const getDashboard=(urlPath)=>{
    const[data, setData]=useState([])
    const[error, setError]=useState(false)
    const[loading, setLoading]=useState(false)
    const[msg, setMsg]=useState('')

    useEffect(()=>{
        ;(async ()=>{
            try {
                setMsg('')
                setLoading(true) 
                setError(false)              
                const result = await axios.get(urlPath, {withCredentials:true})
                setData(result.data)
                setLoading(false)
            } catch (error) {
                setError(true)
                console.log(msg)
                setMsg(error.response.data.message) 
                       
            }
        })()
    },[])

    return [data, error, loading , msg ]

}  
 