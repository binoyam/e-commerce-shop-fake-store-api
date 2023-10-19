import React from "react";
import { Link, useParams } from "react-router-dom";
import CartIcon from "../../Assets/icon-cart-btn.svg";
import "./ProductDescription.css";
import PlusIcon from "../../Assets/icon-plus.svg";
import MinusIcon from "../../Assets/icon-minus.svg";
import Arrow from "../../Assets/arrow-left.svg";
function ProductDescription({ products, addToCart }) {
  //   console.log(products);
  const { id } = useParams();
  const selectedProduct = products.find(
    (product) => product.id.toString() === id
  );
  //   console.log(selectedProduct);
  if (!products) {
    return <div className="loading">Please Wait a moment...</div>;
  }
  return (
    <div className="product-description-page">
      <Link className="back-btn" to="/">
        <img src={Arrow} alt="arrow-left" />
        Back
      </Link>

      <div className="product-info">
        <div className="product-image-div">
          <img src={selectedProduct.image} alt="product" />
        </div>
        <div className="product-details">
          <h1>{selectedProduct.title}</h1>
          <p>$ {selectedProduct.price}</p>
          <p>{selectedProduct.description}</p>

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
            onClick={() => addToCart(selectedProduct)}
            className="add-to-cart-btn"
          >
            <img src={CartIcon} alt="Cart" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
// style the page
export default ProductDescription;
