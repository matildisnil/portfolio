import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import pink from '@mui/material/colors/pink';
import teal from '@mui/material/colors/teal';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: pink,
      secondary: teal,
  }
  
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>

  </React.StrictMode>
);
