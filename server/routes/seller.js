const express = require("express");
const seller = express.Router();
// importing seller db file
const sellerDB = require("./../schemas/seller");
const Product = require("./../schemas/product")

// importing global controllers
const {
    addData,
    updateData,
    deleteData,
    isDataExists,
    encPass,
    decPass,
    token,
    findData,
    uploadToCloud,
} = require("./../controllers/globalControllers");

// importing middleware
const { verifyToken, handleFile } = require("./../middleware/globalMiddleware");
const TryCatch = require("./../utils/TryCatch");
const { ApiResponse } = require('./../utils/ApiResponse')

seller.post("/register", TryCatch(async (req, res) => {
    const { password, ...data } = req.body
    const passwordResult = await encPass(password)
    const info = { ...data, password: passwordResult }
    const result = await addData(info, sellerDB);
    const { _id, ...rest } = result
    const token_info = await token({ _id: _id })
    res.cookie("token", token_info)
    res.json({ message: "Registration Successfully" })
}));


seller.post("/login", TryCatch(async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body
    const result = await isDataExists(email, sellerDB)
    if (result.length !== 0) {
        const passMatch = await decPass(password, result[0].password)
        if (passMatch) {
            const { _id, ...data } = result[0]
            const loginToken = await token({ _id: _id })
            res.cookie("token", loginToken)
            ApiResponse.success([], "Login Successfully", 200).send(res)
        } else {
            ApiResponse.failure([], "Invalid Password", 401).send(res)
        }
    } else {
        ApiResponse.failure([], "Email doesn't exists", 404).send(res)

    }

}))

seller.put("/update", async (req, res) => {
    const { _id, ...updateInfo } = req.body;

    const result = await updateData(_id, updateInfo, sellerDB);
    console.log(result)
    result
        ? res.json({ message: "Data Updated Successfully" })
        : res.json({ message: "Something went wrong please try again" });
});

seller.delete("/delete", async (req, res) => {
    const { _id, ...info } = req.body;
    const result = await deleteData(_id, sellerDB);
    result
        ? res.json({ message: "Data deleted successfully" })
        : res.json({ message: "Something went wrong please try again" });
});

seller.get("/dashboard", verifyToken, async (req, res) => {
    try {
        const _id = req.data.id;
        const result = await findData(_id, sellerDB);
        if (result.length !== 0) {
            const { password, ...dbData } = result._doc;
            res.status(200).json(dbData);
        }
    } catch (error) {
        res.status(400).json({ message: "Something went wrong" });
    }
});

seller.post("/upload", async (req, res) => {   

})
// handleFile
seller.post('/addproduct', verifyToken , handleFile ,  TryCatch(
    async(req, res)=>{
         const uploaded = await uploadToCloud(req)
         if(uploaded){           
           const productData={...req.body, fileURL:uploaded.url}
           const sellerId=req.data.id
           console.log(productData.returnApplicable)
           const result = await addData(productData,Product)
           await sellerDB.findByIdAndUpdate(sellerId,{$push:{listedProducts:result._id.toString()}}, {runValidator:false})
           const updateProduct = await Product.findByIdAndUpdate(result._id,{$push:{seller:sellerId}}) 
           ApiResponse.success([],"Product added successfully", 201 ).send(res)
         }

    }
))

seller.get('/products', verifyToken , TryCatch(
    async(req, res)=>{
        const result = await Product.find()
        if(result.length){
            ApiResponse.success(result, "Product list received" , 200).send(res)
        }
    }
))

module.exports = seller;
