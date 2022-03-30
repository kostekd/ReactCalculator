import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Calculator from './components/Calculator/Calculator';

function App() {
  return (
    <Fragment>
      <Header/>
      <Calculator/>
    </Fragment>
  );
}

export default App;
