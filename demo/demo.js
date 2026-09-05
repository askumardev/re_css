import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./demo.css";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.js";
import CoreConcept from "./components/CoreConcept.js";
import EmptyCache from "./components/EmptyCache.js";


function App() {
  const [selectedConcept, setSelectedConcept] = useState(0);
  const concept = CORE_CONCEPTS[selectedConcept];

  return (
    <div>
      {/* <EmptyCache /> */}
      <Header />

      <main>
        <section>
          <h2>Core Concepts</h2>
          <ul className="concept-navigation">
            {CORE_CONCEPTS.map((item, index) => (
              <CoreConcept
                key={item.title}
                title={item.title}
                isActive={selectedConcept === index}
                onSelect={() => setSelectedConcept(index)}
              />
            ))}
          </ul>
          <article className="concept-description" aria-live="polite">
            <p>{concept.description}</p>
          </article>
        </section>
     
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);