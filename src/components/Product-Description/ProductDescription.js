import React from "react";
import { Link } from "react-router-dom";

function ProductDescription({ product }) {
  console.log(product);
  const { id, title, price, description, category, rating } = product;
  return (
    <div className="product-description">
      <Link to="/" className="">
        <button className="back-btn">Back</button>
      </Link>
      <div className="product-info">
        <h1>{title}</h1>
        <p>{category}</p>
        <p>{description}</p>
        <p>{price}</p>
        <p>{rating.count}</p>
      </div>
    </div>
  );
}

export default ProductDescription;
