import { Link } from "react-router-dom";
import TopProducts from "../../components/TopProducts/TopProducts";
import "./HomePage.css";
import { useState, useEffect } from "react";
import MensImg from '../../Assets/Images/mens-clothing.jpg'
import WomensImg from '../../Assets/Images/womens-clothing-1.jpg'
import ElectronicsImg from '../../Assets/Images/electronics.jpg'
import JeweleryImg from '../../Assets/Images/jewelery.jpg'
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
      <section className="grid-images-container">
          <div className="grid-one">
            <Link to='/categories/mens'>
              <div className="over-lay"></div>
              <img src={MensImg} alt="Mens-clothing" />
              <p className="grid-title">Men's Clothing</p>
            </Link>
          </div>
          <div className="grid-two">
            <Link to='/categories/womens'>
              <div className="over-lay"></div>
              <img src={WomensImg} alt="Womens-clothing" />
              <p className="grid-title">Women's Clothing</p>
            </Link>
          </div>
          <div className="grid-three">
            <Link to='/categories/electronics'>
              <div className="over-lay"></div>
              <img src={ElectronicsImg} alt="Electronics" />
              <p className="grid-title">Electronics</p>
            </Link>
          </div>
          <div className="grid-four">
            <Link to='/categories/jewelery'>
              <div className="over-lay"></div>
              <img src={JeweleryImg} alt="Jewelery" />
              <p className="grid-title">Jewelery</p>
            </Link>
          </div>
      </section>
      <section className="home-page-header">
        <h1 className="home-header">Welcome to bt-shop!</h1>
        <p className="home-sub-header">
          Explore our wide range of products and start shopping today!
        </p>
      </section>
      <section className="home-one">
        <div className="home-category-section">
          <h2 className="category-header">Categories</h2>
          <ul className="home-page-category-list">
            <li>
              <Link className="category-link" to="/categories/all">
                All Products
              </Link>
            </li>
            <li>
              <Link className="category-link" to="/categories/mens-clothing">
                Men's
              </Link>
            </li>
            <li>
              <Link className="category-link" to="/categories/womens-clothing">
                Women's
              </Link>
            </li>
            <li>
              <Link className="category-link" to="/categories/electronics">
                Electronics
              </Link>
            </li>
            <li>
              <Link className="category-link" to="/categories/jewelery">
                Jewelery
              </Link>
            </li>
          </ul>
        </div>
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
