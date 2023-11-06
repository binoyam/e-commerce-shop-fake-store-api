import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./CategoriesHeader.css";
import SearchProducts from "../SearchProducts/SearchProducts";
import paths from "../../Paths";
import PriceFilter from "../PriceFilter/PriceFilter";

function CategoriesHeader({ searchTerm, handleSearch, products }) {
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
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      />
      <PriceFilter products={products} />
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
