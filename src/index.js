import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';
import './styles/App.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Updated API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
