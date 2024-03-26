import React from "react";
import "./App.css";
import Components from "./components";
const { Navbar, FishyHero, Research, Resume, Blog, Contact } = Components;

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<FishyHero />} />
        <Route path="research" element={<Research />} />
        <Route path="cv" element={<Resume />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
