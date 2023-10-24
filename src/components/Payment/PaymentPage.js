import "./PaymentPage.css";
import PpIcon from "../../Assets/paypal-icon.svg";
function PaymentPage({ cartItems }) {
  const TAX_RATE = 0.15;
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  return (
    <div className="payment-page">
      <div className="div">
        <p>Total</p>
        <p>{calculateTotal()}</p>
      </div>
      <form action=""></form>

      <img src={PpIcon} alt="paypal" />
    </div>
  );
}

export default PaymentPage;
