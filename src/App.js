import React, { useState } from "react";
import Nav from "./comp/nav";
import { BrowserRouter } from "react-router-dom";
import Rout from "./comp/rout";
import Footer from "./comp/footer";
import Productdetail from "./comp/productdetail";

export const App = () => {


  // Add to cart
  const [cart, setCart] = useState([]);
  // Product Detail
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  // Filter product
  const [product, setProduct] = useState(Productdetail);

  const searchbtn = (product) => {
    const change = Productdetail.filter((x) => {
      return x.cat === product;
    });
    setProduct(change);
  };


  // Product detail
  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };

  // Check if a product exists in the cart
  const addtocart = (product) => {
    // Check if a product exists in the cart based on its ID
    const exist = cart.find((x) => x.id === product.id);
  
    if (exist) {
      alert("This Product is already added to cart");
    } else {
      // If the product doesn't exist in the cart, add it with quantity 1
      setCart([...cart, { ...product, qty: 1 }]);
      alert("Product added to cart");
    }
  };
  
  console.log(cart);

  return (
    <div>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        <Rout
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
          setDetail={setDetail}
          cart={cart}
          setCart={setCart}
          addtocart={addtocart}
        />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
