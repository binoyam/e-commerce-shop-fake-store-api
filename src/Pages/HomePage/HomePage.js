import { Link } from "react-router-dom";
import TopProducts from "../../components/TopProducts/TopProducts";
import "./HomePage.css";
import { useState, useEffect } from "react";
import ProductList from "../Product-List/ProductList";
import Nav from "../../components/Header-Nav/Nav";

// add a price filtering function in this page
// write an about section
// privacy policy page
// contact us page
//the star rating function needs to be more clear

function HomePage({ products, setSelectedCategory }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [topProducts, setTopProducts] = useState([]);
  /* SORT PRODUCTS BY RATING/ FROM HIGHEST RATED TO LOWEST RATED*/
  useEffect(() => {
    const sortedProducts = [...products].sort(
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
      <section className="home-page-header">
        <h1 className="home-header">Welcome to bt-shop!</h1>
        <p className="home-sub-header">
          Explore our wide range of products and start shopping today!
        </p>
      </section>
      <section className="home-one">
        <div className="slider-container">
          <h2 className="slide-header">Recommended Products</h2>
          <div className="slide-wrapper">
            {topProducts.map((product, index) => (
              <TopProducts
                key={product.id}
                index={index}
                product={product}
                currentSlide={currentSlide}
              />
            ))}
          </div>
        </div>
        <div className="home-two">
          <h2 className="category-header">Categories</h2>
          <ul className="home-page-category-list">
            <li>
              <Link
                onClick={() => setSelectedCategory("men%27s%20clothing")}
                to="/products/categories/mens-clothing"
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setSelectedCategory("women%27s%20clothing")}
                to="/products/categories/womens-clothing"
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setSelectedCategory("electronics")}
                to="/products/categories/electronics"
              >
                Electronics
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setSelectedCategory("jewelery")}
                to="/products/categories/jewelery"
           
              >
                Jewelery
              </Link>
            </li>
          </ul>
        </div>
        <div className="home-two">
          <h2 className="sale-header">sale</h2>
          <ul>
            <li>sale items</li>
            <li>sale items</li>
            <li>sale items</li>
            <li>sale items</li>
            <li>sale items</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
