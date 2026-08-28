import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body.js";

import "./nflix.css";



const App = () => (
  <Body />
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);