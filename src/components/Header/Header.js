import "./Header.css";
import Logo from "../../Assets/logo.svg";
import CartIcon from "../../Assets/icon-cart.svg";
import { useState } from "react";
import Cart from "../Header - Cart/Cart";
import { Link } from "react-router-dom";
import Nav from "../Header-Nav/Nav";

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
          <img src={Logo} alt="Logo" className="logo-image" />
          <span className="logo-text">bt-Shop</span>
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
            <button className="logout"></button>
          </div>
        </div>
      </div>

      <Cart
        removeFromCart={removeFromCart}
        cartItems={cartItems}
        isCartOpen={isCartOpen}
      />
    </header>
  );
}
// improve the cart and account layout
// Account drop down like google, then you havent signed up minamin,
//  then sign up or sign in, welcome back when signgin in
export default Header;
