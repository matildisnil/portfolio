import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/system';
import Navbar from './components/Navbar';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Introduction from './sections/Introduction';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar position="sticky" />
      <Container className="content-container">
        <Introduction />
        <Skills />
        <Projects />
        <Contact />
      </Container>
    </div>
  );
}

export default App;
