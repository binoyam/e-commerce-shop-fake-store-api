import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CartIcon from "../../Assets/Images/icon-cart-btn.svg";
import PlusIcon from "../../Assets/Images/icon-plus.svg";
import MinusIcon from "../../Assets/Images/icon-minus.svg";
import Arrow from "../../Assets/Images/arrow-left.svg";
import "./ProductDescription.css";

function ProductDescription({ products, addToCart }) {
  const { id } = useParams();
  // /* SELECTED PRODUCT STATE */
  const [selectedProduct, setSelectedProduct] = useState([]);
  // console.log(selectedProduct);
  /* SELECTED QUANTITY STATE */
  const [quantity, setQuantity] = useState(1);
  const productId = parseInt(id);
  // console.log(products);
  // console.log(typeof(productId));
  const foundProduct = products.find((product) => product.id === productId);
  // console.log(foundProduct);
  useEffect(() => {
    if (foundProduct) {
      setSelectedProduct(foundProduct);
    }
  }, [foundProduct]);
  console.log(selectedProduct.price);

  /* helper Function to set quantity back to 1 and add to cart */
  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity);
    setQuantity(1);
  };
  /* FUNCTION FOR PLUS BUTTON*/
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  /* FUNCTION FOR MINUS BUTTON*/
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-description-page">
      <Link to="/categories/all" className="back-btn">
        <img src={Arrow} alt="arrow-left" />
        Back
      </Link>

      <div className="product-info">
        <div className="product-image-div">
          <img src={selectedProduct.image} alt="product" />
        </div>

        <div className="product-details">
          <h1 className="prd-name">{selectedProduct.title}</h1>
          <p className="prd-price">$ {selectedProduct.price}</p>
          <p className="prd-description">{selectedProduct.description}</p>
          <div className="product-amount-cart">
            <div className="quantity-selector">
              <button className="minus-btn" onClick={decreaseQuantity}>
                <img src={MinusIcon} alt="minus" />
              </button>
              <span className="quantity">{quantity}</span>
              <button className="plus-btn" onClick={increaseQuantity}>
                <img src={PlusIcon} alt="Plus" />
              </button>
            </div>
            <button onClick={handleAddToCart} className="prd-add-to-cart">
              Add to Cart
              <img src={CartIcon} alt="Cart" />
            </button>
            <Link to="/checkout" className="prd-desc-checkout-btn">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDescription;