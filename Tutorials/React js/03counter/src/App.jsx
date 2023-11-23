import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCount(count + 1)
  }

  const removeValue = () =>{
    setCounter(count -1)
  }

  return (
    <>
      <h1>Counter</h1>
      <h3>Add Value is here: {count} </h3>
      <h3>Subtract Value is here: {counter} </h3>
      <button onClick={addValue}>Add Value: {count}</button>
      <br />
      <button onClick={removeValue}>Subtract Value: {counter}</button>
    </>
  );
}

export default App;
