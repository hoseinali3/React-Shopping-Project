import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import './Modal.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ShoppingContext } from './Components/Context/ShoppingContext';
import { FavoriteContext } from './Components/Context/FavoriteContext';
import { SnackbarProvider } from 'notistack';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <SnackbarProvider maxSnack={3}>
      <ShoppingContext>
        <FavoriteContext>
          <App />
        </FavoriteContext>
      </ShoppingContext>
    </SnackbarProvider>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
