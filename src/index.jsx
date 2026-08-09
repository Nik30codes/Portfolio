import React from "react";
import ReactDOM from "react-dom/client";

import CursorFollower from "./components/CursorFollower";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Background from "./components/Background";
import Contact from "./components/Contact";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CursorFollower />
    <Nav />
    <main>
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Background />
      <Contact />
    </main>
  </React.StrictMode>
);
