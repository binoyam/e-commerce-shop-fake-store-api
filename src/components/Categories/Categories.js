import CategoriesHeader from "../CategoriesHeader/CategoriesHeader";
import "./Categories.css";
import { Outlet } from "react-router-dom";

function Categories({ searchTerm, handleSearch }) {
  return (
    <div className="categories-page">
      <CategoriesHeader searchTerm={searchTerm} handleSearch={handleSearch} />
      <Outlet />
    </div>
  );
}

export default Categories;
