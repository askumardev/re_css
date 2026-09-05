import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./demo.css";
import img from "./images/atom.png";
import { CORE_CONCEPTS } from "./data.js";

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
        <img src={img} alt="React Atom Logo" />
        <p>
          {desc} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </div>
  );
}

// function CoreConcept(props) {
//   return (
//     <li>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

function CoreConcept({ title, description }) {
  return (
    <li>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />

      <main>
        <section>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);