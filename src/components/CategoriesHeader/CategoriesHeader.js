import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CategoriesHeader.css";

function CategoriesHeader() {
  const [categoryName, setCategoryName] = useState("All");
 
  return (
    <div className="categories">
      <h2 className="categories-title">{categoryName}</h2>
      <ul className="category-links">
        <li>
          <Link
            className="prd-category-link"
            to="/categories/all"
            onClick={() => setCategoryName("All")}
          >
            All
          </Link>
        </li>
        <li>
          <Link
            className="prd-category-link"
            to="/categories/mens-clothing"
            onClick={() => setCategoryName("Men")}
          >
            Men
          </Link>
        </li>
        <li>
          <Link
            className="prd-category-link"
            to="/categories/womens-clothing"
            onClick={() => setCategoryName("Women")}
          >
            Women
          </Link>
        </li>
        <li>
          <Link
            className="prd-category-link"
            to="/categories/electronics"
            onClick={() => setCategoryName("Electronics")}
          >
            Electronics
          </Link>
        </li>
        <li>
          <Link
            className="prd-category-link"
            to="/categories/jewelery"
            onClick={() => setCategoryName("Jewelery")}
          >
            Jewelery
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default CategoriesHeader;
