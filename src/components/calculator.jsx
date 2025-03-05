import React from "react";
import Button from './button';
import Display from './display';
import "./calculator.css";

const Calculator = ({ displayValue, handleClick, calculateResult, handleClearEntry, handleAllClear, handlePercentage }) => {
   
return(
    <div className="calculator">
        <Display value={displayValue} />
        <div className="buttons">
        <div className="button-row row-1">
          <Button label="%" whenClicked={() => handlePercentage()} />
          <Button label="7" whenClicked={() => handleClick("7")} />
          <Button label="8" whenClicked={() => handleClick("8")} />
          <Button label="9" whenClicked={() => handleClick("9")} />
          <Button label="/" whenClicked={() => handleClick("/")} />
        </div>
        
        {/* Second row */}
        <div className="button-row row-2">
          <Button label="CE" whenClicked={() => handleClearEntry()} />
          <Button label="4" whenClicked={() => handleClick("4")} />
          <Button label="5" whenClicked={() => handleClick("5")} />
          <Button label="6" whenClicked={() => handleClick("6")} />
          <Button label="*" whenClicked={() => handleClick("*")} />
        </div>
        
        {/* Third row */}
        <div className="button-row row-3">
          <Button label="AC" whenClicked={() => handleAllClear()} />
          <Button label="1" whenClicked={() => handleClick("1")} />
          <Button label="2" whenClicked={() => handleClick("2")} />
          <Button label="3" whenClicked={() => handleClick("3")} />
          <Button label="-" whenClicked={() => handleClick("-")} />
        </div>
        
        {/* Fourth row */}
        <div className="button-row row-4">
          <Button label="0" whenClicked={() => handleClick("0")} />
          <Button label="00" whenClicked={() => handleClick("00")} />
          <Button label="." whenClicked={() => handleClick(".")} />
          <Button label="=" whenClicked={() => calculateResult()} />
          <Button label="+" whenClicked={() => handleClick("+")} />
            </div>
        </div>  
   </div>
);
}

export default Calculator