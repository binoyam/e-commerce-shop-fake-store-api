import { useState } from 'react'
import { Link } from 'react-router-dom';
import './CategoriesHeader.css'

function CategoriesHeader() {
    const [categoryName, setCategoryName] = useState("All");
  const handleClick = (name) => {
    setCategoryName(name);
  }
  return (
    <div className="categories">
      <h2 className="categories-title">{categoryName}</h2>
      <ul className="category-links">
        <li>
          <Link
            className="prd-category-link"
            to="/products"
            onClick={() => handleClick("All", "")}
          >
            All
          </Link>
        </li>
        <li>
          <Link
            className="prd-category-link"
            to="/categories/mens-clothing"
            onClick={() => handleClick("Men", "men%27s%20clothing")}
          >
            Men
          </Link>
        </li>
        <li>
          <Link
            className="prd-category-link"
            to="/categories/womens-clothing"
            onClick={() => handleClick("Women", "women%27s%20clothing")}
          >
            Women
          </Link>
        </li>
        <li>
          <Link
            className="prd-category-link"
            to="/categories/electronics"
            onClick={() => handleClick("Electronics", "electronics")}
          >
            Electronics
          </Link>
        </li>
        <li>
          <Link
            className="prd-category-link"
            to="/categories/jewelery"
            onClick={() => handleClick("Jewelery", "jewelery")}
          >
            Jewelery
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default CategoriesHeader