

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'


library.add(faBars);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <App></App>
  </React.StrictMode>
);