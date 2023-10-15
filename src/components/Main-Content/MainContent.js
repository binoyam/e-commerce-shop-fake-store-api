import "./MainContent.css";
import ProductList from "../Product-List/ProductList";
import { Route, Routes } from "react-router-dom";

function MainContent({ products}) {
  return (
    <main className="main-content">
      <Routes>
        <Route exact path="/" element={<ProductList products={products} />} />
        <Route
          path="/category/:category"
          element={
            <ProductList products={products} />
          }
        />
        <Route
          path="/category/:category"
          element={
            <ProductList products={products} />
          }
        />
        <Route
          path="/category/:category"
          element={
            <ProductList products={products} />
          }
        />
        <Route
          path="/category/:category"
          element={
            <ProductList products={products} />
          }
        />
      </Routes>
    </main>
  );
}

export default MainContent;
