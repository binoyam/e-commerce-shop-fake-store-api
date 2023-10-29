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
  // console.log(shuffledProducts.length);
  const [selectedRanges, setSelectedRanges] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedRanges([...selectedRanges, value]);
    } else {
      setSelectedRanges(selectedRanges.filter((range) => range !== value));
    }
  };

  const filterProductsByPrice = () => {
    let filteredProducts = [];

    if (selectedRanges.includes('low')) {
      filteredProducts = filteredProducts.concat(products.filter((product) => product.price < 50));
    }
    if (selectedRanges.includes('medium')) {
      filteredProducts = filteredProducts.concat(
        products.filter((product) => product.price >= 50 && product.price < 100)
      );
    }
    if (selectedRanges.includes('high')) {
      filteredProducts = filteredProducts.concat(products.filter((product) => product.price >= 100));
    }

    return filteredProducts;
  };

  const filteredProducts = filterProductsByPrice();

  return (
    <>
    <div className="filter-section">
        <SearchProducts className="products-page-search" />
        <label>
        <input
          type="checkbox"
          value="low"
          checked={selectedRanges.includes('low')}
          onChange={handleCheckboxChange}
        />
        Low Range (&lt; $50)
      </label>
      <label>
        <input
          type="checkbox"
          value="medium"
          checked={selectedRanges.includes('medium')}
          onChange={handleCheckboxChange}
        />
        Medium Range ($50 - $100)
      </label>
      <label>
        <input
          type="checkbox"
          value="high"
          checked={selectedRanges.includes('high')}
          onChange={handleCheckboxChange}
        />
        High Range (&gt; $100)
      </label>
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
