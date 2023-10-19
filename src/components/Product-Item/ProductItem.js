import { Link } from "react-router-dom";
import "./ProductItem.css";
import CartIcon from "../../Assets/icon-cart-btn.svg";

function ProductItem({ product, handleAddToCart }) {
  //   console.log(product);
  return (
    <article className="product-box">
      <h3 className="product-title">{product.title.slice(0, 20)}</h3>
      <img className="product-image" src={product.image} alt={product.title} />
      <span className="product-price">${product.price}</span>
      <button
        onClick={() => handleAddToCart(product)}
        className="add-to-cart-btn"
      >
        <img src={CartIcon} alt="Cart" /> Add to Cart
      </button>

      <p className="product-description">{product.description.slice(0, 70)}...</p>

      <Link to={`/product/${product.id}`}>
        <button className="expand-button">View Details</button>
      </Link>
    </article>
  );
}

export default ProductItem;
