import { useEffect, useState } from "react";
import "./TrendingProducts.css";
import TopProducts from "../TopProducts/TopProducts";

function TrendingProducts({ products }) {
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
    <section className="slider-container">
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
    </section>
  );
}

export default TrendingProducts;
