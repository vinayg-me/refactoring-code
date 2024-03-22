import React from "react";
import "./App.css";


const RefactoredApp = () => {
  const [lastClicked, setLastClicked] = React.useState<undefined|Date>(undefined);
  const [buttonColor, setButtonColor] = React.useState<string>("red");

  const getNextButtonColor = (): "red" | "blue" | "green" => {
    switch (buttonColor) {
      case "red":
        return "blue";
      case "blue":
        return "green";
      case "green":
        return "red";
      default:
        throw new Error("Invalid color");
    }
  };

  const formatLocalDate= () => {
    const browserLanguage = window?.navigator?.language;
    return browserLanguage ? lastClicked?.toLocaleString(browserLanguage) : new Date().toLocaleString()
  }

  const formatACTDate = () => {
    return lastClicked ? lastClicked.toLocaleString('en-US', { timeZone: 'Australia/Darwin' }) : '';
  }
  const onClick = () => {
    const curDate = new Date();
    setLastClicked(curDate)
    setButtonColor(getNextButtonColor())
  }
  return (
    <>
        <div>
          <button
            onClick={onClick}
            style={{ backgroundColor: buttonColor }}
          >
            Click
          </button>
        </div>
        <div className="TimeContainer">
          <div className="TimeItem">
            Local time:{" "}
            {lastClicked !== undefined ? formatLocalDate() : "Never"}
          </div>
          <div className="TimeItem">
            GMT Time:{" "}
            {lastClicked !== undefined ? lastClicked.toUTCString() : "Never"}
          </div>
          <div className="TimeItem">
            ACT Time:{" "}
            {lastClicked !== undefined ? formatACTDate() : "Never"}
          </div>
        </div>
      </>
  )
}

export default RefactoredApp;