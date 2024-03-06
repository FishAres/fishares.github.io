import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FishyHero from "./components/FishyHero";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <Navbar />
      <FishyHero />
      <Resume />
    </>
  );
}

export default App;
