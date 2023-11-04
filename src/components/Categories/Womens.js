import React from "react";
import ProductList from "../../../Pages/ProductsPage/ProductList/ProductList";

function Womens({ products, addToCart }) {
  const filteredProducts = products.filter(
    (product) => product.category === "women's clothing"
  );
  return <ProductList products={filteredProducts} addToCart={addToCart} />;
}

export default Womens;
