
import React from 'react';
import Nav from "./components/nav"
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Books from './components/Books';
import { books } from "./data";



const App = () => {
    return (
        <Router>
        <div className='App'>
        <Nav />
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/books" element={<Books books={books} /> } />
        </Routes>
        <Footer />
        </div>
        </Router>
    );
}

export default App;
