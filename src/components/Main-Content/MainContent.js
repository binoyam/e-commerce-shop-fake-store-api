import "./MainContent.css";
import ProductList from "../Product-List/ProductList";
import { Route, Routes } from "react-router-dom";

function MainContent({ products, addToCart }) {


// NEXT PAGE WHEN A PRODUCT IS CLICKED ON WITH MORE DESCRIPTION ABOUT THAT PRODUCT
  return (
    <main className="main-content">
      <Routes>
        <Route
          path="/"
          element={<ProductList addToCart={addToCart} products={products} />}
        />
        <Route
          path="/category/:category"
          element={<ProductList addToCart={addToCart} products={products} />}
        />
        <Route
          path="/product/:id"
          element={<ProductList addToCart={addToCart} products={products} />}
        />
      </Routes>
    </main>
  );
}

export default MainContent;
