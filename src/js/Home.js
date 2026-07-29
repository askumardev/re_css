import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home_div">
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">React learning workspace</p>
        <h1>Build and practice React apps with confidence</h1>
        <p className="hero-text">
          This project is configured for learning React using Create React App and
          building small practice apps like the foodora sample. Use the quick
          commands below to launch the main app or the sample project.
        </p>
        <div className="hero-buttons">
          <Link className="button primary" to="/">
            Open main app
          </Link>
          <a className="button secondary" href="http://localhost:5000" target="_blank" rel="noreferrer">
            Open foodora sample
          </a>
        </div>
      </div>
      <div className="hero-card">
        <h2>Quick start</h2>
        <div className="code-block">
          <code>npm install</code>
          <code>npm start</code>
          <code>npm run foodora</code>
        </div>
      </div>
    </section>

    <section className="features">
      <div className="feature-card">
        <h3>Main React app</h3>
        <p>Practice routing, components, hooks, and state using the CRA app.</p>
      </div>
      <div className="feature-card">
        <h3>Foodora sample</h3>
        <p>Explore a real sample project with async data, routing, and Redux.</p>
      </div>
      <div className="feature-card">
        <h3>Practice demos</h3>
        <p>Keep HTML/CSS/JS demos in <code>practice/</code> for quick experiments.</p>
      </div>
    </section>
  </div>
);

export default Home;
