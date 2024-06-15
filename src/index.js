import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import App from './contextapi/function/App'
import { store } from './contextapi/function/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <store.Provider value={{
  //   counter:400
  // }}>
  //   <App />
  // </store.Provider>
);
