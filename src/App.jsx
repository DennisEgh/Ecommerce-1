import React, { useState, useEffect } from "react";
import Nav from "./components/nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Books from "./components/Books";
import { books } from "./data";
import Bookinfo from "./pages/bookinfo";
import Cart from "./pages/cart";

const App = () => {
  const [cart, setCart] = useState([]);

  function addToCart(book){
    setCart([...cart, book])
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" exact element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={<Bookinfo books={books} addToCart={addToCart} cart={cart}/>}
          />
          <Route path="/cart" element={<Cart books={books} cart={cart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
