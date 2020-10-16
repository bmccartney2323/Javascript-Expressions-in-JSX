import React from "react";
import ReactDOM from "react-dom";

const first = "Joe";
const last = "Smith";
const luckyNumber = 10;
ReactDOM.render(
  <div>
    <h1>Hello {first} {last}!</h1>
    <p> Your lucky number is {Math.floor(Math.random() * 10)} </p>
  </div>,
  document.getElementById("root")
);
