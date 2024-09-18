import React from 'react';
import "./index.css";
import Home from "./routes/Home";
import Skills from "./routes/Skills"
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Resume from "../src/components/resumeFile";

import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
