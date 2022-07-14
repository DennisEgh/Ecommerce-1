
import React from 'react';
import Nav from "./components/nav"
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Books from './components/Books';
import { books } from "./data";
import Bookinfo from './pages/bookinfo';



const App = () => {
    return (
        <Router>
        <div className='App'>
        <Nav />
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/books" element={<Books books={books} /> } />
            <Route path="/books/1" element={() => <Bookinfo books={books} />} />
        </Routes>
        <Footer />
        </div>
        </Router>
    );
}

export default App;
