import React, { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Calculator from './components/Calculator/Calculator';
import Modal from './components/UI/Modal';
import HistoryContext from './store/history-context';

function App() {
  const [mathExpressions, setMathExpressions] = useState<any>([]);

  const addElementHandler =  (mathExpression : String) => {
    if(mathExpression){
      setMathExpressions([...mathExpressions, mathExpression]);
    }
  }

  const historyContext = {
    items: mathExpressions,
    addItem: addElementHandler

  }

  return (
    <HistoryContext.Provider value={historyContext}>
      <Header/>
      <Calculator onAddHandler={addElementHandler}/>
    </HistoryContext.Provider>
  );
}

export default App;
