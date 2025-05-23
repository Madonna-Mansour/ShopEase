import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLoaderData } from 'react-router-dom'
import { addToCart } from '../Redux/appSlice'
import imgg from '../assets/R.jpg'
import img2 from '../assets/image.png'

const Products = () => {
    const data = useLoaderData()
    const products = data.data
    const dispatch = useDispatch()
    console.log(products)
   

  return (
    <div className="bg-[#e6e6e1]">
      {/* <div className="h-[450px]  bg-[url(src/assets/R.jpg)] overflow-hidden text-white "> */}
      <div style={{ backgroundImage: `url(${imgg})` }} className="h-[450px]  bg-[url(src/assets/R.jpg)] overflow-hidden text-white ">
         {/* <div className="w-[500px] m-40 "> */}
         <div className="w-[500px] sticky start-40 top-56  sm:hidden md:flex">
           <div className="">
            <h1 className='text-[40px] font-bold'>Summer Collection 2025</h1>
            <p>Discover our new arivdes with up to 30% off on selected items</p>
            <div className="my-4 flex justify-between">
         <Link to='/Product'><button className='bg-[#D2D0A0] w-[130px] h-[40px] rounded-lg  hover:bg-[#73946B]'>Shop now</button></Link>   
            <button className='bg-[#73946B] w-[130px] h-[40px] rounded-lg  hover:bg-[#D2D0A0]'>View collection</button>
            </div>
            </div>
         </div>

      </div>
    <div className='grid grid-cols-1 md:grid-cols-2 mdl:grid-cols-3 '>
        {products.map((product) => (
            <div key={product.id} className='my-[100px] bg-white scale-90  shadow-xl mx-8 text-center p-8 rounded-3xl  text-green-900'>
                <h1 className=''>{product.title}</h1>
                <div className="flex justify-center my-8">
                    <img className='scale-90 hover:scale-125 ' src={product.images} width={"200px"} />
                </div>
                <p className='text-start '>{product.description}</p>
                <div className="flex justify-between items-baseline">
                <p>Price : {product.price} LE</p>  
                <button 
                  onClick={() => 
                    dispatch(
                      addToCart({
                        id:product.id,
                        title:product.title,
                        images:product.images,
                        description:product.description,
                        categ:product.category,
                        price:product.price,image:product.image,
                        quantity : 1
                      })

                    )
                  }
                className=' bg-[#73946B] h-10 w-[120px] rounded-2xl my-4 hover:bg-blue-50 text-white'>add to cart</button>
                </div>
                
            </div>
       
     ))}
    </div>
   </div>
  )
}

export default Products