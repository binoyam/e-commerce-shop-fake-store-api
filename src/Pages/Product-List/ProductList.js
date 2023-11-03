import "./ProductList.css";
import ProductItem from "../../components/Product-Item/ProductItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList({ products, addToCart, setSelectedCategory }) {
  /* SHUFFLED PRODUCTS STATE */
  const [shuffledProducts, setShuffledProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("All");
  /* FUNCTION TO ADD PRODUCT TO CART */
  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };

  /* SHUFFLE THE PRODUCTS */
  useEffect(() => {
    const shuffledData = shuffleProducts(products);
    setShuffledProducts(shuffledData);
  }, [products]);

  // FUNCTION TO SHUFFLE THE PRODUCTS
  const shuffleProducts = (arr) => {
    const shuffledArr = [...arr];
    for (let i = shuffledArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }
    return shuffledArr;
  };
  const handleClick = (name, category) => {
    setCategoryName(name);
    setSelectedCategory(category);
  };
  return (
    <div className="product-listing-page">
      <div className="categories-header">
        <h2 className="categories-title">{categoryName}</h2>
        <ul className="category-links">
          <li>
            <Link
              className="prd-category-link"
              to="/products"
              onClick={() => handleClick("All", "")}
            >
              All
            </Link>
          </li>
          <li>
            <Link
              className="prd-category-link"
              to="/products/categories/:category"
              onClick={() => handleClick("Men", "men%27s%20clothing")}
            >
              Men
            </Link>
          </li>
          <li>
            <Link
              className="prd-category-link"
              to="/products/categories/:category"
              onClick={() => handleClick("Women", "women%27s%20clothing")}
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              className="prd-category-link"
              to="/products/categories/:category"
              onClick={() => handleClick("Electronics", "electronics")}
            >
              Electronics
            </Link>
          </li>
          <li>
            <Link
              className="prd-category-link"
              to="/products/categories/:category"
              onClick={() => handleClick("Jewelery", "jewelery")}
            >
              Jewelery
            </Link>
          </li>
        </ul>
      </div>
      <div className="products-list">
        {shuffledProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
