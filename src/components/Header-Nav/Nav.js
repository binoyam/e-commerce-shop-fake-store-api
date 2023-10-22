import { Link } from "react-router-dom";
import "./Nav.css";
import MenuIcon from "../../Assets/icon-menu.svg";
import CloseMenuIcon from "../../Assets/close-for-menu.svg";
import { useState } from "react";
function Nav({ setSelectedCategory }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav className="navigation">
      <button onClick={toggleMenu} className="menu-btn">
        <img src={MenuIcon} alt="menu" />
      </button>
      <ul className="nav-links">
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
      <button onClick={closeMenu} className="close-menu-btn">
        <img src={CloseMenuIcon} alt="close menu" />
      </button>
    </nav>
  );
}

export default Nav;
