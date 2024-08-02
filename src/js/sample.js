import React from 'react';
import ReactDOM from 'react-dom';

const parent = React.createElement("div", {id: "parent"}, React.createElement(
  "div", {id: "child"}, React.createElement("h3", {}, "I am a  div here")
));

const heading = React.createElement("h2", {id: "heading"}, "Hello from React");
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent);