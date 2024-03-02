import React from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';

import './cart.css';

const Cart = ({ cart, setCart }) => {
  // increase qty
  const incqty = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    setCart(
      cart.map((curElm) =>
        curElm.id === product.id ? { ...exist, qty: exist.qty + 1 } : curElm
      )
    );
  };

  // decrease qty
  const decqty = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    setCart(
      cart.map((curElm) =>
        curElm.id === product.id ? { ...exist, qty: exist.qty - 1 } : curElm
      )
    );
  };

  // remove product
  const removeproduct = (product) => 
  {
    const exist = cart.find((x) =>
    {
      return x.id === product.id
    })
    if(exist.qty > 0)
    {
      setCart(cart.filter((x) =>
      {
        return x.id !== product.id
      }
      
      ))
    }
  }

  // total price
  const Totalprice = cart.reduce((price, item) => price + item.qty * item.price, 0);

  return (
    <>
      <div className='cartcontainer'>
        {cart.length === 0 ? (
          <div className='emptycart'>
            <h2 className='empty'>Your cart is empty.</h2>
            <Link to='/products' className='emptycartbtn'>
              Shop Now
            </Link>
          </div>
        ) : (
          <div className='contant'>
            {cart.map((curElm) => (
              <div className='cart_item' key={curElm.id}>
                <div className='img_box'>
                  <img src={curElm.img} alt={curElm.Title} />
                </div>
                <div className='detail'>
                  <div className='info'>
                    <h4>{curElm.Title}</h4>
                    <h3>{curElm.cat}</h3>
                    <p>price: ₹{curElm.price}</p>
                    <div className='qty'>
                      <button className='incqty' onClick={() => incqty(curElm)}>
                        +
                      </button>
                      <input type='text' value={curElm.qty} readOnly />
                      <button className='decqty' onClick={() => decqty(curElm)}>
                        -
                      </button>
                    </div>
                    <p>Sub total: ₹{curElm.price * curElm.qty}</p>
                  </div>
                  <div className='close'>
                    <button onClick={() => removeproduct(curElm)}>
                      <IoMdCloseCircleOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {cart.length > 0 && (
          <>
            <h2 className='Totalprice'>Total price: ₹{Totalprice.toLocaleString()}</h2>
            <button className='checkout'>Checkout</button>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
