import { useState } from "react";
import "./PaymentPage.css";
// import PpIcon from "../../Assets/paypal-icon.svg";
// add icons and styling
function PaymentPage({ cartItems }) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const TAX_RATE = 0.15;
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setCardNumber("");
    setExpiryDate("");
    setCvv("");
  };
  return (
    <div className="payment-page">
      <div className="total-payment">
        <p className="ttl">Total</p>
        <p>${(calculateTotal() * TAX_RATE + calculateTotal()).toFixed(2)}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="card-number" className="label">
            Card Number:
          </label>
          <input
            id="card-number"
            className="input"
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exp-date" className="label">
            Expiry Date:
          </label>
          <input
            id="exp-date"
            className="input"
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvc" className="label">
            CVV:
          </label>
          <input
            id="cvc"
            className="input"
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
        <button className="pay-btn" type="submit">
          Pay Now
        </button>
      </form>
    </div>
  );
}

export default PaymentPage;
