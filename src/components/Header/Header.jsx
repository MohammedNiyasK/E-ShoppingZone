import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {
  Link,
} from "react-router-dom";

function Header() {
const [isNavExpanded,setIsNavExpanded] =useState(false)
  
  return (
    <div className="header">
      <div className="container header">
        <div className="nav-bar">
          <div className="logo" >
            <Link to="/" className="logo-home">
              <img src={logo} alt="logo" className="logo-img" width="125px" />
            </Link>
            
          </div>
          <nav className="nav-list">
          <div className={isNavExpanded ? "nav-menu_expanded" : "nav-hide"}>
            <ul className="nav-menu " id="menu-list">
              <li className="nav-link ">
                <Link to="/" className="nav-name">
                  Home

                </Link>
               
              </li>
              <li className="nav-link">
                <Link to="/products" className="nav-name">
                  Products
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/about" className="nav-name">
                  About
                </Link>
              </li>
              <li className="nav-link">
                <Link to ="/contact" className="nav-name">
                  Contact
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/account" className="nav-name">
                  Account
                </Link>
              </li>
            </ul>
            </div>
          </nav>
          <div className="header__icons">
          <Link to ="/cart" style={{textDecoration:"none",color:"#333"}}>
          <ShoppingCartCheckoutOutlinedIcon className="cart" />
          </Link>
          <div className='menu_icon' onClick={() =>{
            setIsNavExpanded(!isNavExpanded)
          }}>
          <MenuOutlinedIcon />
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Header;
