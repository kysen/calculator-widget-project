import React from "react";

const Buttons = props => {
  const nums = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
  const ops = ["/", "*", "-", "+", "="];
  const oth = ["AC", "+/-", "%"];

  const digitWrapper = (clas, arr) => {
    return (
      <div className={`btns ${clas}s`}>
        {arr.map(digit => {
          return <div className={`btn ${clas} btn-${digit}`}>{digit}</div>;
        })}
      </div>
    );
  };

  const numWrapper = (clas, arr) => {
    return (
      <div className={`btns num-btns`}>
        {arr.map(digit => {
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

  return (
    <div className="Buttons">
      <div className="left">
        {digitWrapper("oth-btn", oth)}
        {numWrapper("num-btn", nums)}
      </div>
      <div className="right">{digitWrapper("op-btn", ops)}</div>
    </div>
  );
};

export default Buttons;
