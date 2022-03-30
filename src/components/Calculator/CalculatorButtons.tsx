import React from "react";
import Button from "../UI/Button";
import classes from "./CalculatorButtons.module.css";

const MOCK_BUTTONS_CONTENT = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "x",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
];

interface CalculatorButtonsProps {
  onButtonCalculatorClick: (value: String) => void;
}

const CalculatorButtons = (props: CalculatorButtonsProps) => {

  const onClickHandler = (elementValue: String) => {
      props.onButtonCalculatorClick(elementValue);
  };

  //finish it
  const buttons = MOCK_BUTTONS_CONTENT.map((button) => (
    <Button key={Math.random()} label={button} onButtonClick={onClickHandler} />
  ));
  return <div className={classes.content}>{buttons}</div>;
};

export default CalculatorButtons;
