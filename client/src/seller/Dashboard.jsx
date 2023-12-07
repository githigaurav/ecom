import React, { useEffect, useState } from 'react'
import Profile from './profile';
import {Dropdown, Input , ProductsList , Tab, Upload, Description, Loading } from './../helpers'
import CookieParser from 'js-cookie'
import {useNavigate} from 'react-router-dom'
import ProfileTab from './ProfileTab';
import { getDashboard } from '../hooks/dashboard';
import axios from 'axios'
import AddProduct from './AddProduct';
function Dashboard() {
    const[online, setOnline]=useState(navigator.onLine)
    const [data, error, loading, msg] = getDashboard("http://localhost:3001/seller/dashboard")
    const navigate = useNavigate()
    const [tab, setTab] = useState("dashboard")
    const [productTab, setProductTab] = useState("add_products")
    
    const handleTab = (tabStatus) => {
        setTab(tabStatus)
    }

    const handleProduct = (state) => {
        setProductTab(state)
    }
    const handleLogout = () => {
        CookieParser.remove("token")
        navigate("/")
    }
  

    if (error) {

        if (msg === "jwt expired" || msg === "invalid signature" || msg === "jwt must be provided") {
            setTimeout(() => {
                navigate("/")
            }, 2000)
            return <h1>Session Expired</h1>
        }
        return <h3>Something went wrong</h3>

    }
    if(!online){
            return <p>No Internet Connection</p>
    }
    if (loading) {
        return <Loading />
    }


   
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
                        <button className='text-blue-500 hover:text-blue-900 m-1' onClick={handleLogout}>Logout</button>
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


                                            (<AddProduct/>)
                                            :   productTab === 'listed_products' ?
                                            <ProductsList/> : null

                                    }

                                </div>
                            </> 
                            : tab === "profile" ? <ProfileTab data={data}/> : null
                    }
           
                </div>
            </div>
        </>
    );
}

export default Dashboard