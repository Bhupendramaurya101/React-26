import { useState } from 'react'
import './App.css'

function App() {

  let [value, setvalue] = useState(0)
  // let value = 0;

  function increaseVal(){
    value = value + 1;
    setvalue(value);
    console.log(`value increased : ${value} at the time ${Date.now()}`);
  }

  function decreaseVal(){
   value = value - 1;
    setvalue(value);
   console.log(`value decrease : ${value} at the time ${Date.now()}`);
  }

  return (
    <>
      <h1>This is simple Counter Project </h1>
      <h3>counter : {value}</h3>
      <div className="buttons">
        <button onClick={increaseVal}>Increase Value</button>
        <button onClick={decreaseVal}>Decrease Value</button></div>
    </>
  )
}

export default App
