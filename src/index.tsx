import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock/clock';
import Greeter from './greeter/greeter';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Sample from './sample/sample';

let globalLuckyNum = 0;

function updateLuckyNum(num: number) {
  console.log('made it here', num)
  globalLuckyNum = num;
  render();
}

function showYoloLevels() {
  if (globalLuckyNum === 24) return <div>Sugoi! your number is 24</div>
  else return <div>Youre lucky number is not the chosen one</div>
}

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <Sample />
      <Clock></Clock>
      <Greeter firstName={'Matias'} lastName={'Schakel'} yoloActivated={updateLuckyNum}></Greeter>
      {showYoloLevels()}
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
