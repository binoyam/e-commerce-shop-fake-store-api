import { useEffect, useRef } from "react";
import SearchIcon from "../../Assets/Images/magnifying-glass-solid.svg";
import "./SearchProducts.css";

function SearchProducts({ searchTerm, handleSearch }) {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form ref={inputRef} className="search-bar">
      <img className="search-icon" src={SearchIcon} alt="search-icon" />
      <label htmlFor="search">
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search products..."
        />
      </label>
    </form>
  );
}
export default SearchProducts;
