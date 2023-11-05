import "./Header.css";
import CartIcon from "../../Assets/Images/icon-cart.svg";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "../Header-Nav/Nav";
import Cart from "../Header-Cart/Cart";
import UserAccount from "../UserAccount/UserAccount";
import SearchProducts from "../SearchProducts/SearchProducts";

function Header({
  cartItems,
  removeFromCart,
  products,
  searchTerm,
  handleSearch,
}) {
  /* CART/MENU_ OPEN/CLOSED STATE */
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleCartDropDown() {
    setIsCartOpen(!isCartOpen);
  }
  const location = useLocation();

  const isHomePage = location.pathname === "/home";
  const isSearchResultPage = location.pathname === "/search-result";
  // const isProductsListingPage = location.pathname.startsWith("categories/");
  const isSearchBarRoute =
    isHomePage || isSearchResultPage;
  return (
    <header className="header">
      <Link to="/home" className="logo-link">
        <span className="logo-text">bt-shop</span>
      </Link>

      {isSearchBarRoute && (
        <SearchProducts searchTerm={searchTerm} handleSearch={handleSearch} />
      )}

      <Nav
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        products={products}
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
