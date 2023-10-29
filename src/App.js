import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import MainContent from "./components/Main-Content/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
  /* ALL PRODUCTS STATE */
  const [products, setProducts] = useState([]);

  /* CATEGORY STATE */
  const [selectedCategory, setSelectedCategory] = useState("");

  /* CART ITEMS STATE */
  const [cartItems, setCartItems] = useState([]);

  /* STORE CART DATA ON LOCAL STORAGE */
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  /* FUNCTION TO ADD ITEMS TO CART */
  const addToCart = (product, quantity) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    // console.log(cartItems);
    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItems = [
        ...cartItems,
        { ...product, quantity: quantity },
      ];
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  /* FUNCTION TO REMoVOE ITEMS FROM CART */
  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  /* FUNCTION TO CHANGE CATEGORY*/
  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  /* FUNCTION TO FETCH PRODUCTS */
  function fetchProducts(category) {
    let url = "https://fakestoreapi.com/products";

    if (category) {
      url += `/category/${category}`;
    }
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("Error fetching products:", error);
      });
  }
  /* SEARCH RESULT STATE */
  const [searchResults, setSearchResults] = useState([]);
  /* SEARCH ITEM STATE */
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  /* FUNCTION TO FIND SEARCHED ITEM FROM ALL PRODUCTS */
  const handleSearch = (e) => {
    e.preventDefault();
    const term = e.target.value;
    setSearchTerm(term);
    const titleResult = products.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    const categoryResult = products.filter((product) =>
      product.category.toLowerCase().includes(term.toLowerCase())
    );
    const descriptionResult = products.filter((product) =>
      product.description.toLowerCase().includes(term.toLowerCase())
    );
    const allResults = [
      ...new Set([...titleResult, ...categoryResult, ...descriptionResult]),
    ];
    setSearchResults(allResults);
    if (allResults.length > 0) {
      navigate("/search-result");
    }
  };

  // console.log(searchResults);
  return (
    <div className="App">
      <Header
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        products={products}
        removeFromCart={removeFromCart}
        cartItems={cartItems}
        setSelectedCategory={setSelectedCategory}
      />

      <MainContent
        handleSearch={handleSearch}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        products={products}
        searchResults={searchResults}
        searchTerm={searchTerm}
      />

      <Footer />
    </div>
  );
}

export default App;
