import React from 'react'
import { Link } from 'react-router-dom'
import Cart from '../pages/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { FaUserLarge } from "react-icons/fa6";
import { getAuth, signOut } from "firebase/auth";
import { LogOut } from '../Redux/appSlice';
import { IoLogOutOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

const Nav = () => {
  const userInfo = useSelector((state) => state.appReducer.UserInfo)
  const dispatch = useDispatch()

  const handleLogOUT=()=> {
      const auth = getAuth();
      signOut(auth).then(() => {
         console.log("sign out successful")
        dispatch (LogOut())
        // Sign-out successful.
      }).catch((error)  => {
        // An error happened.
      });
  }

  return (
    <div className='bg-[#73946B] text-white p-4 flex justify-around items-center text-[18px]'>
    {/* // <div className='bg-[#D2D0A0]'> */}

      
      <Link to={'/Cart'}> <FaCartShopping /></Link> <br />
      
        <h1 className='text-2xl r'>Shop<span className='text-[#D2D0A0]'>Ease</span></h1>

    


      <Link to='/Registr' >
        {userInfo ? (
           <><span className='text-orange-200'>Hello: </span> {userInfo.userName}</> 
        ): ( 
        <>
        <button>  <FaUserLarge /> </button>
        </>  
        )}
      </Link>

      {userInfo && (
        <button className='flex items-center' onClick={handleLogOUT}>
         <p className='mr-2'> Log out</p>
           <IoLogOutOutline />
        </button>
      )}



    </div>
  )
}

export default Nav