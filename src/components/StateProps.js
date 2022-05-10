import { useState } from "react";
import "../App.css";
// Import components

function StateProps() {
  // Write Javascript Here
  const [counter, setCounter] = useState(0);

  const incrementer = () => {};

  return (
    <div>
      <h1>Hello React</h1>
      <h2>Counter {counter}</h2>
      <button onClick={incrementer}>Click</button>
    </div>
  );
}

export default StateProps;
