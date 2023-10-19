import React, { useState } from "react";
import "./ProductList.css";
import ProductItem from "../Product-Item/ProductItem";

function ProductList({ products, addToCart }) {
  /* READ MORE / READ LESS FUNCTION*/
  const [expandedText, setExpandedText] = useState(null);
  const toggleExpand = (productId) => {
    if (expandedText === productId) {
      setExpandedText(null);
    } else {
      setExpandedText(productId);
    }
  };
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
          expandedText={expandedText}
          handleAddToCart={handleAddToCart}
          toggleExpand={toggleExpand}
        />
      ))}
    </>
  );
}

export default ProductList;
