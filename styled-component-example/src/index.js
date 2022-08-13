import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const darkTheme = {
  textColor: "whitesmoke",
  backGroundColor: "#111"
}

const lightTheme = {
  textColor: "#111",
  backGroundColor: "whitesmoke"
}

const currentTheme = (Math.round(Math.random()) === 1) ? darkTheme : lightTheme;

root.render(
  <React.StrictMode>
    <ThemeProvider theme={currentTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
