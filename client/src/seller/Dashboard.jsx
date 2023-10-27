import React, { useEffect, useState } from 'react'
import Profile from './profile';
import {Dropdown, Input , ProductsList , Tab, Upload, Description } from './../helpers'
function Dashboard() {
    const [tab, setTab] = useState("dashboard")
    const [productTab, setProductTab] = useState("add_products")
    const [addProduct, setAddProduct] = useState({
        product_name: '',
        brand_name: '',
        category: '',
        sub_category: '',
        price: '',
        return_applicable: '',
        warranty: '',
        cod: '',
        quantity: '',
        discount: ''
    })

    const handleTab = (tabStatus) => {
        setTab(tabStatus)
    }

    const handleProduct = (state) => {
        setProductTab(state)
    }

    useEffect(() => {

    }, [tab])
    console.log(tab)
    return (
        <>
            <div className="flex gap-2 h-screen p-2">
                <div className="bg-white w-[256px] py-5  rounded ">
                    <Profile
                        label={"Micell"}

                    />

                    <Tab
                        label={"Dashboard"}
                        imgPath="./assets/dashboard.png"
                        imgInfo="dashboard"
                        boxStyle={` ${tab === "dashboard" && `bg-blue-200`}`}
                        handleTab={() => { handleTab("dashboard") }}
                    />

                    <Tab
                        label={"Orders"}
                        imgPath="./assets/orders.png"
                        imgInfo="orders"
                        boxStyle={` ${tab === "orders" && `bg-blue-200`}`}
                        handleTab={() => {
                            handleTab("orders")
                        }}
                    />
                    <Tab
                        label={"Products"}
                        imgPath="./assets/products.png"
                        imgInfo="orders"
                        boxStyle={` ${tab === "products" && `bg-blue-200`}`}
                        handleTab={() => {
                            handleTab("products")
                        }}
                    />
                    <Tab
                        label={"Profile"}
                        imgPath="./assets/profile.png"
                        imgInfo="orders"
                        boxStyle={` ${tab === "profile" && `bg-blue-200`}`}
                        handleTab={() => {
                            handleTab("profile")
                        }}
                    />


                </div>
                <div className="grow rounded flex flex-col gap-3">
                    <div className='bg-white rounded p-3 flex  justify-between items-center'>
                        <Input
                            type={"search"}
                            placeholder={"Search..."}
                            value={''}
                            inputStyle={"p-2 bg-blue-200 rounded w-full max-w-xl m-1"}
                        />
                        <button className='text-blue-500 hover:text-blue-900 m-1'>Logout</button>
                    </div>

                    {/* if tab is selected on products then render this */}
                    {
                        tab === 'products' ?
                            <>
                                <div className='bg-white'>
                                    <button className={`px-5 py-5 ${productTab === `add_products` ? `text-blue-500` : ``}`} onClick={() => { handleProduct("add_products") }}>Add Products</button>
                                    <button className={`px-5 py-5 ${productTab === `listed_products` ? `text-blue-500` : ``}`} onClick={() => { handleProduct("listed_products") }}>Listed Products</button>
                                    <button className={`px-5 py-5 ${productTab === `pending_products` ? `text-blue-500` : ``}`} onClick={() => { handleProduct("pending_products") }}>Pending Products</button>
                                </div>
                                <div className='bg-white  h-screen flex  flex-col items-center py-5'>

                                    {/* if add products is selected then render this */}
                                    {

                                        productTab === 'add_products' ?

                                            <>
                                                <div className='flex gap-3 m-3 justify-center'>
                                                    <div className='flex flex-col gap-2'>
                                                        <Input
                                                            type={"text"}
                                                            placeholder={"Product Name"}
                                                            inputStyle={`w-[256px]`}
                                                            name={addProduct.product_name}
                                                            value={addProduct.product_name}
                                                            onValueChange={(data) => { setAddProduct({ ...addProduct, product_name: data }) }}
                                                        />
                                                        <Input
                                                            type={"text"}
                                                            placeholder={"Brand Name"}
                                                            inputStyle={`w-[256px]`}
                                                            name={addProduct.brand_name}
                                                            value={addProduct.brand_name}
                                                            onValueChange={(data) => { setAddProduct({ ...addProduct, brand_name: data }) }}
                                                        />
                                                        <Dropdown
                                                            dropDownStyle={''}
                                                            categoryLable='Select Category'
                                                            category={['Shoes', 'Clothes', 'TV']}
                                                            onCategoryChange={(data) => { setAddProduct({ ...addProduct, category: data }) }}
                                                        />
                                                        <Dropdown
                                                            dropDownStyle={''}
                                                            categoryLable='Sub Category'
                                                            category={['Male Shoes', 'Female Shoes', 'Kids Shoes']}

                                                        />
                                                        <Input
                                                            type={"number"}
                                                            placeholder={"Price"}
                                                            inputStyle={`w-[256px]`}
                                                            name={addProduct.price}
                                                            value={addProduct.price}
                                                            onValueChange={(data) => { setAddProduct({ ...addProduct, price: data }) }}
                                                        />
                                                        <Dropdown
                                                            dropDownStyle={''}
                                                            categoryLable='Return Applicable'
                                                            category={['Yes', 'No']}
                                                            onCategoryChange={(data) => { setAddProduct({ ...addProduct, return_applicable: data }) }}
                                                        />
                                                        <Dropdown
                                                            dropDownStyle={''}
                                                            categoryLable='Warranty'
                                                            category={['1 Year', '2 Year']}
                                                            onCategoryChange={(data) => { setAddProduct({ ...addProduct, warranty: data }) }}
                                                        />
                                                        <Dropdown
                                                            dropDownStyle={''}
                                                            categoryLable='Cash On Delivery'
                                                            category={['Yes', 'No']}
                                                            onCategoryChange={(data) => { setAddProduct({ ...addProduct, cod: data }) }}
                                                        />

                                                    </div>
                                                    <div className='flex flex-col gap-2'>
                                                        <Upload
                                                            uploadLable='Upload file'
                                                            uploadStyle='max-w-[256px] py-20 text-center'
                                                        />
                                                        <Input
                                                            type={"number"}
                                                            placeholder={"Quantity"}
                                                            inputStyle={`w-[256px]`}
                                                            name={addProduct.quantity}
                                                            value={addProduct.quantity}
                                                            onValueChange={(data) => { setAddProduct({ ...addProduct, quantity: data }) }}
                                                        />
                                                        <Dropdown
                                                            dropDownStyle={''}
                                                            categoryLable='Discount %'
                                                            category={['10%', '20%', "50%"]}
                                                            onCategoryChange={(data) => { setAddProduct({ ...addProduct, discount: data }) }}
                                                        />
                                                        <Description />
                                                    </div>
                                                </div>

                                                <button className='bg-blue-400 max-w-[300px] px-10 py-3 rounded-sm hover:bg-blue-900 hover:text-white'>upload</button>
                                            </>
                                            :   productTab === 'listed_products' ?
                                            <ProductsList/> : null

                                    }

                                </div>
                            </> 
                            : null
                    }
           
                </div>
            </div>
        </>
    );
}

export default Dashboard