import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../Logic/calculate';

const Calculator = () => {
  const [calcNum, setCalcNum] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const calculateHandling = (e) => {
    const buttonName = e.target.name;

    return setCalcNum((obj) => calculate(obj, buttonName));
  };

  const { total, next, operation } = calcNum;
  const outputNumber = `${total}${operation}${next}`.replace(/null/g, '').replace(/undefined/g, '');

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="current-operand">{outputNumber === '' ? '0' : outputNumber}</div>
      </div>
      <button type="button" name="AC" onClick={calculateHandling}>AC</button>
      <button type="button" name="+/-" onClick={calculateHandling}>+/-</button>
      <button type="button" name="%" onClick={calculateHandling}>%</button>
      <button type="button" className="opration-symbol" name="&divide;" onClick={calculateHandling}>&divide;</button>
      <button type="button" name="7" onClick={calculateHandling}>7</button>
      <button type="button" name="8" onClick={calculateHandling}>8</button>
      <button type="button" name="9" onClick={calculateHandling}>9</button>
      <button type="button" className="opration-symbol" name="*" onClick={calculateHandling}>*</button>
      <button type="button" name="4" onClick={calculateHandling}>4</button>
      <button type="button" name="5" onClick={calculateHandling}>5</button>
      <button type="button" name="6" onClick={calculateHandling}>6</button>
      <button type="button" className="opration-symbol" name="-" onClick={calculateHandling}>-</button>
      <button type="button" name="1" onClick={calculateHandling}>1</button>
      <button type="button" name="2" onClick={calculateHandling}>2</button>
      <button type="button" name="3" onClick={calculateHandling}>3</button>
      <button type="button" className="opration-symbol" name="+" onClick={calculateHandling}>+</button>
      <button type="button" className="span-two" name="0" onClick={calculateHandling}>0</button>
      <button type="button" name="." onClick={calculateHandling}>.</button>
      <button type="button" className="opration-symbol" name="=" onClick={calculateHandling}>=</button>
    </div>
  );
};

export default Calculator;
