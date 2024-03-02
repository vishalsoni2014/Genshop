import React, { useState } from "react";
import { FaTruck } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


import "./nav.css";
const Nav = ({searchbtn}) => {
    const [ search, setSearch] = useState()
    const { loginWithRedirect, logout, user, isAuthenticated, } = useAuth0();
  return (
    <>
    <div className="free">
          <div className="icon">
              <FaTruck />
          </div>
          <p>FREE Shipping Upto ₹20000</p>
      </div><div className="main_header">
              <div className="container">
                  <div className="logo">
                      <img src="./img/favicon.png" alt="logo"></img>
                  </div>
                  <div className="search-box">
                      <input type="text" value={search} placeholder="Enter produt name" autoComplete="off" onChange={(e) => setSearch(e.target.value)}></input>
                      <button onClick={() => searchbtn(search)}>search</button>
                  </div>
                  <div className="icon">
                  {
                    isAuthenticated &&
                    (
                        <div className="account">
                    <div className="user_icon">
                    <FaRegUser />
                    </div>
                   <p>Hello, {user.name}</p>
                  </div> 
                    )
                  }
                   
                  <div className="second-icon">  
                  <Link to="/" className="link"><FaRegHeart /></Link>
                  <Link to="/cart" className="link"><FaCartArrowDown /></Link>
              
                  </div>
                  </div>
              </div>

          </div>
            <div className="header">
            <div className="container">
            <div className="nav">
            <ul>
                    <li>
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li>
                        <Link to="/products" className="link">products</Link>
                    </li>
                    <li>
                        <Link to="/About" className="link">About</Link>
                    </li>
                    <li>
                        <Link to="/Contact" className="link">Contact</Link>
                    </li>  
                </ul>
            </div>
                
                <div className="auth">
                {
                    isAuthenticated ?
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout /></button>
                :
                <button onClick={() => loginWithRedirect()}><LuLogIn /></button>
                }
                </div>
            </div>  
            </div>         
          </>    
  );
};

export default Nav;
