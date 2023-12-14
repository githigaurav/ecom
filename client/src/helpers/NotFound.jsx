import React from 'react'

function NotFound() {
    setTimeout(()=>{
        window.location.href="/seller/login"
    },3000)
  return (
    <div className='flex w-full h-screen justify-center items-center'>
        <div className='flex max-w-xl flex-col items-center'>
            <img  src={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0e738c17-7f3c-422e-8225-f8c782b08626/dedgs1k-376288c3-03b0-47ed-966b-44cbdb50b357.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBlNzM4YzE3LTdmM2MtNDIyZS04MjI1LWY4Yzc4MmIwODYyNlwvZGVkZ3Mxay0zNzYyODhjMy0wM2IwLTQ3ZWQtOTY2Yi00NGNiZGI1MGIzNTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LB1TasIAefb2wzKuyVA2eSoYsuP0mDL9_7R3EMOnRCc"}  alt="dog" />
            <h3 className='font-bold text-4xl text-red-600'>Opps Page Not Found</h3>
            <p className='text-green-900 m-4'>You will be redirected home page in 3 second...</p>
        </div>
    </div>
  )
}

export default NotFound