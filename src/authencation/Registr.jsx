import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import sign from './SignIn'

const Registr = () => {


    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [confirmPassword , setConfirmPassword] = useState("")
    
    const naviget = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
               updateProfile(auth.currentUser , {
                 displayName: name
               })
            console.log(user)
            console.log("account created  successfully")
            // ...

            setTimeout(()=> {
               naviget("/sign")
            }, 2000)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode , errorMessage)

            // ..
        });
    }


  return (
   <div className='bg-[#e6e6e1] h-[100vh] flex justify-center items-center flex-col'>
      <h1 className='text-center  mb-8 font-bold text-[40px]'>Create account</h1>
     <div className='bg-[#73946B] p-14 rounded' >
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Enter your name</label> <br />
            <input className='bg-[#e6e6e1] p-4 mb-4 w-[100%] h-[35px] rounded mt-1'
               value={name}
               onChange={(e) => setName(e.target.value)}
               required
               placeholder=''
            ></input> <br />

            <label htmlFor="">Enter your email</label> <br />
            <input className='bg-[#e6e6e1] p-4 mb-4 w-[100%] h-[35px] rounded mt-1'
               value={email  }
               onChange={(e) => setEmail(e.target.value)}
               required
               placeholder=''
            ></input> <br />

            <label htmlFor="">Enter your password</label> <br />
            <input className='bg-[#e6e6e1] p-4 mb-4 w-[100%] h-[35px] rounded mt-1'
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
               placeholder=''
            ></input> <br />

            <label htmlFor="">Enter your confirm password</label> <br />
            <input className='bg-[#e6e6e1] p-4 mb-4 w-[100%] h-[35px] rounded mt-1'
               value={confirmPassword}
               onChange={(e) => setConfirmPassword(e.target.value)}
               required
               placeholder=''
            ></input> <br />
          <div className="flex justify-center">
            <button  className='bg-[#D2D0A0]  w-[50%] h-[35px] rounded mt-8  hover:bg-blue-50' type='submit'>Submit</button>
            </div>
            <Link className='text-center ' to='/sign'><p className='mt-10 text-[#e6e6e1]'>Sign in ?</p></Link>
        </form>
     </div>
    </div>
  )
}

export default Registr