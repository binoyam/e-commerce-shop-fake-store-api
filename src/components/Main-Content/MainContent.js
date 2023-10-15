import "./MainContent.css";
import ProductList from "../Product-List/ProductList";
import { Route, Routes, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function MainContent() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetchProducts(category);
  }, [category]);

  function fetchProducts(category) {
    let url = "https://fakestoreapi.com/products";

    if (category) {
      url += `/category/${category}`;
    }

    axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("Error fetching products:", error);
      });
  }
  return (
    <main className="main-content">
      <Routes>
        <Route exact path="/" element={<ProductList products={products} />} />
        <Route
          path="/category/:category"
          element={<ProductList products={products} />}
        />
        <Route
          path="/category/:category"
          element={<ProductList products={products} />}
        />
        <Route
          path="/category/:category"
          element={<ProductList products={products} />}
        />
        <Route
          path="/category/:category"
          element={<ProductList products={products} />}
        />
      </Routes>
    </main>
  );
}

export default MainContent;
