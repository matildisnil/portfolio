import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/system';
import Navbar from './components/Navbar';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Introduction from './sections/Introduction';
import Footer from './sections/Footer';
// import Contact2 from "./sections/Contact2"
// import ProjectsTimeline from "./sections/ProjectsTimeline";
// import Contact from "./sections/Contact";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar position="sticky" />
      <Container className="content-container">
        <Introduction />
        <Skills />
        <Projects />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
