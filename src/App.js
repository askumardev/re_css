import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/main.css';
import Home from './js/Home';
import Counter from './js/Counter';
import Calculator from './js/Calculator';
import Login from './js/Login';

const App = () => {
  return (
    
    <Router> 
      <div className="App">           
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;




// // import React from "react";
// // import { useState } from "react";
// // //import React, { Component } from "react";

// // import Home from './js/Home';
// // import Form from './js/Form';
// // import Counter from './js/Counter';
// // import './styles/main.css';
// // import  myDefaultFunction  from './js/utils1.js';
// // import myDefaultFun from './js/defaultfunction.js';
// // import arrayFun from './js/array.js';
// // import promptFun from './js/prompt.js';
// // //import SampleContainer from './components/sample.js'

// // myDefaultFunction();
// // myDefaultFun("param1", "param2");
// // arrayFun();
// // promptFun();

// // console.log('hello world from app.js');
// // let msg = "some msg";
// // let userMessage = "some user msg";
// // const constMsg = "some const msg"; // cannot update values

// // console.log(msg);
// // msg = "new msg";
// // console.log(msg);
// // console.log(userMessage);
// // console.log(constMsg);


// // function App() {
// //   const [count, setCount] = useState(0);
// //   // <SampleContainer />
// //   return (
// //     <div className="main_div">
// //       <h1>Hello React!...</h1>      
// //       // <sub> from App.js</sub>
// //       // <Home />
// //       // <Form />
// //       // <Counter />
// //     </div>
// //   );
// // }

// // export default App;
