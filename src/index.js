/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 16/05/2022 - 17:02:09
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 16/05/2022
    * - Author          : 
    * - Modification    : 
**/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { AppProvider } from './Context';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppProvider> 
      <App />
    </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

