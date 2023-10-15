import React, { useState } from "react";
import "./Header.css";
import Logo from "../../Assets/logo.svg";
import { Link } from "react-router-dom";
import CartIcon from "../../Assets/icon-cart.svg";

function Header({ handleCategoryChange }) {

  return (
    <header className="header">
      <div className="logo-div">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="Logo" className="logo-image" />
          <span className="logo-text">e-Shop</span>
        </Link>
      </div>
      <nav className="navigation">
        <ul className="nav-links">
          <li>
            <Link
              onClick={() => handleCategoryChange("men")}
              to="/mens-clothing"
              className="nav-link"
            >
              Men
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleCategoryChange("women")}
              to="/womens-clothing"
              className="nav-link"
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleCategoryChange("electronics")}
              to="/electronics"
              className="nav-link"
            >
              Electronics
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleCategoryChange("jewlery")}
              to="/jewelery"
              className="nav-link"
            >
              Jewelery
            </Link>
          </li>
        </ul>
      </nav>
      <div className="cart-account-div">
        <div className="cart">
          <img src={CartIcon} alt="Cart-icon" className="cart-icon" />
          <span className="cart-counter">10</span>
        </div>
        <div className="account">
          <a href="#">Account</a>
        </div>
      </div>
      <div className="cart-drop-down">
        <p className="header">Cart</p>
      </div>
    </header>
  );
}

export default Header;
