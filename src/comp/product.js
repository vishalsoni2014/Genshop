import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";
import Productdetail from "./productdetail";
import { IoCloseCircleOutline } from "react-icons/io5";

import "./product.css";

const Product = ({
  product,
  setProduct,
  detail,
  setDetail,
  view,
  close,
  setClose,
  addtocart
}) => {


  const { loginWithRedirect, isAuthenticated, } = useAuth0();
  const filterProduct = (product) => {
    const update = Productdetail.filter((x) => {
      return x.cat === product;
    });
    setProduct(update);
  };

  const AllProducts = () => {
    setProduct(Productdetail);
  };
  return (
    <>
    {
      close ?
      
      <div className="product_detail">
        <div className="container">
          <button onClick={() => setClose(false)} className="btn">
            <IoCloseCircleOutline />
          </button>

          <div className="productbox">
            {detail.map((curElm) => (
              <div className="productbox">
                <div className="img-box">
                  <img src={curElm.img} alt={curElm.Title} />
                </div>
                <div className="detail">
                  <h4>{curElm.cat}</h4>
                  <h2>{curElm.Title}</h2>
                  <h3>₹{curElm.price}</h3>
                  {/* <button>Add to Cart</button> */}
                </div>
              </div>
            ))}
          </div>

          <div className="productbox"></div>
        </div>
      </div> : null
    }
      <div className="products">
        <h3># Products</h3>
        <p>Home .products</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>categories</h3>
              <ul>
                <li onClick={() => AllProducts()}>All Products</li>
                <li onClick={() => filterProduct("tablet")}>tablet</li>
                <li onClick={() => filterProduct("phone")}>phone</li>
                <li onClick={() => filterProduct("headphone")}>headphone</li>
                <li onClick={() => filterProduct("webcam")}>webcam</li>
                <li onClick={() => filterProduct("laptop")}>laptop</li>
                <li onClick={() => filterProduct("keyboard")}>keyboard</li>
                <li onClick={() => filterProduct("mouse")}>mouse</li>
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="contant">
              {product.map((curElm) => {
                return (
                  <>
                    <div className="box" key={curElm.id}>
                      <div className="img_box">
                        <img src={curElm.img} alt={curElm.Title}></img>
                        <div className="icon">
                        {
                          isAuthenticated ?
                          <li onClick={() => addtocart(curElm)}>
                            <FaCartArrowDown /></li>
                            :
                            <li onClick={() => loginWithRedirect()}>
                            <FaCartArrowDown />
                            </li>
                        }
                          
                          <li onClick={() => view(curElm)}>
                            <IoEyeOutline />
                          </li>
                          <li>
                            <IoIosHeartEmpty />
                          </li>
                        </div>
                      </div>
                      <div className="detail">
                        <p>{curElm.cat}</p>
                        <h3>{curElm.Title}</h3>
                        <h4>₹{curElm.price}</h4>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
