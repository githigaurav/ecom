import React, { useState } from "react";
import { Input, Dropdown, Upload, Description, Loading } from "../helpers";
import axios from "axios";
import 'react-image-crop/dist/ReactCrop.css'
import { useFormik } from 'formik'
import { addProductValidation } from "../validation/Validation";
const subCategory = {
  shoes: ["Male Shoes", "Female Shoes", "Kids Shoes"],
  clothes: ["Male Clothes", "Female Clothes", "Kids clothes"]
}
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddProduct() {
  const [loading, setLoading] = useState(false)
  const [btn, setBtn] = useState('Upload')
  const formik = useFormik({
    initialValues: {
      productName: "",
      brandName: "",
      category: "",
      subCategory: "",
      price: "",
      returnAplicable: "",
      warranty: "",
      cod: "",
      quantity: "",
      file: null,
      discount: "",
      discription: "",
    },
    validationSchema: addProductValidation,
    onSubmit: async (value) => {
      try {
        setLoading(true)
        setBtn("Please Wait")
        let myData = new FormData()
        for (let key in value) {
          if (key === 'file') {
            myData.append(key, value[key][0])
          }
          myData.append(key, value[key])

        }
        const id = toast.loading("please wait")
        const result = await axios.post("http://localhost:3001/seller/addproduct", myData, { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true })
        setLoading(false)
        toast.update(id, { render: result.data?.message, type: "success", isLoading: false });
        setTimeout(() => {
          toast.dismiss(id)
        }, 2000)
        setBtn("Upload")
        formik.handleReset()

      } catch (error) {
        console.log(error)
      }
    }
  })

  return (
    <>
      <ToastContainer
        hideProgressBar={false}
        position="top-center"
      />

      <div className="flex gap-3 m-3 justify-center">
        <div className="flex flex-col gap-2">
          <Input
            type={"text"}
            placeholder={"Product Name"}
            inputStyle={`w-[256px]`}
            name={"productName"}
            value={formik.values.productName}
            onValueChange={(data) => formik.setFieldValue("productName", data)}
          />
          {formik.errors.productName ? <span className="text-red-600">{formik.errors.productName}</span> : null}
          <Input
            type={"text"}
            placeholder={"Brand Name"}
            inputStyle={`w-[256px]`}
            name={"brandName"}
            value={formik.values.brandName}
            onValueChange={(data) => formik.setFieldValue("brandName", data)}
          />
          {formik.errors.brandName ? <span className="text-red-600">{formik.errors.brandName}</span> : null}
          <Dropdown
            dropDownStyle={""}
            categoryLable="Select Category"
            category={["shoes", "clothes", "TV"]}
            onCategoryChange={(data) => formik.setFieldValue("category", data)}
          />
          {formik.errors.category ? <span className="text-red-600">{formik.errors.category}</span> : null}
          <Dropdown
            dropDownStyle={""}
            categoryLable="Sub Category"
            category={
              formik.values.category ? subCategory[formik.values.category] : [""]
            }
            onCategoryChange={(data) => formik.setFieldValue("subCategory", data)}
          />
          {formik.errors.subCategory ? <span className="text-red-600">{formik.errors.subCategory}</span> : null}
          <Input
            type={"number"}
            placeholder={"Price"}
            inputStyle={`w-[256px]`}
            name={"price"}
            value={formik.values.price}
            onValueChange={(data) => formik.setFieldValue("price", data)}
          />
          {formik.errors.price ? <span className="text-red-600">{formik.errors.price}</span> : null}
          <Dropdown
            dropDownStyle={""}
            categoryLable="Return Applicable"
            category={["true", "false"]}
            onCategoryChange={(data) => formik.setFieldValue("returnAplicable", data)}
          />
          {formik.errors.returnAplicable ? <span className="text-red-600">{formik.errors.returnAplicable}</span> : null}
          <Dropdown
            dropDownStyle={""}
            categoryLable="Warranty"
            category={[1, 2, 3, 4, 5]}
            onCategoryChange={(data) => formik.setFieldValue("warranty", data)}
          />
          {formik.errors.warranty ? <span className="text-red-600">{formik.errors.warranty}</span> : null}
          <Dropdown
            dropDownStyle={""}
            categoryLable="Cash On Delivery"
            category={["true", "false"]}
            onCategoryChange={(data) => formik.setFieldValue("cod", data)}
          />
          {formik.errors.cod ? <span className="text-red-600">{formik.errors.cod}</span> : null}
        </div>
        <div className="flex flex-col gap-2">
          <Upload
            uploadLable="Upload file"
            onFileUpload={(file) => formik.setFieldValue('file', file)}
            uploadStyle="max-w-[256px] max-h-[250px] py-20 text-center"
            file={formik.values.file !== null && formik.values.file !== undefined ? (URL.createObjectURL(formik.values.file[0])) : null}
          />
          {formik.errors.file ? <span className="text-red-600">{formik.errors.file}</span> : null}
          <Input
            type={"number"}
            placeholder={"Quantity"}
            inputStyle={`w-[256px]`}
            name={"quantity"}
            value={formik.values.quantity}
            onValueChange={(data) => formik.setFieldValue("quantity", data)}
          />
          {formik.errors.quantity ? <span className="text-red-600">{formik.errors.quantity}</span> : null}
          <Dropdown
            dropDownStyle={""}
            categoryLable="Discount %"
            category={[10, 20, 30, 50]}
            onCategoryChange={(data) => formik.setFieldValue("discount", data)}
          />
          {formik.errors.discount ? <span className="text-red-600">{formik.errors.discount}</span> : null}
          <Description
            value={formik.values.discription}
            onValueChange={(data) => formik.setFieldValue("discription", data)}
          />
          {formik.errors.discription ? <span className="text-red-600">{formik.errors.discription}</span> : null}
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-400 max-w-[300px] px-10 py-3 rounded-sm hover:bg-blue-900 hover:text-white"
        onClick={formik.handleSubmit}
        disabled={loading}
      >
        {btn}
      </button>
      <button onClick={() => { setLoading((prev) => !prev) }}>Disable field</button>
    </>
  );
}

export default AddProduct;
