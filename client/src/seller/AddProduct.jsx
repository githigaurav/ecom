import React, { useState } from "react";
import { Input , Dropdown, Upload , Description} from "../helpers";
import axios from "axios";
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
const subCategory={
    shoes:["Male Shoes", "Female Shoes", "Kids Shoes"],
    clothes:["Male Clothes", "Female Clothes", "Kids clothes"]
}

function AddProduct() {
  const [addProduct, setAddProduct] = useState({
    product_name: "",
    brand_name: "",
    category: "",
    sub_category: "",
    price: "",
    return_applicable: "",
    warranty: "",
    cod: "",
    quantity: "",
    file: null,
    discount: "",
    discription: "",
  });

  const handleSubmit=()=>{
        const myData = new FormData()
        for(let key in addProduct){
          myData.append(key, addProduct[key])
        }
       
        axios.post("http://localhost:3001/seller/upload",myData,{headers:{'Content-Type': 'multipart/form-data'}, withCredentials:true} )
        .then((respnse)=>{
            console.log(respnse)
        })
        .catch((error)=>{
            console.log(error)
        })
//     const formData = new FormData()
   
//     const data = {...addProduct , formData}
//    axios.post("http://localhost:3001/seller/upload", data, { headers:{'Content-Type': 'multipart/form-data'},withCredentials:true})
//    .then((response)=>{
//     console.log(response)
//    })
//    .catch((error)=>{
//     console.log(error)
//    })
}
console.log(addProduct.file)
  return (
    <>
      
        <div className="flex gap-3 m-3 justify-center">
          <div className="flex flex-col gap-2">
            <Input
              type={"text"}
              placeholder={"Product Name"}
              inputStyle={`w-[256px]`}
              name={addProduct.product_name}
              value={addProduct.product_name}
              onValueChange={(data) => {
                setAddProduct({ ...addProduct, product_name: data });
              }}
            />
            <Input
              type={"text"}
              placeholder={"Brand Name"}
              inputStyle={`w-[256px]`}
              name={addProduct.brand_name}
              value={addProduct.brand_name}
              onValueChange={(data) => {
                setAddProduct({ ...addProduct, brand_name: data });
              }}
            />
            <Dropdown
              dropDownStyle={""}
              categoryLable="Select Category"
              category={["shoes", "clothes", "TV"]}
              onCategoryChange={(data) => {
                setAddProduct({ ...addProduct, category: data });
              }}
            />
            <Dropdown
              dropDownStyle={""}
              categoryLable="Sub Category"
              category={
                addProduct.category ? subCategory[addProduct.category] : [""]
              }
              onCategoryChange={(data) => {
                setAddProduct({ ...addProduct, sub_category: data });
              }}
            />
            <Input
              type={"number"}
              placeholder={"Price"}
              inputStyle={`w-[256px]`}
              name={addProduct.price}
              value={addProduct.price}
              onValueChange={(data) => {
                setAddProduct({ ...addProduct, price: data });
              }}
            />
            <Dropdown
              dropDownStyle={""}
              categoryLable="Return Applicable"
              category={["Yes", "No"]}
              onCategoryChange={(data) => {
                setAddProduct({ ...addProduct, return_applicable: data });
              }}
            />
            <Dropdown
              dropDownStyle={""}
              categoryLable="Warranty"
              category={["1 Year", "2 Year"]}
              onCategoryChange={(data) => {
                setAddProduct({ ...addProduct, warranty: data });
              }}
            />
            <Dropdown
              dropDownStyle={""}
              categoryLable="Cash On Delivery"
              category={["Yes", "No"]}
              onCategoryChange={(data) => {
                setAddProduct({ ...addProduct, cod: data });
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Upload
              uploadLable="Upload file"
              onFileUpload={(file) => {
                setAddProduct({ ...addProduct, file: file[0] });
              }}
              uploadStyle="max-w-[256px] max-h-[250px] py-20 text-center"
              file={addProduct.file !== null && addProduct.file !== undefined ? (URL.createObjectURL(addProduct.file)) : null }
            />
            <Input
              type={"number"}
              placeholder={"Quantity"}
              inputStyle={`w-[256px]`}
              name={addProduct.quantity}
              value={addProduct.quantity}
              onValueChange={(data) => {
                setAddProduct({ ...addProduct, quantity: data });
              }}
            />
            <Dropdown
              dropDownStyle={""}
              categoryLable="Discount %"
              category={["10%", "20%", "50%"]}
              onCategoryChange={(data) => {
                setAddProduct({ ...addProduct, discount: data });
              }}
            />
            <Description
              value={addProduct.discription}
              onValueChange={(data) => {
                setAddProduct({ ...addProduct, discription: data });
              }}
            />
          </div>
        </div>

        <button
          className="bg-blue-400 max-w-[300px] px-10 py-3 rounded-sm hover:bg-blue-900 hover:text-white"
          onClick={handleSubmit}
        >
          upload
        </button>
        
     
    </>
  );
}

export default AddProduct;
