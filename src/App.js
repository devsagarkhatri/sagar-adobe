// App.js

import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Education from "./Education";

function App() {
  return (
    <div>
      <div class="navbar">
        <a>
          <Link to="/">Home</Link>
        </a>
        <a>
          <Link to="/about">About</Link>
        </a>
        <a>
          <Link to="/education">Education</Link>
        </a>
      </div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
