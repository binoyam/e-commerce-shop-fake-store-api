import React from "react";
import "./Cart.css";
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
                <div className="cart-item-detail">
                  <h3 className="item-name">{item.title}</h3>
                  <div className="cart-item-pricing-detatil">
                    <span class="price">${item.price}</span>
                    <span class="times">&times;</span>
                    <span class="amount">$counter</span>
                    <span class="total">$$total.00</span>
                  </div>
                  <button class="delete"></button>
                </div>
                <button>Checkout</button>
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
