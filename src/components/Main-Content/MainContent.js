import "./MainContent.css";
import ProductList from "../Product-List/ProductList";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

function MainContent({ products, selectedCategory, fetchProducts }) {
  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory, fetchProducts]);

  return (
    <main className="main-content">
      <Routes>
        <Route
          exact
          path="/"
          element={<ProductList products={products} />}
        />
        <Route
          path="/mens-clothing"
          element={<ProductList products={products} />}
        />
        <Route
          path="/womens-clothing"
          element={<ProductList products={products} />}
        />
        <Route
          path="/electronics"
          element={<ProductList products={products} />}
        />
        <Route path="/jewelery" element={<ProductList products={products} />} />
      </Routes>
    </main>
  );
}

export default MainContent;
