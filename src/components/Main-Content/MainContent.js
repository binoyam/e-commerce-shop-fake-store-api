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

        {/* home page */}
        <Route path="/home" element={<HomePage products={products} />} />

        {/* search results page */}
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

        {/* all products list page */}
        <Route
          path="/products"
          element={<ProductList addToCart={addToCart} products={products} />}
        />

        {/* selected category page */}
        <Route
          path="/category/:category"
          element={<ProductList addToCart={addToCart} products={products} />}
        />

        {/* selected product page, product description page */}
        <Route
          path="/product/:id"
          element={
            <ProductDescription products={products} addToCart={addToCart} />
          }
        />

        {/* checkout page */}
        <Route
          path="/checkout"
          element={
            <Checkout cartItems={cartItems} removeFromCart={removeFromCart} />
          }
        />

        {/* payment page */}
        <Route
          path="/payment"
          element={<PaymentPage cartItems={cartItems} />}
        />

      </Routes>
    </main>
  );
}

export default MainContent;
