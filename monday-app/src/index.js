import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();










// // click counter
// let counter = 0

// window.onload = () => {
//   // create new button element
//   let newBtn = document.createElement("button")
//   newBtn.id = "my-button-2"
//   newBtn.innerHTML = "Click Me!"
//   newBtn.addEventListener("click", onButtonClicked)

//   // create new paragraph element
//   let newLabel = document.createElement("p")
//   newLabel.id = "my-output-2"
//   newLabel.innerHTML = getLabelText()

//   // obtain root node
//   let rootElem = document.getElementById("root")
//   rootElem.appendChild(newBtn)
//   rootElem.appendChild(newLabel)
// }


// const onButtonClicked = () => {
//   // increment click counter
//   counter++
//   console.log(counter)

//   // update our label display
//   let labelElem = document.getElementById("my-output-2")
//   labelElem.innerHTML = getLabelText()
// }


// const getLabelText = () => {
//   return `You clicked the button ${counter} times.`
// }