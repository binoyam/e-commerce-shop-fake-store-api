import React from 'react'

function Cart({selectedProducts, isCartOpen}) {
  return (
    <div
    className={isCartOpen ? "cart-drop-down show-cart" : "cart-drop-down"}
  >
    <div className="cart-content">
    <p className="cart-header">Cart</p>
    <span className="empty-cart">Your cart is empty</span>
    {selectedProducts.title}
   
      
    </div>
  </div>
  )
}

export default Cart