import "./MainContent.css";
import ProductList from "../Product-List/ProductList";
import { Route, Routes } from "react-router-dom";

function MainContent({ products, addToCart }) {



  return (
    <main className="main-content">
      <Routes>
        <Route
          exact
          path="/"
          element={<ProductList addToCart={addToCart} products={products} />}
        />
        <Route
          path="/category/:category"
          element={<ProductList addToCart={addToCart} products={products} />}
        />
        <Route
          path="/category/:category"
          element={<ProductList addToCart={addToCart} products={products} />}
        />
        <Route
          path="/category/:category"
          element={<ProductList addToCart={addToCart} products={products} />}
        />
        <Route
          path="/category/:category"
          element={<ProductList addToCart={addToCart} products={products} />}
        />
      </Routes>
    </main>
  );
}

export default MainContent;
