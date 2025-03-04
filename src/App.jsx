import Display from './components/display';
import './App.css';
import Button from './components/button';
import React, { useState } from 'react';


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



return(
  <div className="app">
    <Display value={displayValue}/>
    <div className="buttons">
      <Button label="1" whenClicked={() => handleClick('1')} />
      <Button label="2" whenClicked={() => handleClick('2')} />
      <Button label="3" whenClicked={() => handleClick('3')} />
      <Button label="4" whenClicked={() => handleClick('4')} />
      <Button label="5" whenClicked={() => handleClick('5')} />
      <Button label="6" whenClicked={() => handleClick('6')} />
      <Button label="7" whenClicked={() => handleClick('7')} />
      <Button label="8" whenClicked={() => handleClick('8')} />
      <Button label="9" whenClicked={() => handleClick('9')} />
      <Button label="0" whenClicked={() => handleClick('0')} />

      <Button label="+" whenClicked={() => handleClick('+')} />
      <Button label="-" whenClicked={() => handleClick('-')} />
      <Button label="*" whenClicked={() => handleClick('*')} />
      <Button label="/" whenClicked={() => handleClick('/')} />

      <Button label="=" whenClicked={() => calculateResult()} />

      <Button label="CE" whenClicked={() => handleClearEntry()} />
      <Button label="AC" whenClicked={() => handleAllClear()} />
    </div>
  </div>
  );
}

export default App


