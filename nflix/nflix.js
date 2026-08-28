import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./nflix.css";



const App = () => (
  <Router>
    <div className="layout">
      <header className="topbar">
        <Link to="/" className="brand">NFlix</Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      {/* <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main> */}

      <footer className="footer">
      </footer>
    </div>
  </Router>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);