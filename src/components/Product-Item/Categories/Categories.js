import "./Categories.css";
import CategoriesHeader from "../../../components/CategoriesHeader/CategoriesHeader";
import { Outlet } from "react-router-dom";

function Categories() {
  return (
    <>
      <CategoriesHeader />
      <Outlet />
    </>
  );
}

export default Categories;
