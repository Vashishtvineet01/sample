import { useState } from 'react';
import './App.css';

// function App() {

  const App = () => {

    const [result, setResult] = useState("");
    const [current, setCurrent] = useState("");
    const [prevoius, setPrevoius] = useState("");
    const [operations, setOperations] = useState("");

   
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }
  const clear = () => {
    setResult("");
  }

  const numbers = ["9","8","7","6","5","4","3","2","1","0"];

   const backspace =() => {
    setResult(result.slice(0,result.length -1));
   }
  
   const equalHandler = () => {
    let value = compute();
    if (value === undefined || value == null) return;
    setCurrent(value);
    setPrevoius("");
    setOperations("");
  };
  const compute = () => {
    let result;
    let previousNumber = parseFloat(prevoius);
    let currentNumber = parseFloat(current);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;
    switch (operations) {
      case "÷":
        result = previousNumber / currentNumber;
        break;
      case "x":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:
        return;
    }
    return result;
  };

     
    // const equalizer = () => {
    //   let value = compute();
    //   if (value === undefined || value == null) return;
    //   setCurrent(value);
    //   setPrevoius("");
    //   setOperations("");
    // };
    // const compute = () => {
    //   let result;
    //   let previousNumber = parseFloat(prevoius);
    //   let currentNumber = parseFloat(current);
    //   if (isNaN(previousNumber) || isNaN(currentNumber)) return;
    //   switch (operations) {
    //     case "+":
    //       result = previousNumber + currentNumber;
    //       break;
    //   }
    //   return result;
    // };  
    
  
  //==

    // const results = () => {
    //   setResult(eval(result).toString());
    // }

//   function anonymous() {
//     // return 2+4
// }

  return ( 
    <>
      <div className='container'>
          <form>
          <h1> Calculator </h1>
            <input type="text" value= {result} />
          </form>
          <div className='keypad'>
            <button onClick={clear} id="clear"> Clear </button> 
            <button onClick={backspace} id= "backspace"> C </button>

             <button  equals onClick= {equalHandler}> = </button> 
             <button name = '*' onClick={handleClick}> *</button>
            <button name = '+' onClick={handleClick}> + </button>
            {numbers.map(item => < button  key={item} name= {item} onClick= {handleClick} > {item} </button> )}
          </div>
      </div>
    </>
  );
  }
  
export default App;
 
{/* <button name='1' onClick={handleClick}> 1 </button>
<button name='2' onClick={handleClick}> 2 </button>
<button name='3' onClick={handleClick}> 3 </button>
<button name='4' onClick={handleClick}> 4 </button>
<button name='5' onClick={handleClick}> 5 </button>
<button name='6' onClick={handleClick}> 6 </button>
<button name='7' onClick={handleClick}> 7 </button>
<button name='8' onClick={handleClick}> 8 </button>
<button name='9' onClick={handleClick}> 9 </button>  */}