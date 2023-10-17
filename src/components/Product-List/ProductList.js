import React, { useState } from "react";
import "./ProductList.css";
import CartIcon from "../../Assets/icon-cart-btn.svg";

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
        <article className="product-box" key={product.id}>
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
      ))}
    </>
  );
}

export default ProductList;
