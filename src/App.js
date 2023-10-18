import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/Main-Content/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
  const [products, setProducts] = useState([]); /* ALL PRODUCTS */
  const [selectedCategory, setSelectedCategory] =
    useState(""); /* CATEGORY STATE */
  const [cartItems, setCartItems] = useState([]); /* CART ITEMS STATE */
  /* FUCTION TO ADD ITEMS TO CART */
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  /* FUNCTION TO REMVOE ITEMS FROM CART */

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };
  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

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
  return (
    <div className="App">
      <Header
        removeFromCart={removeFromCart}
        cartItems={cartItems}
        setSelectedCategory={setSelectedCategory}
      />

      <MainContent addToCart={addToCart} products={products} />

      <Footer />
    </div>
  );
}

export default App;
