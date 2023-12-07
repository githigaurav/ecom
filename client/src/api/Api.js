import React, { useState } from 'react'
import axios  from 'axios'
const Api =async(method,url,data)=>{
    const [data, setData]=useState([])
    const [error, setError]=useState(false)
    const [errormsg, setErrorMsg]=useState('')
    const [loading, setLoading]=useState(false)
    try {
        setError(false)
        setError('')
        setLoading(true)
        const res = await axios[method](url ,JSON.stringify(data) , {headers:{"Content-Type":"application/json"} , withCredentials: true})
        setData(res)
        loading(false)
    } catch (error) {
        setError(true)
        setErrorMsg(error.message)
    }

    return [data, error, errormsg , loading]

}

export default Api