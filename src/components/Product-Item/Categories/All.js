import React from "react";
import ProductList from "../../../Pages/ProductsPage/ProductList/ProductList";

function All({ products, addToCart }) {
  return <ProductList products={products} addToCart={addToCart} />;
}

export default All;
