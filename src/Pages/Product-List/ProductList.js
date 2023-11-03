import "./ProductList.css";
import ProductItem from "../../components/Product-Item/ProductItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList({ products, addToCart }) {
  /* SHUFFLED PRODUCTS STATE */
  const [shuffledProducts, setShuffledProducts] = useState([]);
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

  return (
    <div className="product-listing-page">
        <div className="categories-header">
          <h2 className="categories-title">Categories</h2>
          <ul className="category-links">
            <li><Link className="prd-category-link" to='/products'> All</Link></li>
            <li><Link className="prd-category-link" to='/products'> Men</Link></li>
            <li><Link className="prd-category-link" to='/products'> Women</Link></li>
            <li><Link className="prd-category-link" to='/products'> Electronics</Link></li>
            <li><Link className="prd-category-link" to='/products'> Jewelery</Link></li>
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
