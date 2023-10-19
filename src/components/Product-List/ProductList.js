import React, { useState } from "react";
import "./ProductList.css";
import CartIcon from "../../Assets/icon-cart-btn.svg";
import ProductDescription from "../Product-Description/ProductDescription";
import { Link } from "react-router-dom";

function ProductList({ products, addToCart }) {
  /* READ MORE / READ LESS FUNCTION*/
  // const [selectedProduct, setSelectedProduct] = useState(null);
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
  // const handleProductClick = (product) => {
  //   setSelectedProduct(product);
  // };
  return (
    <>
      {products.map((product) => (
        <Link  className="product-box" key={product.id} to={`/product/${product.id}`}>
          <article>
            <h3 className="product-title">{product.title.slice(0, 20)}</h3>
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
            <span className="product-price">${product.price}</span>
            <button
              onClick={() => handleAddToCart(product)}
              className="add-to-cart-btn"
            >
              <img src={CartIcon} alt="Cart" /> Add to Cart
            </button>

            {expandedText === product.id ? (
              <p className="product-description">{product.description}</p>
            ) : (
              <p className="product-description">
                {product.description.length > 100
                  ? product.description.slice(0, 60) + "..."
                  : product.description}
              </p>
            )}
            <button
              className="expand-button"
              onClick={() => toggleExpand(product.id)}
            >
              {expandedText === product.id ? "Read Less" : "Read More"}
            </button>
          </article>
        </Link>
      ))}
    </>
  );
}

export default ProductList;
