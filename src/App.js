import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import {
  pink, teal, cyan, blueGrey,
} from '@mui/material/colors';
import Navbar from './components/Navbar';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Introduction from './sections/Introduction';
import Contact from './sections/Contact';
import ColorModeContext from './components/ColorModeContext';

const getDesignTokens = mode => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: {
          light: '#484848',
          main: '#212121',
          dark: '#000000',
          contrastText: '#fff',
        },
        secondary: {
          light: '#bb4678',
          main: '#870d4c',
          dark: '#550024',
          contrastText: '#fff',
        },
        background: {
          default: '#e1f2f7',
          paper: 'white',
        },
        /*         text: 'black', */
        button1: {
          light: pink[50],
          main: pink[100],
          dark: pink[200],
          contrastText: '#000',
        },
        button2: {
          light: cyan[50],
          main: cyan[100],
          dark: cyan[200],
          contrastText: '#000',
        },
        button3: {
          light: teal[50],
          main: teal[100],
          dark: teal[200],
          contrastText: '#000',
        },
        buttonActiveTech: {
          light: blueGrey[300],
          main: blueGrey[400],
          dark: blueGrey[500],
          contrastText: '#000',
        },
        buttonClearFilters: {
          light: blueGrey[700],
          main: blueGrey[800],
          dark: blueGrey[900],
          contrastText: '#fff',
        },
        buttonTech: {
          light: cyan[700],
          main: cyan[800],
          dark: cyan[900],
          contrastText: '#fff',
        },
      }
      : {
        // palette values for dark mode
        primary: {
          light: pink[700],
          main: pink[800],
          dark: pink[900],
          contrastText: '#fff',
        },
        secondary: {
          light: '#484848',
          main: '#212121',
          dark: '#000000',
          contrastText: '#fff',
        },
        background: {
          default: '#121212',
          paper: '#121212',
        },
        /*         text: 'white', */
        button1: {
          light: pink[200],
          main: pink[300],
          dark: pink[400],
          contrastText: '#000',
        },
        button2: {
          light: cyan[200],
          main: cyan[300],
          dark: cyan[400],
          contrastText: '#000',
        },
        button3: {
          light: teal[200],
          main: teal[300],
          dark: teal[400],
          contrastText: '#000',
        },
        buttonActiveTech: {
          light: blueGrey[300],
          main: blueGrey[400],
          dark: blueGrey[500],
          contrastText: '#000',
        },
        buttonClearFilters: {
          light: blueGrey[700],
          main: blueGrey[800],
          dark: blueGrey[900],
          contrastText: '#fff',
        },
        buttonTech: {
          light: cyan[700],
          main: cyan[800],
          dark: cyan[900],
          contrastText: '#fff',
        },
      }),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      mdl: 1104,
      lg: 1200,
      xl: 1536,
    },
  },
});

// const darkModeTheme = createTheme(getDesignTokens('dark'));

function App() {
  // eslint-disable-next-line no-unused-vars
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <div className="App">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar position="sticky" />
          <Container className="content-container">
            <Introduction />
            <Skills />
            <Projects />
            <Contact />
          </Container>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
