import "./Header.css";
import CartIcon from "../../Assets/Images/icon-cart.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Header-Nav/Nav";
import Cart from "../Header-Cart/Cart";
import UserAccount from "../UserAccount/UserAccount";

function Header({
  setSelectedCategory,
  cartItems,
  removeFromCart,
  products,
  searchTerm,
  handleSearch,
}) {
  /* CART STATE/ OPEN OR CLOSED CART */
  const [isCartOpen, setIsCartOpen] = useState(false);
  function toggleCartDropDown() {
    setIsCartOpen(!isCartOpen);
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // a search bar instead of nav links in the home page
  // and a link to all products in home page
  // a 'discount sale' section
  // and make the all products list randomized randomized order
  return (
    <header className="header">
      <Link
        to="/home"
        className="logo-link"
        onClick={() => setSelectedCategory("")}
      >
        <div className="logo-div">
          <span className="logo-text">bt-shop</span>
        </div>
      </Link>

      <Nav
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        products={products}
        setSelectedCategory={setSelectedCategory}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <div className="nav-right">
        <div onClick={toggleCartDropDown} className="cart-nav">
          <img src={CartIcon} alt="Cart-icon" className="cart-icon" />
          {cartItems.length > 0 ? (
            <span className="cart-counter">{cartItems.length}</span>
          ) : null}
        </div>

        <UserAccount />
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
