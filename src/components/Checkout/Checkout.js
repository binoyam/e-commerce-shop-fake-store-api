import "./Checkout.css";

function Checkout({ cartItems, removerFromCart }) {
  return (
    <div className="checkout-page">
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <h1>{item.title}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Checkout;
