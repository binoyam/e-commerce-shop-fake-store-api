import React from "react";
import "./Header.css";
import Logo from "../../Assets/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="logo-div">
        <img src={Logo} alt="Logo" className="logo-image" />
        <span className="logo-text">
           e-Shop
        </span>
      </div>
      <nav>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
