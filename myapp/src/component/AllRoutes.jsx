import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from '../Page/Home'
import Login from '../Page/Login'
import Register from '../Page/Register'
import Product from '../Page/Product'
import ProductDetails from '../Page/ProductDetails'
import CartPage from '../Page/CartPage'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/products" element={<Product/>}/>
            <Route path="/products/:id" element={<ProductDetails/>}/>
            <Route path="/cart/:id" element={<CartPage/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes