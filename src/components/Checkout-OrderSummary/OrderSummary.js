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
        <p>${(calculateTotal() * TAX_RATE).toFixed(2)}</p>
      </div>
      <div className="order-total">
        <p>Order total:</p>
        <p>${(calculateTotal() * TAX_RATE + calculateTotal()).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default OrderSummary;
