import "./MainContent.css";
import ProductList from "../Product-List/ProductList";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductDescription from "../Product-Description/ProductDescription";
import Checkout from "../Checkout/Checkout";
import PaymentPage from "../Payment/PaymentPage";
import HomePage from "../HomePage/HomePage";
import SearchResult from "../Pages/SearchResult";

function MainContent({
  products,
  addToCart,
  cartItems,
  removeFromCart,
  searchResults,
  searchTerm,
}) {
  return (
    <main className="main-content">
      <Routes>

        {/* Navigate to home */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* HOME PAGE */}
        <Route path="/home" element={<HomePage products={products} />} />

        {/* SEARCH RESULT PAGE */}
        <Route
          path="/search-result"
          element={
            <SearchResult
              searchResults={searchResults}
              searchTerm={searchTerm}
              addToCart={addToCart}
            />
          }
        />

        {/* ALL PRODUCTS LIST PAGE */}
        <Route
          path="/products"
          element={<ProductList addToCart={addToCart} products={products} />}
        />

        {/* SELECTED CATEGORY PAGE */}
        <Route
          path="/category/:category"
          element={<ProductList addToCart={addToCart} products={products} />}
        />

        {/* PRODUCT DESCRIPTION PAGE*/}
        <Route
          path="/product/:id"
          element={
            <ProductDescription products={products} addToCart={addToCart} />
          }
        />

        {/* CHECKOUT PAGE */}
        <Route
          path="/checkout"
          element={
            <Checkout cartItems={cartItems} removeFromCart={removeFromCart} />
          }
        />

        {/* PAYMENT PAGE */}
        <Route
          path="/payment"
          element={<PaymentPage cartItems={cartItems} />}
        />

      </Routes>
    </main>
  );
}

export default MainContent;
