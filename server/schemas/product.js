const mongoose = require("mongoose")
const { Schema } = require("mongoose")
const { allowedAToZWord, allowedNumberOnly, allowedBooleanOnly } = require("./utils.js")

// regex for validation 
// only a-z character allowed

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        validate: {
            validator: function (value) {
                return allowedAToZWord(value)
            },
            message: "Product name must contain only letter characters and spaces"
        },
        required: [true, "Product name is required"]

    },
    brandName: {
        type: String,
        validate: {
            validator: function (value) {
                return allowedAToZWord(value)
            },
            message: "Brand name must contain only letter characters and spaces"
        },
        required: [true, "Brand name is required"]
    },
    category: {
        type: String,
        validate: {
            validator: function (value) {
                return allowedAToZWord(value)
            },
            message: "Category must contain only letter characters and spaces"
        },
        required: [true, "Category is required"]
    },
    subCategory: {
        type: String,
        validate: {
            validator: function (value) {
                return allowedAToZWord(value)
            },
            message: "Sub Category must contain only letter characters and spaces"
        },
        required: [true, "Sub Category is required"]
    },
    price: {
        type: Number,
        validate: {
            validator: function (value) {
                return allowedNumberOnly(value)
            },
            message: "Price must contain only number"
        },
        required: [true, "Price is required"],
    },

    returnApplicable: {
        type: Boolean,
        validate: {
            validator: function (value) {

                return allowedBooleanOnly(value)
            },
            message: "Return applicable must be a valid value"
        },
        required: [true, "Return applicable value is required"]
    },
    warranty: {
        type: String,
        required: [true, "Warranty is required"]
    },
    cod: {
        type: Schema.Types.Mixed,
        validate: {
            validator: function (value) {
                return allowedBooleanOnly(value)
            },
            message: "Cash on Delivery  must be a valid value"
        },
        required: [true, "Cash on delivery value is required"]
    },
    quantity: {
        type: Number,
        validate: {
            validator: function (value) {
                return allowedNumberOnly(value)
            },
            message: "Quantity  must be a valid value"
        },
        required: [true, "Quantity is required"]
    },
    discount: {
        type: Number,
        validate: {
            validator: function (value) {
                return allowedNumberOnly(value)
            },
            message: "Cash on Delivery  must be a valid value"
        },
        required: [true, "Discount value is required"]
    },
    discription: {
        type: String,
        required: [true, "Discription is required"]
    },
    fileURL: {
        type: String,
        required: [true, "Image URL is required"]
    },
    seller: [
        {
            type: Schema.Types.ObjectId,
            ref: "Seller",

        }
    ]
},
    { timestamps: true },
    { collection: 'Product' }
)

const Product = mongoose.model("Product", productSchema)
module.exports = Product