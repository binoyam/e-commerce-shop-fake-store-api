import { Link } from "react-router-dom";
import ProductItem from "../../components/Product-Item/ProductItem";
import "./SearchResult.css";
import BackArrow from "../../Assets/Images/arrow-left-icon.svg";


function SearchResult({ searchResults, searchTerm, addToCart }) {
  // console.log(searchResults);
  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };
  return (
    <div className="search-result-page">
      <div className="search-page-header">
        <div className="search-page-result">
          <span className="search-result-count">*{searchResults.length}</span>
          <span>{searchResults.length > 1 ? " Results " : " Result "}</span>
          <span>for :</span>
          <span className="term">" {searchTerm} "</span>
        </div>
        <Link className="all-products-link" to="/categories/all">
          <img className="back-arrow" src={BackArrow} alt="back-arrow" />
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
          <p>
            Please search for a valid product or Use the button above to look at
            our list of products
          </p>
        </div>
      )}
    </div>
  );
}

export default SearchResult;
