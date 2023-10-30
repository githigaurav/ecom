const express = require('express')
const seller = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// importing seller db file
const sellerDB = require("./../schemas/seller")

// importing global controllers
const { addData, updateData, deleteData } = require("./../controllers/globalControllers")

seller.post('/register', async (req, res) => {

    const addSeller = req.body;
    console.log(addSeller);
    addSeller.password = await bcrypt.hash(addSeller.password,10);
    console.log(addSeller);
    const result = await addData(addSeller, sellerDB)
    if (result) {
        res.json({ message: "Seller has been added" })
    } else {
        res.json({ message: "Error while adding seller" })
    }
})

seller.put("/update", async (req, res) => {
    const { _id, ...updateInfo } = req.body;
    const result = await updateData(_id, updateInfo, sellerDB)
    result ? res.json({ message: "Data Updated Successfully" }) : res.json({ message: "Something went wrong please try again" })
})

seller.delete("/delete", async (req, res) => {
    const { _id, ...info } = req.body
    const result = await deleteData(_id, sellerDB)
    result ? res.json({ message: "Data deleted successfully" }) : res.json({ message: "Something went wrong please try again" })

})

seller.post("/login", async(req,res)=>{
    const{email, password} = req.body;
    const seller = await sellerDB.findOne({email});

    if(!seller){
        return res
            .status(400)
            .json({message: "Invalid credentials"});}

    const isPassvalid = await bcrypt.compare(password ,seller.password);
    if(!isPassvalid){
        return res
            .status(400)
            .json({message: "Invalid credentials"});
    }
    const token = jwt.sign({id: seller._id}, "thisisyoursecretkey");
    res.json({token, sellerID : seller._id})// this is option, this is confirmation of the valid login under cookies.
})
module.exports = seller