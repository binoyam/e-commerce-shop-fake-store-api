import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage({ products }) {
  // console.log(products);
  // add a price filtering function in this page
  // write an about section
  // privacy policy page
  // contact us page
  //the star rating function needs to be more clear
  //
  /* SORT PRODUCTS BY RATING/ FROM HIGHEST RATED TO LOWEST RATED*/
  const sortedProducts = products.sort((a, b) => b.rating.rate - a.rating.rate);
  /* TOP 5 HIGHEST RATED PRODUCTS */
  const topProducts = sortedProducts.slice(0, 5);
  console.log(topProducts);
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
      <h2 className="trending-txt">Top Rated Products</h2>
      <div className="product-list">
        {topProducts.map((product) => (
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
