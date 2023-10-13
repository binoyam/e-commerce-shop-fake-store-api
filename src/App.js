import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header/Header";
import MainContent from "./components/Main-Content/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
  const BASEURL = 'https://fakestoreapi.com/products'
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(BASEURL)
      .then((res) => {
        const productsList = res.data;
        console.log(productsList);
        setProducts(productsList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Header />

      <MainContent products={products} />

      <Footer />
    </div>
  );
}

export default App;
