import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../../Assets/icon-cart-btn.svg";
import './ProductDescription.css'
import PlusIcon from '../../Assets/icon-plus.svg'
import MinusIcon from '../../Assets/icon-minus.svg'

function ProductDescription({ product, addToCart }) {
  console.log(product);
  const { title, price, description, rating, image } = product;
  return (
    <div className="product-description-page">
      <Link to="/" className="">
        <button className="back-btn">Back</button>
      </Link>
      <div className="product-info">
        <div className="product-image-div">
          <img src={image} alt="product" />
        </div>
        <div className="product-details">
          <h1>{title}</h1>
          <p>$ {price}</p>
          <p>{description}</p>
         
          <div className="quantity-selector">
                <button className="minus-btn">
                    <img src={MinusIcon} alt="minus" />
                </button>
                <span className="quantity">5</span>
                <button className="plus-btn">
                    <img src={PlusIcon} alt="Plus" />
                </button>
            </div>
          <button
            className="add-to-cart-btn"
          >
            <img src={CartIcon} alt="Cart" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
