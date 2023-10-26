import { Link, useLocation } from "react-router-dom";
import "./Nav.css";
import MenuIcon from "../../Assets/icon-menu.svg";
import CloseMenuIcon from "../../Assets/close-for-menu.svg";
import SearchIcon from "../../Assets/magnifying-glass-solid.svg";

function Nav({
  setSelectedCategory,
  isMenuOpen,
  setIsMenuOpen,
  searchTerm,
  handleSearch,
}) {
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  function closeMenu() {
    setIsMenuOpen(false);
  }
  /* TO SHOW THE SEARCH BAR ONLY IN HOMEPAGE */
  const location = useLocation();
  const homePage = location.pathname === "/home";
  const searchResultPage = location.pathname === "/search-result";
  const pagesWithSearchBar = homePage || searchResultPage;
  // console.log(searchResults);
  return (
    <nav className="navigation">
      {!isMenuOpen ? (
        <button onClick={toggleMenu} className="menu-btn">
          <img src={MenuIcon} alt="menu" />
        </button>
      ) : (
        <button onClick={closeMenu} className="close-menu-btn">
          <img src={CloseMenuIcon} alt="close menu" />
        </button>
      )}

      {pagesWithSearchBar && (
        <form className="search-bar">
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
      )}

      {!pagesWithSearchBar && (
        <ul className={isMenuOpen ? "nav-links show" : "nav-links hide"}>
          <li>
            <Link
              onClick={() => setSelectedCategory("men%27s%20clothing")}
              to="/category/mens-clothing"
              className="nav-link"
            >
              Men
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setSelectedCategory("women%27s%20clothing")}
              to="/category/womens-clothing"
              className="nav-link"
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setSelectedCategory("electronics")}
              to="/category/electronics"
              className="nav-link"
            >
              Electronics
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setSelectedCategory("jewelery")}
              to="/category/jewelery"
              className="nav-link"
            >
              Jewelery
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Nav;
