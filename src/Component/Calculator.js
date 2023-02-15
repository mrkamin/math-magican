import React from 'react';
import './Calculator.css';
import calculate from '../Logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  calculateHandling = (e) => {
    const buttonName = e.target.name;

    return this.setState((obj) => calculate(obj, buttonName));
  }

  render() {
    const { total, next, operation } = this.state;
    const outputNumber = `${total}${operation}${next}`.replace(/null/g, '');
    const output = outputNumber.replace(/undefined/g, '');

    return (
      <div className="calculator-grid">
        <div className="output">
          <div className="current-operand">{output === '' ? '0' : output}</div>
        </div>
        <button type="button" name="AC" onClick={this.calculateHandling}>AC</button>
        <button type="button" name="+/-" onClick={this.calculateHandling}>+/-</button>
        <button type="button" name="%" onClick={this.calculateHandling}>%</button>
        <button type="button" className="opration-symbol" name="&divide;" onClick={this.calculateHandling}>&divide;</button>
        <button type="button" name="7" onClick={this.calculateHandling}>7</button>
        <button type="button" name="8" onClick={this.calculateHandling}>8</button>
        <button type="button" name="9" onClick={this.calculateHandling}>9</button>
        <button type="button" className="opration-symbol" name="*" onClick={this.calculateHandling}>*</button>
        <button type="button" name="4" onClick={this.calculateHandling}>4</button>
        <button type="button" name="5" onClick={this.calculateHandling}>5</button>
        <button type="button" name="6" onClick={this.calculateHandling}>6</button>
        <button type="button" className="opration-symbol" name="-" onClick={this.calculateHandling}>-</button>
        <button type="button" name="1" onClick={this.calculateHandling}>1</button>
        <button type="button" name="2" onClick={this.calculateHandling}>2</button>
        <button type="button" name="3" onClick={this.calculateHandling}>3</button>
        <button type="button" className="opration-symbol" name="+" onClick={this.calculateHandling}>+</button>
        <button type="button" className="span-two" name="0" onClick={this.calculateHandling}>0</button>
        <button type="button" name="." onClick={this.calculateHandling}>.</button>
        <button type="button" className="opration-symbol" name="=" onClick={this.calculateHandling}>=</button>
      </div>
    );
  }
}

export default Calculator;
