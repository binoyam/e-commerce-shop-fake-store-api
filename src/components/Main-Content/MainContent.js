import Checkout from "../../Pages/Checkout/Checkout";
import HomePage from "../../Pages/HomePage/HomePage";
import PaymentPage from "../../Pages/PaymentPage/PaymentPage";
import ProductDescription from "../../Pages/Product-Description/ProductDescription";
import ProductList from "../../Pages/Product-List/ProductList";
import SearchResult from "../../Pages/SearchResult/SearchResult";
import "./MainContent.css";
import { Navigate, Route, Routes } from "react-router-dom";

function MainContent({
  products,
  addToCart,
  cartItems,
  removeFromCart,
  searchResults,
  searchTerm,
  handleSearch,
  setSelectedProductId,
  selectedProductId,
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
          element={
            <ProductList
              handleSearch={handleSearch}
              searchResults={searchResults}
              searchTerm={searchTerm}
              addToCart={addToCart}
              products={products}
              setSelectedProductId={setSelectedProductId}
            />
          }
        />

        {/* SELECTED CATEGORY PAGE */}
        <Route
          path="products/categories/:category"
          element={
            <ProductList
              setSelectedProductId={setSelectedProductId}
              addToCart={addToCart}
              products={products}
            />
          }
        />

        {/* PRODUCT DESCRIPTION PAGE*/}
        <Route
          exact
          path="/product/:id"
          element={
            <ProductDescription
              products={products}
              selectedProductId={selectedProductId}
              addToCart={addToCart}
            />
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
