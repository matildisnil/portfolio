import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import pink from '@mui/material/colors/pink';
import teal from '@mui/material/colors/teal';


import { createTheme } from '@mui/material/styles';

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
