// import React, { useState } from "react";

import React from "react";
import ReactDOM from "react-dom";

import Buttons from "./buttons";
import Input from "./input";

import "./styles/main.scss";

const Calculator = () => {
  // const [input, addInput] = useState("");

  const [input, addInput] = React.useState([]);

  const ops = [
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    ["/", "*", "-", "+", "="],
    ["AC", "+/-", "%"]
  ];

  const handleClick = e => {
    addInput([...input, e]);
  };

  const renderButtons = () => {
    return ops.map(row => {
      return (
        <div className="digit">
          {row.map(digit => {
            return digit;
          })}
        </div>
      );
    });
  };

  return (
    <div className="container">
      <Input input={input} />
      <Buttons handleClick={handleClick} renderButtons={renderButtons()} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Calculator />, rootElement);
