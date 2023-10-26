import { Link } from "react-router-dom";
import ProductItem from "../Product-Item/ProductItem";
import "./SearchResult.css";
function SearchResult({ searchResults, searchTerm, addToCart }) {
  // console.log(searchResults);
  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };
  return (
    <div className="search-result-page">
      <div className="search-result-header">
        <h1 className="search-page-header">
          (<span className="result-amount">{searchResults.length}</span>) Search
          result for : " {searchTerm} "
        </h1>
        <Link className="all-products-link" to="/products">
          View all products
        </Link>
      </div>
      <div className="searched-products">
        {searchTerm &&
          searchResults.map((product) => (
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
