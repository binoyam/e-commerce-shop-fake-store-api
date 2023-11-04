import React from "react";
import ProductList from "../../../Pages/ProductsPage/ProductList/ProductList";

function Mens({ products, addToCart }) {
  const filteredProducts = products.filter(
    (product) => product.category === "men's clothing"
  );
  return (
    <>
      <ProductList products={filteredProducts} addToCart={addToCart} />
    </>
  );
}

export default Mens;
