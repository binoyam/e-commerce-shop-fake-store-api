import "./ProductList.css";
import ProductItem from "../../components/Product-Item/ProductItem";
import { useEffect, useState } from "react";

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
  // console.log(products);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleCheckboxChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleFilter = () => {
    const filtered = products.filter((product) =>
      selectedCategories.includes(product.category)
    );
    setFilteredProducts(filtered);
  };

  const handleReset = () => {
    setSelectedCategories([]);
    setFilteredProducts([]);
  };

  const availableCategories = [
    ...new Set(products.map((product) => product.category)),
  ];
  return (
    <div className="product-list-page">
      <div className="filter-products">
        {availableCategories.map((category) => (
          <div key={category}>
            <label>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCheckboxChange(category)}
              />
              {category}
            </label>
          </div>
        ))}
        <button onClick={handleFilter}>Filter</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      {filteredProducts.length > 0 ? (
        <div className="all-products-page">
          {filteredProducts.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              addToCart={handleAddToCart}
            />
          ))}
        </div>
      ) : (
        <div className="all-products-page">
          {shuffledProducts.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              addToCart={handleAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}
// wrapper with a class name product list page
export default ProductList;
