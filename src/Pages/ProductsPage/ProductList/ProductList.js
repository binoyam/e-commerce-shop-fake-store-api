import './ProductList.css';
import ProductItem from "../../../components/Product-Item/ProductItem";

function ProductList({ products, addToCart }) {
 
  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };
  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          addToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
