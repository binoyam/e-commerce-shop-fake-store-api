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
  const [selectedPayMethod, setSelectedPayMethod] = useState("creditcard");

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
  const handlePayMethodChange = (tab) => {
    setSelectedPayMethod(tab);
  };
  return (
    <div className="payment-page">
      <div className="total-payment">
        <p className="ttl">Total</p>
        <p>${(calculateTotal() * TAX_RATE + calculateTotal()).toFixed(2)}</p>
      </div>
      <div className="payment-methods">
        <button
          onClick={() => handlePayMethodChange("creditcard")}
          className={selectedPayMethod === "creditcard" ? "active" : ""}
        >
          <div className="img-wrapper">
            <img className="master" src={MasterCardLogo} alt="mastercard" />
          </div>
          Credit Card
        </button>
        <button
          onClick={() => handlePayMethodChange("paypal")}
          className={selectedPayMethod === "paypal" ? "active" : ""}
        >
          <div className="img-wrapper">
            <img className="paypal" src={PaypalLogo} alt="paypal" />
          </div>
          PayPal
        </button>
        <button
          onClick={() => handlePayMethodChange("bitcoin")}
          className={selectedPayMethod === "bitcoin" ? "active" : ""}
        >
          <div className="img-wrapper">
            <img className="bitcoin" src={BitcoinLogo} alt="bitcoin" />
          </div>
          Bitcoin
        </button>
      </div>
    </div>
  );
}

export default PaymentPage;
