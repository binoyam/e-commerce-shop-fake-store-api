import "./Cart.css";
import RemoveIcon from "../../Assets/icon-remove.svg";

function Cart({ cartItems, isCartOpen, removeFromCart }) {
  // console.log(cartItems);

  return (
    <div className={isCartOpen ? "cart-drop-down show-cart" : "cart-drop-down"}>
      <p className="cart-header">Cart</p>
      <div className="cart-content">
        {isCartOpen && cartItems.length > 0 ? (
          <ul className="cart-items-list">
            {cartItems.map(({ id, image, title, price, quantity }) => (
              <li className="cart-item" key={id}>
                <div className="cart-item-image">
                  <img src={image} alt="product" />
                </div>
                <div className="cart-item-details">
                  <span className="item-name">{title.slice(0, 60)}</span>
                  <div className="item-pricing-detail">
                    <span className="item-price">${price}</span>
                    <span className="multiply-sign">&times;</span>
                    <span className="item-amount">{quantity}</span>
                    <span className="item-price-total">
                      ${(quantity * price).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(id)}
                  className="item-remove-btn"
                >
                  <img src={RemoveIcon} alt="remove" />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <span className="empty-cart">Your cart is empty</span>
        )}
      </div>
    </div>
  );
}
// checkout button with all the selected products and total price 
export default Cart;
