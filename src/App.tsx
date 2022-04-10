import React, {useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Calculator from './components/Calculator/Calculator';
import HistoryContext from './store/history-context';

function App() {
  const initalValueOfMathExpression = localStorage.getItem("history") || [];
  const [mathExpressions, setMathExpressions] = useState<any>(initalValueOfMathExpression.toString().split(','));

  const addElementHandler =  (mathExpression : String) => {
    if(mathExpression){
      setMathExpressions([...mathExpressions, mathExpression]);
    }
  }

  const deleteElementHandler = (exp: String) => {
    const response = mathExpressions.filter((expression : String) => expression !== exp);

    setMathExpressions(response);
  };

  const historyContext = {
    items: mathExpressions,
    addItem: addElementHandler,
    deleteItem: deleteElementHandler
  }

  useEffect(() => {
    // Update the document title using the browser API
    localStorage.setItem("history", mathExpressions);
  }, [mathExpressions]);

  return (
    <HistoryContext.Provider value={historyContext}>
      <Header/>
      <Calculator onAddHandler={addElementHandler}/>
    </HistoryContext.Provider>
  );
}

export default App;
