import { Link } from "react-router-dom";
import "./Nav.css";
import MenuIcon from "../../Assets/Images/icon-menu.svg";
import CloseMenuIcon from "../../Assets/Images/close-for-menu.svg";

function Nav({ setSelectedCategory, isMenuOpen, setIsMenuOpen }) {
  /* OPEN MENU BUTTON FUNCTON */
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  /* CLOSE MENU BUTTON FUNCTON */
  function closeMenu() {
    setIsMenuOpen(false);
  }

  /* CLOSE MENU AFTER CATEGORY SELECTION */
  const handleClick = (category) => {
    setSelectedCategory(category);
    setIsMenuOpen(false);
  };

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

      <ul className={isMenuOpen ? "nav-links show" : "nav-links hide"}>
        <li>
          <Link
            onClick={() => handleClick("men%27s%20clothing")}
            to="/products/categories/mens-clothing"
            className="nav-link"
          >
            Men
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleClick("women%27s%20clothing")}
            to="/products/categories/womens-clothing"
            className="nav-link"
          >
            Women
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleClick("electronics")}
            to="/products/categories/electronics"
            className="nav-link"
          >
            Electronics
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleClick("jewelery")}
            to="/products/categories/jewelery"
            className="nav-link"
          >
            Jewelery
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
