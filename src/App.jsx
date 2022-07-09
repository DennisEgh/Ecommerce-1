import React from 'react';
import Nav from "./components/nav"
import Landing from "./components/landing";
import Highlights from "./components/highlights"
import Featured from './components/Featured';


const App = () => {
    return (
        <div>
            <Nav />
            <Landing />
            <Highlights />
            <Featured />
        </div>
    );
}

export default App;
