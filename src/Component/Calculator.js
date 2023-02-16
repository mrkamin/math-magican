import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../Logic/calculate';

const Calculator = () => {
  const [calcData, setCalcData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const calculateHandler = (e) => {
    const buttonName = e.target.name;

    return setCalcData((obj) => calculate(obj, buttonName));
  };

  const { total, next, operation } = calcData;
  const outputNumber = `${total}${operation}${next}`.replace(/null/g, '').replace(/undefined/g, '');

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="current-operand">{outputNumber === '' ? '0' : outputNumber}</div>
      </div>
      <button type="button" name="AC" onClick={calculateHandler}>AC</button>
      <button type="button" name="+/-" onClick={calculateHandler}>+/-</button>
      <button type="button" name="%" onClick={calculateHandler}>%</button>
      <button type="button" className="opration-symbol" name="&divide;" onClick={calculateHandler}>&divide;</button>
      <button type="button" name="7" onClick={calculateHandler}>7</button>
      <button type="button" name="8" onClick={calculateHandler}>8</button>
      <button type="button" name="9" onClick={calculateHandler}>9</button>
      <button type="button" className="opration-symbol" name="*" onClick={calculateHandler}>*</button>
      <button type="button" name="4" onClick={calculateHandler}>4</button>
      <button type="button" name="5" onClick={calculateHandler}>5</button>
      <button type="button" name="6" onClick={calculateHandler}>6</button>
      <button type="button" className="opration-symbol" name="-" onClick={calculateHandler}>-</button>
      <button type="button" name="1" onClick={calculateHandler}>1</button>
      <button type="button" name="2" onClick={calculateHandler}>2</button>
      <button type="button" name="3" onClick={calculateHandler}>3</button>
      <button type="button" className="opration-symbol" name="+" onClick={calculateHandler}>+</button>
      <button type="button" className="span-two" name="0" onClick={calculateHandler}>0</button>
      <button type="button" name="." onClick={calculateHandler}>.</button>
      <button type="button" className="opration-symbol" name="=" onClick={calculateHandler}>=</button>
    </div>
  );
};

export default Calculator;
