import { Link } from "react-router-dom";
import "./HomePage.css";
import { useState, useEffect } from "react";

// add a price filtering function in this page
// write an about section
// privacy policy page
// contact us page
//the star rating function needs to be more clear

function HomePage({ products }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [topProducts, setTopProducts] = useState([]);
  /* SORT PRODUCTS BY RATING/ FROM HIGHEST RATED TO LOWEST RATED*/
  useEffect(() => {
    const sortedProducts = products.sort(
      (a, b) => b.rating.rate - a.rating.rate
    );
    /* TOP 5 HIGHEST RATED PRODUCTS */
    const top5Products = sortedProducts.slice(0, 5);
    setTopProducts(top5Products);
  }, [products]);

  /* SLIDE TO THE NEXT PRODUCT */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % topProducts.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [topProducts.length]);

  return (
    <div className="home-page">
      <div className="home-page-header">
        <h1 className="home-header">Welcome to bt-shop!</h1>
        <p className="home-sub-header">
          Explore our wide range of products and start shopping today!
        </p>
      </div>
      <div className="slider-container">
        <h2 className="trending-txt">Top Rated Products</h2>
        <div className="slide-wrapper">
          {topProducts.map((product, index) => (
            <div
              key={product.id}
              className={`slider-item ${
                index === currentSlide ? "active" : ""
              }`}
            >
              <h3 className="trending-title">{product.title.slice(0, 12)}</h3>
              <div className="rating">
                Customer rating: {product.rating.rate}
              </div>

              <img className="img" src={product.image} alt="prodcut" />
              <span className="trending-price">${product.price}</span>
              <Link className="link" to={`/product/${product.id}`}>
                View Product
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
