import React, { useEffect, useState } from "react";
import classes from "./Calculator.module.css";
import CalculatorButtons from "./CalculatorButtons";
import Display from "./Display";

const Calculator = () => {
    const initialDisplayValue = localStorage.getItem('currentExpression') || '';
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
