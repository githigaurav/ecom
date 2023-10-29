const express = require('express')
const seller = express.Router()

// importing seller db file
const sellerDB = require("./../schemas/seller")

// importing global controllers
const { addData, updateData, deleteData } = require("./../controllers/globalControllers")

seller.post('/register', async (req, res) => {
    const result = await addData(req.body, sellerDB)
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
module.exports = seller