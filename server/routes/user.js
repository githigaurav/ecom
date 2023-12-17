const user = require("express").Router()
const TryCatch = require("../utils/TryCatch")
const {addData, findData , encPass, decPass, isDataExists, token} = require("../controllers/globalControllers")
const User = require('../schemas/user')
const Product = require("../schemas/product")
const Seller = require("../schemas/seller")
const Order = require("../schemas/orders")
const { ApiResponse } = require("../utils/ApiResponse")
const { verifyToken } = require("../middleware/globalMiddleware")
const mongoose = require('mongoose')

user.post("/register", TryCatch(
    async(req, res)=>{
        const { password, ...data } = req.body
        const passwordResult = await encPass(password)
        const info = { ...data, password: passwordResult }
        const result = await addData(info, User);
        const { _id, ...rest } = result
        const token_info = await token({ _id: _id })
        res.cookie("token", token_info)
        ApiResponse.success([],"Registration Successfully", 200).send(res)
    }
))

user.post("/login", TryCatch(
    async (req, res) => {
        const { email, password } = req.body;
        const result = await isDataExists(email, User);
        if (result.length !== 0) {
            const passMatch = await decPass(password, result[0].password);
            if (passMatch) {
                const { _id, ...data } = result[0];
                const loginToken = await token({ _id: _id });
                res.cookie("token", loginToken);
                ApiResponse.success([], "Login Successfully", 200).send(res);
            } else {
                ApiResponse.failure([], "Invalid Password", 401).send(res);
            }
        } else {
            ApiResponse.failure([], "Email doesn't exists", 404).send(res);
        }
        }
))

user.get('/dashboard', verifyToken, TryCatch(
    async(req, res)=>{
        const _id = req.data.id;
        const result = await findData(_id, User);
        if (result.length !== 0) {
            const { password, ...dbData } = result._doc;
            ApiResponse.success([dbData], "Data Fetched Successfully", 200).send(res)
        }
    }
))

user.post("/buy",verifyToken, TryCatch(
    async(req, res)=>{
        const{productId ,userId}=req.body
        const buy= await addData(req.body, Order)
        const sellerId = await findData(productId, Product)
        const updateOrder = await Order.findByIdAndUpdate(buy._id.toString(),{$push:{seller:sellerId.seller.toString()}}, {runValidator:false})
        ApiResponse.success([] , "Order Successfully" , 200).send(res)

    }
))

user.get('/order', verifyToken, TryCatch(
    async(req, res)=>{
        const userId = req.data.id
        const id=new mongoose.Types.ObjectId(userId)
        const result = await Order.find({userId:id})
        ApiResponse.success([result], "Data fetch successfully" , 200).send(res)
    }
))


module.exports=user