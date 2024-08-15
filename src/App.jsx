/* eslint-disable no-unused-vars */
import React from "react";
import { Navbar, StarsCanvas, Hero, Skills, Footer, Experience, Education, Feedbacks, Works, Certificat, Contact } from "./components";

function App() {
    return (
        <>
            <div>
                <StarsCanvas />
            </div>
            <div>
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
