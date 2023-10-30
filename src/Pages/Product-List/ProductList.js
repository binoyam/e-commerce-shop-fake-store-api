import "./ProductList.css";
import ProductItem from "../../components/Product-Item/ProductItem";
import { useEffect, useState } from "react";

function ProductList({ products, addToCart, setSelectedProductId }) {
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
    <>
      <div className="filter-section"></div>
      <div className="all-products-page">
        {shuffledProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={handleAddToCart}
            setSelectedProductId={setSelectedProductId}
          />
        ))}
      </div>
    </>
  );
}

export default ProductList;
