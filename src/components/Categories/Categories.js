import "./Categories.css";
import CategoriesHeader from "../../../components/CategoriesHeader/CategoriesHeader";
import { Outlet } from "react-router-dom";

function Categories() {
  return (
    <div className="products-page">
      <CategoriesHeader />
      <Outlet />
    </div>
  );
}

export default Categories;
