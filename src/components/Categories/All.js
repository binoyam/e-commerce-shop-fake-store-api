import ProductList from "../ProductList/ProductList";

function All({ addToCart, products }) {
  const filteredProducts = products.filter((product) => product.id < 21);
  return <ProductList products={filteredProducts} addToCart={addToCart} />;
}

export default All;
