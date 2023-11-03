import "./App.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import Checkout from "./Pages/Checkout/Checkout";
import HomePage from "./Pages/HomePage/HomePage";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import ProductDescription from "./Pages/Product-Description/ProductDescription";
import ProductList from "./Pages/Product-List/ProductList";
import SearchResult from "./Pages/SearchResult/SearchResult";

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
  /* FUNCTION TO FETCH PRODUCTS */
  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  function fetchProducts(category) {
    let url = "https://fakestoreapi.com/products";

    if (category) {
      url += `/category/${category}`;
    }

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log("Error fetching products: ", error);
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
    if (term.trim() === "") {
      setSearchResults([]);
    } else {
      const searchResult = products.filter((product) =>
        product.title.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(searchResult);
    }
    if (searchResults.length > 0) {
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

      <main className="main-content">

        <Routes>
          {/* Navigate to home */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* HOME PAGE */}
          <Route
            path="/home"
            element={
              <HomePage
                products={products}
                setSelectedCategory={setSelectedCategory}
              />
            }
          />

          {/* SEARCH RESULT PAGE */}
          <Route
            path="/search-result"
            element={
              <SearchResult
                searchResults={searchResults}
                searchTerm={searchTerm}
                addToCart={addToCart}
              />
            }
          />

          {/* ALL PRODUCTS LIST PAGE */}
          <Route
            path="/products"
            element={
              <ProductList
                handleSearch={handleSearch}
                searchResults={searchResults}
                searchTerm={searchTerm}
                addToCart={addToCart}
                products={products}
                setSelectedCategory={setSelectedCategory}
              />
            }
          >
          </Route>

          {/* SELECTED CATEGORY PAGE */}
          <Route
            path="products/categories/:category"
            element={<ProductList setSelectedCategory={setSelectedCategory} addToCart={addToCart} products={products} />}
          />

          {/* PRODUCT DESCRIPTION PAGE*/}
          <Route
            exact
            path="/product/:id"
            element={
              <ProductDescription products={products} addToCart={addToCart} />
            }
          />

          {/* CHECKOUT PAGE */}
          <Route
            path="/checkout"
            element={
              <Checkout cartItems={cartItems} removeFromCart={removeFromCart} />
            }
          />

          {/* PAYMENT PAGE */}
          <Route
            path="/payment"
            element={<PaymentPage cartItems={cartItems} />}
          />
        </Routes>

      </main>

      <Footer />
    </div>
  );
}

export default App;
