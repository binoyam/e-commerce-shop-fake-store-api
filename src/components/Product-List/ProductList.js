import "./ProductList.css";
import ProductItem from "../Product-Item/ProductItem";
import { useEffect, useState } from "react";
import SearchProducts from "../SearchProducts/SearchProducts";

function ProductList({ products, addToCart }) {
  const [shuffledProducts, setShuffledProducts] = useState([]);
  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };

  useEffect(() => {
    // Shuffle the array of products
    const shuffledData = shuffleArray(products);
    setShuffledProducts(shuffledData);
  }, [products]);

  // Function to shuffle the array
  const shuffleArray = (arr) => {
    const shuffledArr = [...arr];
    for (let i = shuffledArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }
    return shuffledArr;
  };
  console.log(shuffledProducts.length);
  return (
    <>
    <div className="filter-section">
        <SearchProducts />

    </div>
      <div className="all-products-page">
        {shuffledProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  );
}

export default ProductList;
