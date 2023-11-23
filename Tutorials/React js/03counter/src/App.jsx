import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1)
  }

  const removeValue = () =>{
    setCount(count -1)
  }

  return (
    <>
      <h1>Counter</h1>
      <h3>Value is here: {count} </h3>
      <button onClick={addValue}>Add Value: {count}</button>
      <br />
      <button onClick={removeValue}>Subtract Value: {count}</button>
    </>
  );
}

export default App;
