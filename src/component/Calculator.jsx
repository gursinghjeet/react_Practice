// src/Calculator.js
import React, { useState } from 'react';
import './Calculator.css'; // Import the CSS file

const Calculator = () => {
  const [input, setInput] = useState('');
  
  // Handle button click
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Handle clear button
  const handleClear = () => {
    setInput('');
  };

  // Handle calculate result
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="calculator-buttons">
        <button className="button clear" onClick={handleClear}>C</button>
        <button className="button" onClick={() => handleClick('/')}>/</button>
        <button className="button" onClick={() => handleClick('*')}>*</button>
        <button className="button" onClick={() => handleClick('-')}>-</button>
        <button className="button" onClick={() => handleClick('7')}>7</button>
        <button className="button" onClick={() => handleClick('8')}>8</button>
        <button className="button" onClick={() => handleClick('9')}>9</button>
        <button className="button" onClick={() => handleClick('+')}>+</button>
        <button className="button" onClick={() => handleClick('4')}>4</button>
        <button className="button" onClick={() => handleClick('5')}>5</button>
        <button className="button" onClick={() => handleClick('6')}>6</button>
        <button className="button" onClick={() => handleClick('.')}>.</button>
        <button className="button" onClick={() => handleClick('1')}>1</button>
        <button className="button" onClick={() => handleClick('2')}>2</button>
        <button className="button" onClick={() => handleClick('3')}>3</button>
        <button className="button" onClick={() => handleClick('0')}>0</button>
        <button className="button" onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
