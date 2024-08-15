/* eslint-disable no-unused-vars */
import React from "react";
import {
  Navbar,
  StarsCanvas,
  Hero,
  Skills,
  Footer,
  Experience,
  Education,
  Feedbacks,
  Works,
  Certificat,
  Contact,
} from "./components";
import Cursor from "./cursor/NeonCursor";

function App() {
  return (
    <>
      <div>
        <StarsCanvas />
      </div>
      <div>
        <Cursor />
        <Navbar />
        <Hero />
        <Skills />
        <Education />
        <Experience />
        <Works />
        <Certificat />
        <Feedbacks />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
