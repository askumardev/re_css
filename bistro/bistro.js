import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./bistro.css";

const dishes = [
  { id: 1, name: "Mushroom Risotto", price: "$14", details: "Creamy arborio rice with wild mushrooms." },
  { id: 2, name: "Grilled Veggie Salad", price: "$12", details: "Charred zucchini, peppers, and balsamic greens." },
  { id: 3, name: "Lemon Herb Chicken", price: "$16", details: "Roasted chicken with lemon, thyme, and garlic." },
];

const Home = () => (
  <section className="hero-section">
    <h1>Welcome to Bistro Sample</h1>
    <p>Explore a simple React sample app with routing, menu cards, and responsive styling.</p>
    <div className="home-actions">
      <Link className="primary-btn" to="/menu">View Menu</Link>
      <Link className="secondary-btn" to="/contact">Contact</Link>
    </div>
  </section>
);

const Menu = () => (
  <section className="menu-section">
    <h2>Today's Menu</h2>
    <div className="dish-grid">
      {dishes.map((dish) => (
        <article key={dish.id} className="dish-card">
          <h3>{dish.name}</h3>
          <p>{dish.details}</p>
          <span className="price">{dish.price}</span>
        </article>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section className="contact-section">
    <h2>Contact Bistro</h2>
    <p>
      Have questions? Send us a message and we will help you get started with the sample app.
    </p>
    <div className="contact-card">
      <p>Email: hello@bistrosample.dev</p>
      <p>Phone: +1 (555) 123-4567</p>
    </div>
  </section>
);

const App = () => (
  <Router>
    <div className="layout">
      <header className="topbar">
        <Link to="/" className="brand">Bistro Sample</Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="footer">
        <span>Built as a second sample project in the repo.</span>
      </footer>
    </div>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
