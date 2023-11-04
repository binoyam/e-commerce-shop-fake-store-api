import React from "react";
import ProductList from "../ProductList/ProductList";

function Jewelery({ products, addToCart }) {
  const filteredProducts = products.filter(
    (product) => product.category === "jewelery"
  );
  return <ProductList products={filteredProducts} addToCart={addToCart} />;
}

export default Jewelery;
