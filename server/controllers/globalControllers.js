const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const encPass = async(plainPassword)=>{
    try {
        const result = await bcrypt.hash(plainPassword,10);
        return result
    } catch (error) {
        console.log(error)
    }
}

const decPass = async(password, hash)=>{
    try {
        const result = await bcrypt.compare(password , hash);
        return result
    } catch (error) {
        console.log(error)
    }
}

const token = async (data)=>{
    try {
        const token = jwt.sign(data , process.env.secrectKey ,{expiresIn:"1d"})
        return token
    } catch (error) {
            console.log(error)
    }
}
const isDataExists = async(email ,schema)=>{
    try {
       const result = await schema.find({email:email})
       return result
    } catch (error) {
        console.log(error)
    }
}
const findData = async (id , schema)=>{
    try {
       const result = await schema.findById(id)
       return result
    } catch (error) {
        return false        
    }
}

const addData = async (info, schema) => {
    try {
        const db = new schema(info)
        const result = await db.save()      
        return result
    } catch (error) {
        throw error 
             
}
}

const updateData = async(id, updateObj , schema)=>{
    try {
       const result = await schema.findByIdAndUpdate(id,{$set:updateObj})
       console.log(result)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
    
}

const deleteData = async(id , schema)=>{
    try {   
        await schema.findByIdAndDelete(id)
        return true 
    } catch (error) {
        return false
    }
} 

module.exports = {
    addData,
    updateData,
    deleteData,
    isDataExists,
    encPass,
    decPass,
    token,
    findData
}
