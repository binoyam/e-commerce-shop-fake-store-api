import "./Checkout.css";
import DeleteIcon from "../../Assets/remove-item-icon.svg";
import "../Header-Cart/Cart.css";
import OrderSummary from "../../components/Checkout-OrderSummary/OrderSummary";

function Checkout({ cartItems, removeFromCart }) {
  //   console.log(cartItems);
//header-cart instead of repeating code in this page, in the cart-items-list
  return (
    <div className="checkout-page">
      <span className="checkout-header-text">
        Checkout (
        <span className="checkout-amount">{cartItems.length} Items</span>)
      </span>

      <span className="chk-out-list-header">Cart Items</span>
      <ul className="chk-out cart-items-list">
        {cartItems.map(({ id, image, title, price, quantity }) => (
          <li className="chk-out cart-item" key={id}>
            <div className="chk-out cart-item-image">
              <img src={image} alt="product" />
            </div>
            <div className="chk-out cart-item-details">
              <span className="chk-out item-name">{title}</span>
              <div className="chk-out item-pricing-detail">
                <span className="chk-out item-price unit">
                  Unit Price: ${price}
                </span>
                <span className="chk-out item-amount">
                  Quantity: {quantity}
                </span>
                <div className="chk-out item-price-total">
                  Item Total:
                  <span className="chk-out item-price"> ${price}</span>
                  <span className="chk-out multiply-sign">&times;</span>
                  <span className="chk-out item-amount">{quantity}</span>
                  <span className="equal-sign">=</span>$
                  {(quantity * price).toFixed(2)}
                </div>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(id)}
              className="chk-out item-remove-btn"
            >
              <img src={DeleteIcon} alt="remove" />
            </button>
          </li>
        ))}
      </ul>
      <OrderSummary cartItems={cartItems} />
    </div>
  );
}

export default Checkout;
