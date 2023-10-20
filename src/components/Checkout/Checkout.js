import "./Checkout.css";
import DeleteIcon from "../../Assets/icon-close.svg";
// import '../Header-Cart/Cart.css'


function Checkout({ cartItems, removeFromCart }) {
  return (
    <div className="checkout-page">
      <ul className="cart-items-list">
            {cartItems.map(({ id, image, title, price, quantity }) => (
              <li className="cart-item" key={id}>
                <div className="cart-item-image">
                  <img src={image} alt="product" />
                </div>
                <div className="cart-item-details">
                  <span className="item-name">{title}</span>
                  <div className="item-pricing-detail">
                    <span className="item-price">${price}</span>
                    <span className="multiply-sign">&times;</span>
                    <span className="item-amount">{quantity}</span>
                    <span className="item-price-total">
                      ${(quantity * price).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(id)}
                  className="item-remove-btn"
                >
                  <img src={DeleteIcon} alt="remove" />
                </button>
              </li>
            ))}
          </ul>
          
    </div>
  );
}

export default Checkout;
