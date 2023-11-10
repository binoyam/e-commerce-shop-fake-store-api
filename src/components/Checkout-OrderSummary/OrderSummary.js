import { Link } from "react-router-dom";
import "./OrderSummary.css";

function OrderSummary({ cartItems, calculateTotal, taxRate }) {


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
        <p className="tax">${(calculateTotal() * taxRate).toFixed(2)}</p>
      </div>
      <div className="order-total">
        <p>Order total:</p>
        <p>${(calculateTotal() * taxRate + calculateTotal()).toFixed(2)}</p>
      </div>

      {cartItems.length > 0 && (
        <Link className="payment" to="/payment">
          Proceed to payment
        </Link>
      )}
      <Link to="/categories/all" className="back-to-shop-btn">
        Back to Shop
      </Link>
    </div>
  );
}

export default OrderSummary;
