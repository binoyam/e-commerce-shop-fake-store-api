import "./ProductDescription.css";
import { Link, useParams } from "react-router-dom";
import CartIcon from "../../Assets/Images/icon-cart-btn.svg";
import PlusIcon from "../../Assets/Images/icon-plus.svg";
import MinusIcon from "../../Assets/Images/icon-minus.svg";
import Arrow from "../../Assets/Images/arrow-left.svg";
import { useEffect, useState } from "react";

function ProductDescription({ products, addToCart }) {
  const { id } = useParams();
  /* SELECTED PRODUCT STATE */
  const [selectedProduct, setSelectedProduct] = useState(null);
  console.log(selectedProduct);
  /* SELECTED QUANTITY STATE */
  const [quantity, setQuantity] = useState(1);
  const getProduct = () => {
    const productId = parseInt(id);
    const product = products.find((product) => product.id === productId);
    return product;
  };
  useEffect(() => {
    const product = getProduct();
    setSelectedProduct(product);
  }, [id]);
  const { image, title, price, description } = selectedProduct;
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
      <Link to="/" className="back-btn">
        <img src={Arrow} alt="arrow-left" />
        Back
      </Link>

      <div className="product-info">
        <div className="product-image-div">
          {/* <img src={image} alt="product" /> */}
        </div>

        <div className="product-details">
          <h1 className="prd-name">{title}</h1>
          <p className="prd-price">$ {price}</p>
          <p className="prd-description">{description}</p>
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
