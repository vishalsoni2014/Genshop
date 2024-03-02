import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="about ">
            <div className="logo">
              <img src="./img/favicon.png" alt="logo"></img>
            </div>
            <div className="detail">
              <p>
                We are a team of designers and developers that create high
                quality
              </p>
              <div className="icon">
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaSquareTwitter />
              </li>
              <li>
                <FaYoutube />
              </li>
            </div>
          </div>
          </div>
        
        <div className="account">
          <h3>My Account</h3>
          <ul>
            <li>Account</li>
            <li>Order</li>
            <li>Cart</li>
            <li>shipping</li>
            <li>return</li>
          </ul>
        </div>
        <div className="page">
        <h4>Page</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Terma & Condition</li>
          </ul>
        </div>
      </div>
      </div>

    </>
  );
};

export default Footer;
