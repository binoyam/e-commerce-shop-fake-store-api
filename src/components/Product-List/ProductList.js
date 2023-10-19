import React, { useState } from "react";
import "./ProductList.css";
import ProductItem from "../Product-Item/ProductItem";

function ProductList({ products, addToCart }) {
  /* ADD TO CART HANDLER */
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </>
  );
}

export default ProductList;
