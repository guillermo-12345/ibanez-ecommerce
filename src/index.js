import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import reportWebVitals from './reportWebVitals';
import 'bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/cartContext';

const firebaseConfig = {
  apiKey: "AIzaSyC5beyTSvAbi0xXN65w6BxDNwfBqzkKnQg",
  authDomain: "ibanez-ecommerce.firebaseapp.com",
  projectId: "ibanez-ecommerce",
  storageBucket: "ibanez-ecommerce.appspot.com",
  messagingSenderId: "341377405483",
  appId: "1:341377405483:web:e25d04a85437cd9806906e"
};

initializeApp(firebaseConfig);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <CartProvider>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </CartProvider>
);


reportWebVitals();
