import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./demo.css";

function Header() {
  return (
    <div>
      <header>
        <h1>React Essentials</h1>
        <img src="./atom.png" alt="React Atom Logo" />
        <p>
          Fundamental React concepts you will need for almost any app you are
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