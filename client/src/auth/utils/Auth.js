import axios from 'axios'
const serverURL="http://localhost:3001/"

export const auth=async (type, path , payload)=>{
        return  await axios[type](`${serverURL}${path}`, JSON.stringify(payload) , {headers:{"Content-Type":"application/json"}, withCredentials:true} )
   }