import { useState } from "react";
import { Link } from "react-router-dom";
import "./CategoriesHeader.css";

function CategoriesHeader() {
  const [categoryName, setCategoryName] = useState("All");
  const handleClick = (name) => {
    setCategoryName(name);
  };
  return (
    <div className="categories">
      <h2 className="categories-title">{categoryName}</h2>
      <ul className="category-links">
        <li>
          <Link
            className="prd-category-link"
            to="/categories/all"
            onClick={() => handleClick("All", "")}
          >
            All
          </Link>
        </li>
        <li>
          <Link
            className="prd-category-link"
            to="/categories/mens-clothing"
            onClick={() => handleClick("Men")}
          >
            Men
          </Link>
        </li>
        <li>
          <Link
            className="prd-category-link"
            to="/categories/womens-clothing"
            onClick={() => handleClick("Women")}
          >
            Women
          </Link>
        </li>
        <li>
          <Link
            className="prd-category-link"
            to="/categories/electronics"
            onClick={() => handleClick("Electronics")}
          >
            Electronics
          </Link>
        </li>
        <li>
          <Link
            className="prd-category-link"
            to="/categories/jewelery"
            onClick={() => handleClick("Jewelery")}
          >
            Jewelery
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default CategoriesHeader;
