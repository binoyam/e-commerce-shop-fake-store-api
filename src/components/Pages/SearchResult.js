import ProductItem from "../Product-Item/ProductItem";
import "./SearchResult.css";
function SearchResult({ searchResults, searchTerm, addToCart }) {
  console.log(searchResults);
  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };
  return (
    <div className="search-result-page">
      <h1 className="search-page-header">Search result for : "{searchTerm}"</h1>
      <div className="searched-prodcuts">
        {searchResults.map((product) => (
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

export default SearchResult;
