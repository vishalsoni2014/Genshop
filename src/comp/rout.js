import React from 'react'
import { Routes, Route} from "react-router-dom";
import Home from "./home"
import Product from "./product"
import Cart from './cart';
import Contact from './contact';
import About from './about';
export const Rout = ({product, setProduct, detail, setDetail, view, close, setClose, cart, setCart, addtocart}) => {
  return (
    <>
    <Routes >
        <Route path="/" element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
        <Route path="/products" element={<Product product={product} setProduct={setProduct} detail={detail} setDetail={setDetail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>


    </Routes>
    </>
  )
}

export default Rout