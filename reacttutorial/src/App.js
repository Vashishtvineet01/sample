import { useState } from 'react';
import './App.css';

// function App() {

  const App = () => {
      const[num,setNum] = useState(0);
    
    // const incrementNum = () => {
    //   if(num<10)
    //   setNum(num +1, );
    // };

    // const decrementNum = ()=> {
    //   if(num > 0){
    //     setNum(num -1);
    //   }
    // }
   
      const incrementNum = (operation) => {
        if(operation === "increment"){
          setNum(num+1);
        }
        else{
          setNum(num-1)
        }
      }
    
    return (
      <>
    <div className="div_main">
      <div className="div_center">
      <h1> {num} </h1> 
        <div className='btn_div'>
        <button onClick={() => incrementNum("increment")}> Increment </button>
        <button onClick={() => incrementNum("decrement")} > Decrement </button>
        
        {/* <button onClick={incrementNum}> Decrement </button>   */}
       </div>
       
      </div>
    </div>
    </>
  );
}
// }

export default App;