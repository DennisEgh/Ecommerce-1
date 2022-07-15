
import React from 'react';
import Nav from "./components/nav"
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Books from './components/Books';
import { books } from "./data";
import Bookinfo from './pages/bookinfo';
import Cart from './pages/cart';



const App = () => {
    return (
        <Router>
        <div className='App'>
        <Nav />
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/books" exact element={<Books books={books} /> } />
            <Route path="/books/:id" element={<Bookinfo books={books} />} />
            <Route path="/cart" element={<Cart books={books} />} />
        </Routes>
        <Footer />
        </div>
        </Router>
    );
}

export default App;
