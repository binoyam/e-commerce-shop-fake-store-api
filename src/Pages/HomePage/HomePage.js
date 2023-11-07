import { Link } from "react-router-dom";
import "./HomePage.css";
import Hero from "../../components/Hero/Hero";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";


function HomePage({ products }) {


  return (
    <div className="home-page">
      <Hero />
      <TrendingProducts products={products} />

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
