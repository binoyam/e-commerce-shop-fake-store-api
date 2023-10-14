import React from "react";
import "./Header.css";
import Logo from "../../Assets/logo.svg";
import { Link } from "react-router-dom";
import CartIcon from "../../Assets/icon-cart.svg";

function Header() {
  return (
    <header className="header">
      <div className="logo-div">
        <Link to="/home" className="logo-link">
          <img src={Logo} alt="Logo" className="logo-image" />
          <span className="logo-text">e-Shop</span>
        </Link>
      </div>
      <nav className="navigation">
        <ul className="nav-links">
          <li>
            <Link to="/products" className="nav-link">
              Men
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">
              Women
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">
              Electronics
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">
              Jewelery
            </Link>
          </li>
        </ul>
      </nav>
      <div className="cart-account-div">
        <div className="cart">
          <div className="cart-wrapper">
            <img src={CartIcon} alt="" />
            <span className="cart-counter"></span>
          </div>
          <div className="cart-drop-down"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
