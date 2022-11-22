import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import {
//   pink, teal, cyan, blueGrey,
// } from '@mui/material/colors';
import App from './App';

// const theme = createTheme({
//   palette: {

//   },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 900,
//       mdl: 1104,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
