import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increament , decreament ,clear , remove} from '../Redux/appSlice'
import { MdOutlineDeleteSweep } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaShopify } from "react-icons/fa";


const Cart = () => {
  const products = useSelector((state) => state.appReducer.products)
  const dispatch = useDispatch()

  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price * product.quantity
  }, 0)



   if (products.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center bg-[#e6e6e1]">
       <Link  to='/'>
        <p className="text-3xl font-bold flex">The basket is empty, go shopping <span className='ms-4 text-[50px] xs:hidden md:flex'><FaShopify /></span>   </p>
        </Link>
      </div>
    )
  }



  return (
    <div className="bg-[#e6e6e1]  h-[100v%] ">
      <div className="">

    <div className=' p-10 grid grid-cols-1  container mx-auto  '> 
      {products.map((product) => (
        <div key={product.id } className='w-[100%] h-[90%] rounded shadow-xl p-10 mb-6 bg-white'>
          <h1 className='text-2xl mb-4'>{product.title}</h1>
          <div className=" flex items-center">
                <div className="flex justify-center mr-4">
                  <img className='scale-90 hover:scale-125 ' src={product.images} width={"150px"} />
              </div>          
              <p className='text-gray-500'>{product.description}</p>
          </div>
          
          <p className='my-2'> Price: {product.price * product.quantity} LE</p>  
          <p>Pic: {product.quantity}</p>
          <div className="flex justify-between my-4">
             <div className="flex">
                <button className='bg-[#73946B] w-12 h-12 text-[#e6e6e1] hover:bg-green-500 mr-8 text-[20px] rounded' onClick={() => dispatch(increament(product.id))}>+</button> <br />
                <button className='bg-[#73946B] w-12 h-12 text-[#e6e6e1] hover:bg-red-500 text-[20px] rounded' onClick={() => dispatch(decreament(product.id))}>-</button>
             </div>
             <button  className='bg-[#e6e6e1] rounded w-[50%] h-12 text-red-500 border border-red-500 hover:bg-red-500 hover:text-[#e6e6e1] text-[20px]' onClick={() => dispatch(remove(product.id))}>remove</button>
          </div>

        </div>
      ))}
   </div>


      <div className=" flex items-center justify-between w-[100%] fixed bottom-0">
          <h1 className='bg-[#73946B] w-[70%] h-14 flex px-6 rounded justify-center items-center text-[20px] font-bold text-[#e6e6e1]'>total :{totalPrice}</h1>
          <button className='w-[20%] h-14 text-[#e6e6e1] bg-red-500 rounded hover:bg-[#e6e6e1] hover:text-red-500 hover:border border-red-500 flex items-center text-[20px] justify-center ' onClick={() => dispatch(clear())}>clear 
            <div className='ms-4'><MdOutlineDeleteSweep /></div>
          </button>
      </div>



        
    </div>
        </div>

  )
}

export default Cart