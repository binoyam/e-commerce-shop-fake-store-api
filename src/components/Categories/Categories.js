import CategoriesHeader from "../CategoriesHeader/CategoriesHeader";
import "./Categories.css";
import { Outlet } from "react-router-dom";

function Categories({ searchTerm, handleSearch, products }) {
  return (
    <div className="categories-page">
      <CategoriesHeader searchTerm={searchTerm} handleSearch={handleSearch} products={products} />
      <Outlet />
    </div>
  );
}

export default Categories;
