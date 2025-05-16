import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../Redux/appSlice';

const SignIn = () => {
       const [email , setEmail] = useState("")
       const [password , setPassword] = useState("")
       const navigaet = useNavigate()
       const dispatch = useDispatch()

       const handleSubmit = (e) => {
               e.preventDefault()

               const auth = getAuth();
               signInWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                  const user = userCredential.user;
                console.log("logged in successfully , welcome you")

                  setTimeout(()=> navigaet('/'),2000)
                
                  dispatch(
                   setUser({
                     id:user.uid ,
                     userName:user.displayName,
                     email:user.email
                  }))
               })
               
               .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
               });
        }


     return (
      <div className='bg-[#e6e6e1] h-[100vh] flex justify-center items-center  flex-col '>
          <h1 className='text-center  mb-8 font-bold text-[40px]'>Log in</h1>
            <div className='bg-[#73946B] m-6 p-6  rounded' >           <form onSubmit={handleSubmit}>

               <label htmlFor="">Enter your name</label>
               <input className='bg-[#e6e6e1] p-4 mb-4 w-[100%] h-[35px] rounded mt-1'
                  type='email'
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder='you@gmail.com'
               ></input>
   
               <label htmlFor="">Enter your password</label>
               <input className='bg-[#e6e6e1] p-4 mb-4 w-[100%] h-[35px] rounded mt-1'
                  type='password'
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder=''
               ></input>
   
             <div className="flex justify-center">
                    <button  className='bg-[#D2D0A0]  w-[50%] h-[35px] rounded mt-8  hover:bg-blue-50' type='submit'>Submit</button>
            </div>
          <Link className='text-center ' to='/Registr'><p className='mt-10 text-[#e6e6e1]'>Create account ?</p></Link>

          </form>
           </div>
         </div>
         )
   
}

export default SignIn
