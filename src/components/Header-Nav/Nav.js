import { Link } from "react-router-dom";
import './Nav.css'

function Nav({ setSelectedCategory }) {
  return (
    <nav className="navigation">
      <ul className="nav-links">
        <li>
          <Link
            onClick={() => setSelectedCategory("")}
            to="/"
            className="nav-link"
          >
            All
          </Link>
        </li>
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
    </nav>
  );
}

export default Nav;
