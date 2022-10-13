import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  pink, teal, cyan, blueGrey,
} from '@mui/material/colors';
import App from './App';

const theme = createTheme({
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
      default: '#e1f2f7',
    },
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>

  </React.StrictMode>,
);
