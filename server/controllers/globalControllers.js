const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const cloudinary = require('cloudinary').v2; 
const fs = require('fs')
const path = require('path')

const encPass = async(plainPassword)=>{
    try {
        const result = await bcrypt.hash(plainPassword,10);
        return result
    } catch (error) {
        console.log(error)
    }
}

const decPass = async(password, hash)=>{    
        const result = await bcrypt.compare(password , hash);
        return result    
}

const token = async (data)=>{
        const token = jwt.sign(data , process.env.secrectKey ,{expiresIn:"1d"})
        return token   
}
const isDataExists = async(email ,schema)=>{
       const result = await schema.find({email:email})
       return result
    
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
        const db = new schema(info)
        const result = await db.save()      
        return result
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

const uploadToCloud = async (req) => {
      cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.CLOUD_API_KEY,
        api_secret: process.env.CLOUD_API_SECRECT,
      });
      const filePath = path.join(__dirname, "./../upload")
      const result = await cloudinary.uploader.upload(`${filePath}/${req.file.filename}`, { folder: 'ECommerce' })
    //   console.log("File has been  uploaded successfully")
      fs.unlinkSync(`${filePath}/${req.file.filename}`)
    //   console.log("File has been deleted")
      return result    
  }


module.exports = {
    addData,
    updateData,
    deleteData,
    isDataExists,
    encPass,
    decPass,
    token,
    findData,
    uploadToCloud
   
}
