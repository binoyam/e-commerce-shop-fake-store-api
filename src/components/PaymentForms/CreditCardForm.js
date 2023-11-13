import React, { useState } from "react";

function CreditCardForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    setCardNumber("");
    setExpiryDate("");
    setCvv("");
  };
  return (
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
  );
}

export default CreditCardForm;
