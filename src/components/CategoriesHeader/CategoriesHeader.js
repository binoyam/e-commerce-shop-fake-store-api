import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./CategoriesHeader.css";
import SearchProducts from "../SearchProducts/SearchProducts";

const paths = {
  All: "/categories/all",
  Men: "/categories/mens-clothing",
  Women: "/categories/womens-clothing",
  Electronics: "/categories/electronics",
  Jewelery: "/categories/jewelery",
};
function CategoriesHeader({ searchTerm, handleSearch }) {
  const [categoryName, setCategoryName] = useState("All");
  const location = useLocation();

  useEffect(() => {

    const pagePath = location.pathname;
    const category = Object.keys(paths).find((key) => paths[key] === pagePath);
    setCategoryName(category);
  }, [location]);

  return (
    <div className="categories">
      <SearchProducts
        className="cat"
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      />
      <h2 className="categories-title">{categoryName}</h2>
      <ul className="category-links">
        {Object.keys(paths).map((key) => (
          <li key={key}>
            <Link
              className={`prd-category-link ${
                categoryName === key ? "selected" : ""
              }`}
              to={paths[key]}
              onClick={() => setCategoryName(key)}
            >
              {key}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesHeader;
