import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#73946B] text-[#D2D0A0] p-8 grid grid-cols-1  mdl:grid-cols-3 '>
        <div className="">
           <h1 className='text-2xl my-4'><span className='text-black'>Shop</span>Ease</h1>
            <p>Egypt’s favorite leading online store for</p>
            <p className='my-2'> women clothing is proudly shipping to all </p>
            <p>areas in Egypt</p>
        </div>

       <div className="  my-10">
          <div className="">
          <h1>Categories</h1>
            <p>New In</p>
            <p>Clothing</p>
            <p>Brands</p>
          </div>
        </div>


        <div className="">
          <h1>Subscribe to our newsletter</h1>
           <div className="my-4">
            <input className='w-80 h-10' type="text" />
            <button className='bg-black mt-4 h-10 w-[120px]'>SUBSCIBE</button>
           </div>
           <p className='my-2'>For collaboration contact us at </p>
           <p>customer.service@dresscodeme.com</p>
        </div>
    </div>
  )
}

export default Footer