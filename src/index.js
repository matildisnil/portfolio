import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { pink, teal, purple, cyan } from '@mui/material/colors';

const theme = createTheme({
  /*   palette: {
      primary: black,
      secondary: teal,
  } */
  palette: {
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
      default: "#e1f2f7"
    },
/*     button2: {
      light: "#82E0AA",
      main: "#fb6376",
      dark: "#2ECC71",
      contrastText: '#fff',
    },
    button3: {
      light: "#82E0AA",
      main: "#7d5ba6",
      dark: "#2ECC71",
      contrastText: '#fff',
    },
    button1: {
      light: "#82E0AA",
      main: "#276fbf",
      dark: "#2ECC71",
      contrastText: '#fff',
    } */
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
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>

  </React.StrictMode>
);
