import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Categories/Categories";
import All from "./components/Categories/All";
import Mens from "./components/Categories/Mens";
import Womens from "./components/Categories/Womens";
import Electronics from "./components/Categories/Electronics";
import Jewelery from "./components/Categories/Jewelery";
import HomePage from "./Pages/HomePage/HomePage";
import Checkout from "./Pages/CheckoutPage/Checkout";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import ProductDescription from "./Pages/Product-DescriptionPage/ProductDescription";
import SearchResult from "./Pages/SearchResultPage/SearchResult";
import About from "./Pages/AboutPage/About";
import Contact from "./Pages/ContactPage/Contact";
import ProductList from "./components/ProductList/ProductList";
import PrivacyPolicy from "./Pages/PrivacyPolicyPage/PrivacyPolicy";

function App() {
  /* ALL PRODUCTS STATE */
  const [products, setProducts] = useState([]);
  /* CART ITEMS STATE */
  const [cartItems, setCartItems] = useState([]);
  /* SEARCH RESULT STATE */
  const [searchResults, setSearchResults] = useState([]);
  /* SEARCH ITEM STATE */
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  /* FUNCTION TO FETCH PRODUCTS */
  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    let url = "https://fakestoreapi.com/products";
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
        alert("Error fetching products: ");
      });
  }

  /* FUNCTION TO ADD ITEMS TO CART */
  const addToCart = (product, quantity) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
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

  /* FUNCTION TO REMOVE ITEMS FROM CART */
  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };
  /* STORE CART DATA ON LOCAL STORAGE */
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

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
  };
  useEffect(() => {
    if (searchResults.length > 0) {
      navigate("/search-result");
    }
  }, [searchResults, navigate]);

  return (
    <div className="App">
      <Header
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        removeFromCart={removeFromCart}
        cartItems={cartItems}
      />

      <main className="main-content">
        <Routes>
          <Route exact path="/" element={<Navigate to="/home" />} />

          <Route
            path="/home"
            element={<HomePage products={products} addToCart={addToCart} />}
          />

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

          <Route
            path="/categories"
            element={<Categories addToCart={addToCart} products={products} />}
          >
            <Route
              path="all"
              element={<All addToCart={addToCart} products={products} />}
            />
            <Route
              path="mens-clothing"
              element={<Mens addToCart={addToCart} products={products} />}
            />
            <Route
              path="womens-clothing"
              element={<Womens addToCart={addToCart} products={products} />}
            />
            <Route
              path="electronics"
              element={
                <Electronics addToCart={addToCart} products={products} />
              }
            />
            <Route
              path="jewelery"
              element={<Jewelery addToCart={addToCart} products={products} />}
            />
          </Route>

          <Route
            path="/products"
            element={<ProductList products={products} addToCart={addToCart} />}
          />
          <Route
            exact
            path="/products/:id"
            element={
              <ProductDescription searchResults={searchResults} products={products} addToCart={addToCart} />
            }
          />

          <Route
            path="/checkout"
            element={
              <Checkout cartItems={cartItems} removeFromCart={removeFromCart} />
            }
          />
          <Route
            path="/payment"
            element={<PaymentPage cartItems={cartItems} />}
          />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
