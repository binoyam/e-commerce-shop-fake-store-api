import React from "react";
import ProductList from "../../../Pages/ProductsPage/ProductList/ProductList";

function Electronics({ products, addToCart }) {
  const filteredProducts = products.filter(
    (product) => product.category === "electronics"
  );
  return <ProductList products={filteredProducts} addToCart={addToCart} />;
}

export default Electronics;
