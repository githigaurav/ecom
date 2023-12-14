const jwt = require("jsonwebtoken")
const multer = require("multer")
const path = require('path')
const verifyToken = async (req, res, next) => {

  try {
    const token = req.cookies.token
    const result = jwt.verify(token, process.env.secrectKey)
    const { _id, tokenInfo } = result
    req.data = {
      id: _id
    }
    next()
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const handleFile = function (req, res, next) {

  const userpath = path.join(__dirname, "./../upload")

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, userpath)
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
  })

  const upload = multer({ storage: storage }).single('file');

  upload(req, res, async function (err) {
    if (err) {
      console.log("there is an error while uploading file")
    }
    next()
  })

}







module.exports = {
  verifyToken,
  handleFile
}