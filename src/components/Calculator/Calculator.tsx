import React, { useEffect, useState } from "react";
import classes from "./Calculator.module.css";
import CalculatorButtons from "./CalculatorButtons";
import Display from "./Display";


interface CalculatorProps{
  onAddHandler: Function
}
const Calculator = (props : CalculatorProps) => {
    let initialDisplayValue = localStorage.getItem('currentExpression') || '';

    if(localStorage.getItem('currentExpression')==="Error!"){
      initialDisplayValue="";
    }

    const [displayContent, setDisplayContent] = useState(initialDisplayValue);

    const calculateExpression = () => {
      let result;
      try{
         // eslint-disable-next-line no-eval
         result = eval(displayContent).toFixed(3);
      }
      catch(error) {
        console.log("No chyba nie");
        setDisplayContent("Error!");
      }
      return result;
    }

    const onClickButton = (value : String) => {
      if(value === '='){
        const displayedValue = calculateExpression().toString();
        const displayHistory = displayContent + value + displayedValue;
        props.onAddHandler(displayHistory);
        setDisplayContent(displayedValue);
      }else{
        setDisplayContent(displayContent + value);
      }
    }

    useEffect(() => {
      localStorage.setItem('currentExpression', displayContent);
    }, [displayContent])

  return <div className={classes.calculator}>
      <Display mathExpression={displayContent}/>
      <CalculatorButtons onButtonCalculatorClick={onClickButton}/>
  </div>;
};

export default Calculator;
