const jwt = require("jsonwebtoken")
const multer = require("multer")
const path = require('path')
const cloudinary = require('cloudinary').v2; 
const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token
    const result = jwt.verify(token, process.env.secrectKey)
    const { _id, tokenInfo } = result
    req.data = _id
    next()
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const handleFile= function(req, res, next){
  console.log(req.body)
  const userpath=path.join(__dirname , "./../upload")

  const storage = multer.diskStorage({
    destination:function(req, file, cb){
      cb(null,userpath)
    },
    filename:function(req, file, cb){
      cb(null, file.originalname)
    }
  })

  const upload = multer({ storage: storage }).single('file');
  upload(req, res , next, async function(err){
      if(err) throw new Error("Failed to upload File.")
      await uploadToCloud()
      
      next()
     
  })


}

          


const uploadToCloud = async (req, res, next) => {

  try {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY,
      api_secret: process.env.CLOUD_API_SECRECT,
    });
    const filePath = path.join(__dirname, "./../upload")
    const result = await cloudinary.uploader.upload(`${filePath}/upload.jpg`, { folder: 'ECommerce' })
    console.log("File has been  uploaded successfully")
  } catch (error) {
    console.log(error)
  }

}


module.exports = {
  verifyToken,
  handleFile
}