import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UsersComponent from './Users';
import Dogs from "./Dogs";
import reportWebVitals from './reportWebVitals';
import Books from "./Books";
// react strict mode will render twice for development environment, be careful of double requests
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <div>
        <UsersComponent />
        <Dogs />
        <Books />
    </div>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
