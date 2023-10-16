import "./MainContent.css";
import ProductList from "../Product-List/ProductList";
import { Route, Routes } from "react-router-dom";

function MainContent({ products, setSelectedProducts }) {
  return (
    <main className="main-content">
      <Routes>
        <Route exact path="/" element={<ProductList setSelectedProducts={setSelectedProducts} products={products} />} />
        <Route
          path="/category/:category"
          element={<ProductList setSelectedProducts={setSelectedProducts} products={products} />}
        />
        <Route
          path="/category/:category"
          element={<ProductList setSelectedProducts={setSelectedProducts} products={products} />}
        />
        <Route
          path="/category/:category"
          element={<ProductList setSelectedProducts={setSelectedProducts} products={products} />}
        />
        <Route
          path="/category/:category"
          element={<ProductList setSelectedProducts={setSelectedProducts} products={products} />}
        />
      </Routes>
    </main>
  );
}

export default MainContent;
