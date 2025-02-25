import Display from './components/display';
// import './App.css';
import Button from './components/button';
import React, { useState } from 'react';


function App () {
  const [displayValue, setDisplayValue] = useState('0');

  const handleClick = (buttonText) => {
    setDisplayValue((prev) =>
      prev === '0' ? buttonText : prev + buttonText
    );
  };

  const calculateResult = () => {
    try {
      setDisplayValue(eval(displayValue));
    } catch (error) {
      setDisplayValue("error");
    }
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
    </div>
  </div>
  );
}

export default App


