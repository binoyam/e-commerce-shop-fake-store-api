import { Link } from "react-router-dom";
import "./OrderSummary.css";

function OrderSummary({ cartItems }) {
  const TAX_RATE = 0.15;
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div className="order-summary-wrapper">
      <div className="order-summary-header">Order Summary</div>
      <div className="order-items">
        <p className="left">Items ({cartItems.length}):</p>
        <p>${calculateTotal().toFixed(2)}</p>
      </div>
      <div className="shipping">
        <p className="left">Shipping & handling:</p>
        <p>$0.00</p>
      </div>
      <div className="before-tax">
        <p className="left">Total before tax: </p>
        <p>${calculateTotal().toFixed(2)}</p>
      </div>
      <div className="estimated-tax">
        <p className="left">Estimated tax to be collected: </p>
        <p className="tax">${(calculateTotal() * TAX_RATE).toFixed(2)}</p>
      </div>
      <div className="order-total">
        <p>Order total:</p>
        <p>${(calculateTotal() * TAX_RATE + calculateTotal()).toFixed(2)}</p>
      </div>

      <Link className="payment" to="/payment">
        Proceed to payment
      </Link>
    </div>
  );
}

export default OrderSummary;
