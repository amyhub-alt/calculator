import React, { useState } from 'react';
import Calculator from './components/calculator';
import './App.css';
import 'semantic-ui-css/semantic.min.css'


function App () {
  const [displayValue, setDisplayValue] = useState('0');
  const [isResultDisplayed, setIsResultDisplayed] = useState(false); 

  const handleClick = (buttonText) => {
    setDisplayValue((prev) => {
      //if last result is displayed and a number is pressed, start fresh
      if (isResultDisplayed && !["+", "-", "*", "/"].includes(buttonText)) {
        setIsResultDisplayed(false);
        return buttonText; //clears and starts fresh
      }

      //prevent multiple operators in a row
      if (["+", "-", "*", "/"].includes(buttonText) && ["+", "-", "*", "/"].includes(prev.slice(-1))) {
        return prev; //ignore input if last character is also an operator
      }

      //otherwise, just add the button and press to the display
      setIsResultDisplayed(false);
      return prev === '0' ? buttonText : prev + buttonText;
    });
  };

  const calculateResult = () => {
    try {
      setDisplayValue(
        String(Function('"use strict"; return (' + displayValue + ')') ()));
        setIsResultDisplayed(true); //mark that a result was displayed
    } catch (error) {
      setDisplayValue("error");
      setIsResultDisplayed(true); //also mark it as a result
    }
  };


  const handleClearEntry = () => {
    setDisplayValue((prev) => prev.slice(0,-1) || "0");
  };

  const handleAllClear = () => {
    setDisplayValue("0")
  };

  const handlePercentage = () =>{
    setDisplayValue((prev) =>{
      const number =parseFloat(prev);
      return number ? String(number / 100) : prev;
    });
  };


  return(
    <div className="app">
      <Calculator
        displayValue={displayValue}
        handleClick={handleClick}
        calculateResult={calculateResult}
        handleClearEntry={handleClearEntry}
        handleAllClear={handleAllClear}
        handlePercentage={handlePercentage}
      
      />
    </div>
  );
}

export default App


