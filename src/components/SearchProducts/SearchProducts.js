import SearchIcon from "../../Assets/Images/magnifying-glass-solid.svg";
import './SearchProducts.css'
function SearchProducts({searchTerm, handleSearch, className}) {
  return (
    <form className={className}>
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
  )
}

export default SearchProducts