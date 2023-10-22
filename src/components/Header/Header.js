import "./Header.css";
import CartIcon from "../../Assets/icon-cart.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Header-Nav/Nav";
import Cart from "../Header-Cart/Cart";

function Header({ setSelectedCategory, cartItems, removeFromCart }) {
  /* CART STATE/ OPEN OR CLOSE CART */
  const [isCartOpen, setIsCartOpen] = useState(false);
  function toggleCartDropDown() {
    setIsCartOpen(!isCartOpen);
  }
  return (
    <header className="header">
      <Link to="/" className="logo-link" onClick={() => setSelectedCategory("")}>
        <div className="logo-div">
          <span className="logo-text">bt-shop</span>
        </div>
      </Link>

      <Nav setSelectedCategory={setSelectedCategory} />

      <div className="nav-right">
        <div onClick={toggleCartDropDown} className="cart-nav">
          <img src={CartIcon} alt="Cart-icon" className="cart-icon" />
          {cartItems.length > 0 ? (
            <span className="cart-counter">{cartItems.length}</span>
          ) : null}
        </div>

        <div className="account">
          <span>Account</span>
          <img src="" alt="" />
          <div className="account-info">
            <span className="username"></span>
            {/* <button className="logout">Your are not signed in</button> */}
          </div>
        </div>
      </div>

      <Cart
        removeFromCart={removeFromCart}
        cartItems={cartItems}
        isCartOpen={isCartOpen}
        closeCart={toggleCartDropDown}
      />
    </header>
  );
}

export default Header;
