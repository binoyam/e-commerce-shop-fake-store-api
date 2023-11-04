import React from "react";
import ProductList from "../ProductList/ProductList";

function All({ products, addToCart }) {
  const filteredProducts = products.filter((product) => product.id < 21);
  return <ProductList products={filteredProducts} addToCart={addToCart} />;
}

export default All;
