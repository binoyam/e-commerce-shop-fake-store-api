import React from "react";
import "./Header.css";
import Logo from "../../Assets/logo.svg";
import { Link } from "react-router-dom";

function Header() {
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
            <Link to="/products" className="nav-link">Products</Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">Cart</Link>
          </li>
          <li>
            <Link to="/account" className="nav-link">Account</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
