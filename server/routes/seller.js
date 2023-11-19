const express = require("express");
const seller = express.Router();
// importing seller db file
const sellerDB = require("./../schemas/seller");

// importing global controllers
const {
    addData,
    updateData,
    deleteData,
    isDataExists,
    encPass,
    decPass,
    token,
    findData
} = require("./../controllers/globalControllers");

// importing middleware
const {verifyToken ,handleFile} = require("./../middleware/globalMiddleware")
seller.post("/register", async (req, res) => {
    try {
        const { password, ...data } = req.body
        const passwordResult = await encPass(password)
        const info = { ...data, password: passwordResult }
        const result = await addData(info, sellerDB);
        const { _id, ...rest } = result
        const token_info = await token({ _id: _id })
        res.cookie("token", token_info)
        res.json({ message: "Registration Successfully" })

    } catch (error) {
        console.log(error)
        if (error.code === 11000 && error.keyPattern.gstNo) {
            res.status(400).json({ message: "GST Number is already exists" });
        } else if (error.code === 11000 && error.keyPattern.email) {
            res.status(400).json({ message: "Email is already exists" });
        } else if (error.code === 11000 && error.keyPattern.email) {
            res.status(400).json({ message: "Email is already exists" });
        } else if (error.code === 11000 && error.keyPattern.phoneNumber) {
            res.status(400).json({ message: "Phne Number is already exists" });
        } else if (error.errors.name?.message) {
            res.status(400).json({ message: error.errors.name.message });
        } else if (error.errors.email?.message) {
            res.status(400).json({ message: error.errors.email.message });
        } else if (error.errors.password?.message) {
            res.status(400).json({ message: error.errors.password.message });
        } else if (error.errors.phoneNumber?.message) {
            res.status(400).json({ message: error.errors.phoneNumber.message });
        } else if (error.errors.companyName?.message) {
            res.status(400).json({ message: error.errors.companyName.message });
        } else if (error.errors.address?.message) {
            res.status(400).json({ message: error.errors.address.message });
        } else if (error.errors.gstNo?.message) {
            res.status(400).json({ message: error.errors.gstNo.message });
        }
    }
});

seller.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body
        const result = await isDataExists(email, sellerDB)
        if (result.length !== 0) {
            const passMatch = await decPass(password, result[0].password)
            if (passMatch) {
                const { _id, ...data } = result[0]
                const loginToken = await token({ _id: _id })
                res.cookie("token", loginToken)
                res.status(200).json({ message: "Login Successfully" })
            } else {
                res.status(400).json({ message: "Invalid Password" })
            }
        } else {
            res.status(400).json({ message: "Email doesn't exists" })
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Something went wrong" })
    }
})

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
        const _id = req.data;
        const result = await findData(_id, sellerDB);
        if (result.length !== 0) {
            const { password, ...dbData } = result._doc;
            res.status(200).json(dbData);
        }
    } catch (error) {
        res.status(400).json({ message: "Something went wrong" });
    }
});





seller.post("/upload", handleFile,(req, res)=>{
    // const newData=JSON.parse(JSON.stringify(req.body))
    // console.log(newData)
})


module.exports = seller;
