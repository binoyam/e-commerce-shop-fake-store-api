import "./MainContent.css";
import ProductList from "../Product-List/ProductList";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductDescription from "../Product-Description/ProductDescription";
import Checkout from "../Checkout/Checkout";
import PaymentPage from "../Payment/PaymentPage";
import HomePage from "../HomePage/HomePage";

function MainContent({ products, addToCart, cartItems, removeFromCart }) {
  return (
    <main className="main-content">
      <Routes>
       
        <Route path="/home" element={<HomePage products={products} />} />

        <Route path="/" element={<Navigate to="/home" />} />

        <Route
          path="/products"
          element={<ProductList addToCart={addToCart} products={products} />}
        />
        <Route
          path="/category/:category"
          element={<ProductList addToCart={addToCart} products={products} />}
        />

        <Route
          path="/product/:id"
          element={
            <ProductDescription products={products} addToCart={addToCart} />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout cartItems={cartItems} removeFromCart={removeFromCart} />
          }
        />
        <Route
          path="/payment"
          element={<PaymentPage cartItems={cartItems} />}
        />
      </Routes>
    </main>
  );
}

export default MainContent;
