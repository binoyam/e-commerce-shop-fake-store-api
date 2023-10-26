import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage({ products }) {
  // console.log(products);
  function renderStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i}>&#9733;</span>); // Full star
    }

    if (halfStar) {
      stars.push(<span key={fullStars}>&#9733;&#189;</span>); // Half star
    }

    return stars;
  }
  return (
    <div className="home-page">
      <div className="home-page-header">
        <h1 className="home-header">Welcome to bt-shop!</h1>
        <p className="home-sub-header">
          Explore our wide range of products and start shopping today!
        </p>
      </div>
      <h2 className="trending-txt">Trending products</h2>
      <div className="product-list">
        {products.map((product) => (
          <Link
            key={product.id}
            className="product-card"
            to={`/product/${product.id}`}
          >
            <span className="trending-title">{product.title.slice(0, 12)}</span>
            <div className="rating">
              {renderStarRating(product.rating.rate)}
            </div>
            <img className="img" src={product.image} alt="" />
            <span className="trending-price">${product.price}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
