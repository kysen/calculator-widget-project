import React from "react";

const Buttons = props => {
  const nums = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
  const ops = ["/", "*", "-", "+", "="];
  const oth = ["AC", "+/-", "%"];

  const otherButtonWrapper = () => {
    return (
      <div className={`btns oth-btns`}>
        {oth.map(digit => {
          return (
            <div
              onClick={() => {
                props.handleOtherButtons(digit);
              }}
              className={"btn oth-btn"}
            >
              {digit}
            </div>
          );
        })}
      </div>
    );
  };
  const numWrapper = () => {
    return (
      <div className={`btns num-btns`}>
        {nums.map(digit => {
          return (
            <div
              onClick={() => {
                props.handleClick(digit);
              }}
              className={`btn num-btn btn-${digit}`}
            >
              {digit}
            </div>
          );
        })}
      </div>
    );
  };

  const opWrapper = () => {
    return (
      <div className={`btns op-btns`}>
        {ops.map(digit => {
          return (
            <div
              onClick={() => {
                props.handleClick(digit);
              }}
              className={`btn op-btn btn-${digit}`}
            >
              {digit}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="Buttons">
      <div className="left">
        {otherButtonWrapper()}
        {numWrapper()}
      </div>
      <div className="right">{opWrapper()}</div>
    </div>
  );
};

export default Buttons;
