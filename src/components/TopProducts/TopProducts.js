import { Link } from "react-router-dom";
import "./TopProducts.css";

function TopProducts({ product, index, currentSlide }) {
  return (
    <div
      key={product.id}
      className={`slider-item ${index === currentSlide ? "active" : ""}`}
    >
      <h3 className="trending-title">{product.title.slice(0, 20)}</h3>
      <div className="rating">
        Customer rating:{" "}
        <span className="rating-value">{product.rating.rate}</span> / 5
      </div>

      <img className="img" src={product.image} alt="prodcut" />
      <span className="trending-price">${product.price}</span>
      <Link className="link" to={`/product/${product.id}`}>
        View Product
      </Link>
    </div>
  );
}

export default TopProducts;
