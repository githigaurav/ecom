import React, { useState } from 'react'
import Card from './Card'
const krishanArr=[
   "https://5.imimg.com/data5/SELLER/Default/2023/8/337076523/XS/DE/KY/20619026/radhakrishnapcock-indmrt6.jpg",
   "https://t3.ftcdn.net/jpg/05/15/63/82/360_F_515638234_Leo0UBEay0ozXWnObkkxLRNJXM9xhdWG.jpg",
   "https://i.pinimg.com/736x/ee/8f/52/ee8f524b3ebe41cdeac4caeb5288de32.jpg",
   "https://img.freepik.com/premium-photo/lord-krishna-beautiful-poster-with-imaginary-landscape-janmasthami-special-indian-people_94010-649.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699056000&semt=ais",
   "https://t3.ftcdn.net/jpg/05/97/92/78/360_F_597927853_iZIpn7Blgg3TPd1XEKgF1KhLRuqNxhiU.jpg",
   "https://img.freepik.com/premium-photo/lord-krishna-beautiful-poster-with-imaginary-landscape-janmasthami-special-indian-people_94010-658.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1698969600&semt=ais",
   "https://5.imimg.com/data5/SELLER/Default/2023/8/337076523/XS/DE/KY/20619026/radhakrishnapcock-indmrt6.jpg",
   "https://t3.ftcdn.net/jpg/05/15/63/82/360_F_515638234_Leo0UBEay0ozXWnObkkxLRNJXM9xhdWG.jpg",
   "https://i.pinimg.com/736x/ee/8f/52/ee8f524b3ebe41cdeac4caeb5288de32.jpg",
   "https://img.freepik.com/premium-photo/lord-krishna-beautiful-poster-with-imaginary-landscape-janmasthami-special-indian-people_94010-649.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699056000&semt=ais",
   "https://t3.ftcdn.net/jpg/05/97/92/78/360_F_597927853_iZIpn7Blgg3TPd1XEKgF1KhLRuqNxhiU.jpg",
   "https://img.freepik.com/premium-photo/lord-krishna-beautiful-poster-with-imaginary-landscape-janmasthami-special-indian-people_94010-658.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1698969600&semt=ais"
]
const bikeImgArr=[
    "https://wallpapercave.com/wp/wp4807948.jpg",
    "https://www.livemint.com/lm-img/img/2023/04/15/600x338/mt_15_v2_1681556876015_1681558132152_1681558132152.png",
    "https://wallpapers.com/images/hd/stylish-blue-motorcycle-mqs2hvthx57xbnlm.jpg",
    "https://wallpapercave.com/wp/wp4807961.jpg",
    "https://png.pngtree.com/thumb_back/fh260/background/20230519/pngtree-one-of-the-most-popular-blue-motorcycles-image_2602715.jpg",
    "https://images.unsplash.com/photo-1552642824-17148a69ac2c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VwZXJiaWtlfGVufDB8fDB8fHww",
    "https://wallpapercave.com/wp/wp4807948.jpg",
    "https://www.livemint.com/lm-img/img/2023/04/15/600x338/mt_15_v2_1681556876015_1681558132152_1681558132152.png",
    "https://wallpapers.com/images/hd/stylish-blue-motorcycle-mqs2hvthx57xbnlm.jpg",
    "https://wallpapercave.com/wp/wp4807961.jpg",
    "https://png.pngtree.com/thumb_back/fh260/background/20230519/pngtree-one-of-the-most-popular-blue-motorcycles-image_2602715.jpg",
]

function Class() {
    const [img, setImg]=useState('krishna')
    console.log(img)
  return (
      <>
          <div>
              <div className='flex items-center p-4 bg-blue-300'>
                  <h1 className='font-bold text-2xl flex-1 text-blue-600'>ImageExpress</h1>
                  <input type="search" placeholder='Search... ' className='p-2 w-full max-w-[600px] rounded' />
                  <div className='flex gap-10 flex-1 justify-end text-white'>
                      <button className='uppercase font-semibold'>Home</button>
                      <button className='uppercase font-semibold'>Services</button>
                      <button className='uppercase font-semibold'>Browse</button>
                  </div>
              </div>
              <div className=' p-4 flex justify-center gap-1'>
                  <button className='bg-blue-400 py-2 text-white px-5 hover:bg-blue-800 uppercase w-[200px]' onClick={() => { setImg("krishna") }}>Krishna</button>
                  <button className='bg-blue-400 py-2 text-white px-5 hover:bg-blue-800 uppercase w-[200px]' onClick={() => { setImg("bike") }}>Bike</button>
              </div>

              <div className='flex m-4 flex-wrap m-auto'>
                  {img === 'krishna' ?
                      krishanArr.map((imgURL, index) => (
                          <Card imgUrl={imgURL} key={index} />
                      )) :
                      img === 'bike' ?
                          bikeImgArr.map((imgURL, index) => (
                              <Card imgUrl={imgURL} key={index} />
                          )) : null
                  }
              </div>
          </div>
      </>
  )
}

export default Class