import { useState } from "react";
import "./PaymentPage.css";
import VisaLogo from "../../Assets/Images/visa-logo.svg";
import MasterCardLogo from "../../Assets/Images/mastercard-logo.svg";
import PaypalLogo from "../../Assets/Images/paypal-logo.svg";
import BitcoinLogo from "../../Assets/Images/bitcoin-logo.svg";

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
        <div className="payment-methods">
          <div>
            <input type="radio" id="method" />
            <div className="img-wrapper">
              <img className="master" src={MasterCardLogo} alt="mastercard" />
            </div>
          </div>
          <div>
            <input type="radio" id="method" />
            <div className="img-wrapper">
              <img className="visa" src={VisaLogo} alt="visa" />
            </div>
          </div>
          <div>
            <input type="radio" id="method" />
            <div className="img-wrapper">
              <img className="paypal" src={PaypalLogo} alt="paypal" />
            </div>
          </div>
          <div>
            <input type="radio" id="method" />
            <div className="img-wrapper">
              <img className="bitcoin" src={BitcoinLogo} alt="bitcoin" />
            </div>
          </div>
        </div>
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
