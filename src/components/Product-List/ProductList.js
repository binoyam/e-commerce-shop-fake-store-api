import "./ProductList.css";
import ProductItem from "../Product-Item/ProductItem";

function ProductList({ products, addToCart }) {
  /* ADD TO CART HANDLER */
  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };

  return (
    <>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          addToCart={handleAddToCart}
        />
      ))}
    </>
  );
}

export default ProductList;
