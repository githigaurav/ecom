import { useState } from 'react';

// import { Input } from '../../helpers';

function Signup() {
    const [sellerinfo, Setsellerinfo] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        phoneNumber: "",
        companyName: "",
        address: "",
        gst: ""
    });


    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name)
        Setsellerinfo({ ...sellerinfo, [name]: value });

    }

    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            //call api 
            console.log(sellerinfo)
        }
        catch (error) {
            console.log(error);
        }

    }
 
    return (<>

        <div className='w-full h-screen flex justify-center items-center'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-full max-w-[600px] bg-blue-300 py-10 px-10 rounded-xl '>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="seller_name">Seller Name</label>
                    <input
                        id="seller_name"
                        placeholder='Your Name Please'
                        name="name"
                        value={sellerinfo.name}
                        onChange={handleChange}
                        className='p-2'
                    />

                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="seller_email">Email ID:</label>
                    <input id="seller_email"
                        placeholder='Enter Email ID'
                        type="email"
                        name="email"
                        value={sellerinfo.email}
                        onChange={handleChange}
                        className='p-2'
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="seller_password">Password:</label>
                    <input id="seller_password"
                        placeholder='Enter Password'
                        type="password"
                        name="password"
                        value={sellerinfo.password}
                        onChange={handleChange}
                        className='p-2'
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="seller_password">Confirm_Password:</label>
                    <input id="seller_password"
                        placeholder='Confirm Password'
                        type="password"
                        name="confirm_password"
                        value={sellerinfo.confirm_password}
                        onChange={handleChange}
                        className='p-2'
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="seller_phonenumber">Phone Number:</label>
                    <input id="seller_phonenumber"
                        placeholder='Enter Phone Number'
                        name="phoneNumber"
                        value={sellerinfo.phoneNumber}
                        onChange={handleChange}
                        className='p-2'
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="seller_companyname">Company Name:</label>
                    <input id="seller_companyname"
                        placeholder='Name of the company'
                        name="companyName"
                        value={sellerinfo.companyName}
                        onChange={handleChange}
                        className='p-2'
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="seller_address">Address:</label>
                   
                <textarea
                    id="seller_address"
                    name="address" 
                    placeholder='address'
                    value={sellerinfo.address} 
                    onChange={handleChange}              
                    cols="30"
                    rows="10"
                    className='p-2'
                ></textarea>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="seller_gstinfo">GST No:</label>
                    <input id="seller_gstinfo"
                        placeholder='GST No.'
                        name="gst"
                        value={sellerinfo.gst}
                        onChange={handleChange}
                        className='p-2'
                    />
                </div>

                <div className=''>
                    <button type='submit' className='bg-blue-600 p-3 text-white uppercase'>Register</button>
                </div>
                {/* <button type="submit" className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"}>
      Save
    </button> */}
            </form>

            {/* <Input type="String"placeholder = "SellerName"/> */}
        </div>


    </>

    )
}

export default Signup