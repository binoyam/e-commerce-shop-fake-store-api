import { Link } from "react-router-dom";
import ProductItem from "../../components/Product-Item/ProductItem";
import "./SearchResult.css";

/* SEARCH RESULT PAGE */
function SearchResult({ searchResults, searchTerm, addToCart }) {

  console.log(searchResults);
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
          Back to all products
        </Link>
      </div>
      {searchResults.length > 0 ? (
        <div className="searched-products">
          {searchResults.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              addToCart={handleAddToCart}
            />
          ))}
        </div>
      ) : (
        <div className="no-result">
          <h1>No matches found</h1>
        </div>
      )}
    </div>
  );
}

export default SearchResult;
