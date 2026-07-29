import React from 'react';
import ReactDOM from 'react-dom/client';

// const parent = React.createElement("div", {id: "parent"}, React.createElement(
//   "div", {id: "child"}, React.createElement("h3", {}, "I am a  div here")
// ));

// const heading = React.createElement("h2", {id: "heading"}, "Hello from React");
// const root1 = ReactDOM.createRoot(document.getElementById("root1"));
// //root1.render(parent);
// root1.render(heading);

// const jsxHeading = <h1 id="heading">Sample JSX code</h1>;
// const root1 = ReactDOM.createRoot(document.getElementById("root1"));
// root1.render(jsxHeading);
const Title = () => (<h2 id="heading" className="heading">Sample Title as Component</h2>)
const title = (<h2 id="heading1" className="heading1">Sample Title as react element</h2>);
const data = 1000;

const HeadingComponent1 = () => {
  return <h2 className="funComp1" tabIndex="5">Sample functional component1</h2>;
};
const fc1 = ReactDOM.createRoot(document.getElementById("fc1"));
fc1.render(<HeadingComponent1 />);

// <Title /> ,  {Title()}  and <Title></Title> are same

const HeadingComponent2 = () => (
  <div id="container">
    <Title />
    {Title()}
    <tt>{title}</tt>
    {data}
    <h2 className="funComp2">Sample functional component2</h2>
  </div>
);
const fc2 = ReactDOM.createRoot(document.getElementById("fc2"));
fc2.render(<HeadingComponent2 />);
