import Display from './components/display';
import './App.css';
import Button from './components/button';


function App () {
  const handleClick = () => {
    console.log("button clicked");
  };

return(
  <div className="app">
    <Display value="0"/>
    <Button label="Click me" whenClicked={handleClick} />
  </div>
  );
}

export default App


