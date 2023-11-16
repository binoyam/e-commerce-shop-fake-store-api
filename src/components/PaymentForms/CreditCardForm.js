import { useState } from "react";
import "./CreditCardForm.css";

function CreditCardForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [formFilled, setFormFilled] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();

    setCardNumber("");
    setExpiryDate("");
    setCvv("");
    setFormFilled(true)
  };
  return (
    <form className="credit-card-form" onSubmit={handleSubmit}>
      <div className="form-block">
        <label htmlFor="card-number" className="label">
          Card Number
        </label>
        <input
          id="card-number"
          className="input"
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>
      <div className="exp-cvc-wrapper">
        <div>
          <label htmlFor="exp-date" className="label">
            Expiry Date
          </label>
          <input
            id="exp-date"
            className="input"
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cvc" className="label">
            CVC
          </label>
          <input
            id="cvc"
            className="input"
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
      </div>
      <button className="pay-btn" type="submit">
        Pay Now
      </button>
      {formFilled && <AfterPayment />}
    </form>
  );
}

export default CreditCardForm;
