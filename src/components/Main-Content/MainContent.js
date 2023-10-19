import "./MainContent.css";
import ProductList from "../Product-List/ProductList";
import { Route, Routes } from "react-router-dom";
import ProductDescription from "../Product-Description/ProductDescription";

function MainContent({ products, addToCart }) {
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
          element={
            <ProductDescription products={products} addToCart={addToCart} />
          }
        />
      </Routes>
    </main>
  );
}

export default MainContent;
