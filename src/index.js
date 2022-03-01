import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createTheme} from "@mui/material";
import {orange, pink, grey} from "@mui/material/colors";
import {ThemeProvider} from "@emotion/react";

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';


const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette:{
    mode: 'dark',
    primary: pink,
    secondary: grey
  }
});

ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
