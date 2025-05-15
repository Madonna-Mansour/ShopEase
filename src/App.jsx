import React from 'react'
import Nav from './componnant/Nav'
import Footer from './componnant/Footer'
import Produect from './componnant/Produect'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import { productData } from './API/API'
import Registr from './authencation/Registr'
import SignIn from './authencation/SignIn'



const Layout = () => {
  return (
  <>
    <Nav />
    <Outlet />
    <Footer />
  </>
)}

const App = () => {
    const router = createBrowserRouter (createRoutesFromElements (
        <Route>  
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} loader={productData} />
            </Route>
            <Route path='/Cart' element={<Cart />} />
            <Route path='/product' element={<Produect />} />
            <Route path='/Registr' element={<Registr />} />
            <Route path='/sign' element={<SignIn />} />





        </Route>

    )) 


  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

export default App