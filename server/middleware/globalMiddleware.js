const jwt = require("jsonwebtoken")

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




module.exports = {
  verifyToken
}