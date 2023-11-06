import CategoriesHeader from "../CategoriesHeader/CategoriesHeader";
import "./Categories.css";
import { Outlet } from "react-router-dom";

function Categories() {
  return (
    <div className="categories-page">
      <CategoriesHeader />
      <Outlet />
    </div>
  );
}

export default Categories;
