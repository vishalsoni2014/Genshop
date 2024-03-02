import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { FiTruck } from "react-icons/fi";
import { MdCurrencyRupee } from "react-icons/md";
import { LiaPercentSolid } from "react-icons/lia";
import { FaHeadphones } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

import Homeproduct from "./homeprouct";

import "./home.css";
const Home = ({ detail, view, close, setClose, addtocart}) => {
  return (
    <>
      {close ? (
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
                    <h3>${curElm.price}</h3>
                    <button>Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="productbox"></div>
          </div>
        </div>
      ) : null}

      <div className="top-banner">
        <div className="container">
          <div className="details">
            <h2>The Best Laptop collection of 2024</h2>
            <Link to="/products" className="link">
              Shop Now
              <GoArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src="./img/Asus1.png" alt="sliderimg"></img>
          </div>
        </div>
      </div>
      <div className="product-types">
        <div className="container">
          <div className="box">
            <div className="img-box">
            <Link className="link" to="./products">             
              <img src="./img/tablet1.png" alt="tablet"></img>
            </Link>
            </div>
            
            <div className="detail">
              <h4>Tablets</h4>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
            <Link className="link" to="./products">
              <img src="./img/Samsung-Galaxy1.png" alt="mobile"></img>
              </Link>
            </div>
            <div className="detail">
            <h4>Phone</h4>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
            <Link className="link" to="./products">
              <img src="./img/Headphone-4.png" alt="Headphone"></img>
              </Link>
            </div>
            <div className="detail">
            <h4>Headphones</h4>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
            <Link className="link" to="./products">
              <img src="./img/Powerbank.webp" alt="Powerbank"></img>
              </Link>
            </div>
            <div className="detail">
            <h4>Powerbanks</h4>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
            <Link className="link" to="./products">
              <img src="./img/microphone-webcam.png" alt="tablet"></img>
              </Link>
            </div>
            <div className="detail">
            <h4>webcam</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FiTruck />
            </div>
            <div className="details">
              <h3>Free Shipping</h3>
              <p>Order above ₹20000</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <MdCurrencyRupee />
            </div>
            <div className="details">
              <h3>Return & Refund</h3>
              <p>Money Back Gaurenty</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <LiaPercentSolid />
            </div>
            <div className="details">
              <h3>Member Discount</h3>
              <p>on Every Order</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FaHeadphones />
            </div>
            <div className="details">
              <h3>Customer Support</h3>
              <p>24/7 Support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
          {Homeproduct.map((curElm) => {
            return (
              <div className="box" key={curElm.id}>
                <div className="img_box">
                  <img src={curElm.img} alt={curElm.Title}></img>
                  <div className="icon">
                    <li onClick={() => addtocart(curElm)}>
                      <FaCartArrowDown />
                    </li>
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
            );
          })}
        </div>
      </div>

      <div className="banner">
        <div className="container">
          <div className="detail">
            <h4> Latest Technology Added</h4>
            <h3>
              Tab P12 Pro | Premium tablet with 12.6" 2K AMOLED display | Lenovo
              US
            </h3>
            <p>
              <MdCurrencyRupee /> 6,400.
            </p>
            <Link className="link" to="./products">
              Shop Now
              <GoArrowRight />
            </Link>
          </div>
          <div className="img_box">
            <img src="./img/tab-banner2.webp" alt="tablet"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
