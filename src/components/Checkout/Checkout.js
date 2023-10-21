import "./Checkout.css";
import DeleteIcon from "../../Assets/remove-item-icon.svg";
import "../Header-Cart/Cart.css";

function Checkout({ cartItems, removeFromCart }) {
  //   console.log(cartItems);
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div className="checkout-page">
      <span className="checkout-header">
        Checkout (
        <span className="checkout-amount">{cartItems.length} Items</span>)
      </span>
      <span className="chk-out-list-header">Cart Items</span>
      <ul className="chk-out cart-items-list">
        {cartItems.map(({ id, image, title, price, quantity }) => (
          <li className="chk-out cart-item" key={id}>
            <div className="chk-out cart-item-image">
              <img src={image} alt="product" />
            </div>
            <div className="chk-out cart-item-details">
              <span className="chk-out item-name">{title}</span>
              <div className="chk-out item-pricing-detail">
                <span className="chk-out item-price unit">
                  Unit Price: ${price}
                </span>
                <span className="chk-out item-amount">
                  Quantity: {quantity}
                </span>
                <div className="chk-out item-price-total">
                  Item Total:
                  <span className="chk-out item-price"> ${price}</span>
                  <span className="chk-out multiply-sign">&times;</span>
                  <span className="chk-out item-amount">{quantity}</span>
                  <span className="equal-sign">=</span>$
                  {(quantity * price).toFixed(2)}
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
        <div className="total-order-summary">
          <div className="order">Order Summary</div>
          <div>
            <p>Items ({cartItems.length}):</p>
            <p>${calculateTotal().toFixed(2)}</p>
          </div>
          <div>
            <p>Shipping & handling:</p>
            <p>$0.00</p>
          </div>
          <div>
            <p>Total before tax: </p>
            <p>${calculateTotal().toFixed(2)}</p>
          </div>
          <div className="estimated-tax">
            <p>Estimated tax to be collected: </p>
            <p>${(calculateTotal() * 0.15).toFixed(2)}</p>
          </div>
          <div className="order-total">
            <p>Order total:</p>
            <p>${(calculateTotal() * 0.15 + calculateTotal()).toFixed(2)}</p>
          </div>
        </div>
      </ul>
    </div>
  );
}
// STYLE THE ORDER SUMMARY, create functions for tax , before tax...
export default Checkout;
