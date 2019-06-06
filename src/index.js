// import React, { useState } from "react";

import React from "react";
import ReactDOM from "react-dom";

import Buttons from "./buttons";
import Input from "./input";

import "./styles/main.scss";

const Calculator = () => {
  const [input, addInput] = React.useState("");

  const handleClick = e => {
    if (e === "=") {
      console.log(e);
    } else {
      addInput(input.concat(e));
    }
  };

  const handleOtherButtons = e => {
    if (e === "AC") {
      addInput("");
    } else if (e === "+/-") {
      addInput(input * -1);
    } else if (e === "%") {
      addInput(input / 100);
    } else {
      console.log("error");
    }
  };

  return (
    <div className="container">
      <Input input={input} />
      <Buttons
        handleClick={handleClick}
        handleOtherButtons={handleOtherButtons}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Calculator />, rootElement);
