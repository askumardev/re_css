import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./demo.css";

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const arrDesc  = ["Sample", "Core", "Crucial", 
    "Important", "Essential", "Fundamental", "Necessary", 
    "Required", "Vital", "Critical"];
    const desc = arrDesc[genRandomInt(3)];
  return (
    <div>
      <header>
        <h1>React Essentials</h1>
        <img src="./atom.png" alt="React Atom Logo" />
        <p>
          {desc} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />

      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);