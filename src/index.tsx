import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock/clock';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Sample from './sample/sample';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <React.StrictMode>
    <Sample />
    <Clock></Clock>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
