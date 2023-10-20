import "./Checkout.css";
import DeleteIcon from "../../Assets/icon-close.svg";
import "../Header-Cart/Cart.css";

function Checkout({ cartItems, removeFromCart }) {
  console.log(cartItems);
  return (
    <div className="checkout-page">
      <span className="checkout-header">
        Checkout ({cartItems.length} Items)
      </span>
      <ul className="chk-out cart-items-list">
        <span className="chk-out-list-header">Cart Items</span>
        {cartItems.map(({ id, image, title, price, quantity }) => (
          <li className="chk-out cart-item" key={id}>
            <div className="chk-out cart-item-image">
              <img src={image} alt="product" />
            </div>
            <div className="chk-out cart-item-details">
              <span className="chk-out item-name">{title}</span>
              <div className="chk-out item-pricing-detail">
                <span className="chk-out item-price">Unit Price: ${price}</span>

                <span className="chk-out item-amount">
                  Quantity:{" "}{quantity}
                </span>
                <div className="chk-out item-price-total">
                  Item Total:
                  <span className="chk-out item-price">${price}</span>
                  <span className="chk-out multiply-sign">&times;</span>
                  <span className="chk-out item-amount">
                    {quantity}
                  </span> 
                  <span className="equal-sign">=</span>
                  ${(quantity * price).toFixed(2)}
                </div>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(id)}
              className="chk-out item-remove-btn"
            >
              <img src={DeleteIcon} alt="remove" />
            </button>
          </li>
        ))}
      </ul>
      <div className="total-price-div">
        <span>Total: {}</span>
      </div>
    </div>
  );
}

export default Checkout;