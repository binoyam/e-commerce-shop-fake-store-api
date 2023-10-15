import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header/Header";
import MainContent from "./components/Main-Content/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
  const BASEURL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);
  function fetchProducts() {
    let url = BASEURL;
    if (selectedCategory) {
      url += `/category/${selectedCategory}`;
    }
    axios
      .get(url)
      .then((res) => {
        const productsList = res.data;
        // console.log(productsList);
        setProducts(productsList);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }
  return (
    <div className="App">
      <Header handleCategoryChange={handleCategoryChange} />

      <MainContent
        selectedCategory={selectedCategory}
        fetchProducts={fetchProducts}
        products={products}
      />

      <Footer />
    </div>
  );
}

export default App;
