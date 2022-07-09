import React from 'react';
import Nav from "./components/nav"
import Landing from "./components/landing";
import Highlights from "./components/highlights";
import Featured from './components/Featured';
import Discounted from './components/Discounted';
import Explore from './components/Explore';
import Footer from './components/Footer'


const App = () => {
    return (
        <div>
            <Nav />
            <Landing />
            <Highlights />
            <Featured />
            <Discounted />
            <Explore />
            <Footer />
        </div>
    );
}

export default App;
