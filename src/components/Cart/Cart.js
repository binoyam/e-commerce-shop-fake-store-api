import React from "react";
import "./Cart.css";
function Cart({ cartItems, isCartOpen }) {
  return (
    <div className={isCartOpen ? "cart-drop-down show-cart" : "cart-drop-down"}>
      <div className="cart-content">
        <p className="cart-header">Cart</p>
        <span className="empty-cart">Your cart is empty</span>
        <ul className="cart-items-list">
          {cartItems.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cart;
