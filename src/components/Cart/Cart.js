import "./Cart.css";
import RemoveIcon from '../../Assets/icon-remove.svg'


function Cart({ cartItems, isCartOpen }) {
  console.log(cartItems);
  return (
    <div className={isCartOpen ? "cart-drop-down show-cart" : "cart-drop-down"}>
      <p className="cart-header">Cart</p>
      <div className="cart-content">
        {isCartOpen && cartItems.length > 0 ? (
          <ul className="cart-items-list">
            {cartItems.map((item) => (
              <li className="cart-item" key={item.id}>
                <div className="cart-item-image">
                  <img src={item.image} alt="product" />
                </div>
                <div className="cart-item-details">
                  <span className="item-name">{item.title}</span>
                  <div className="item-pricing-detail">
                    <span class="item-price">${item.price}</span>
                    <span class="multiply-sign">&times;</span>
                    <span class="item-amount">$counter</span>
                    <span class="item-price-total">$$total.00</span>
                  </div>
                </div>
                  <button class="item-remove-btn"><img src={RemoveIcon} alt="remove" /></button>
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

export default Cart;
