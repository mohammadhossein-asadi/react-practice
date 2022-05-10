import { useState } from "react";
import "../App.css";
import Nav from "./Nav";
import Video from "./Video";
// Import components

function StateProps() {
  // Write Javascript Here
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  const incrementer = () => {
    setCounter((pre) => pre + 1);
  };

  const toggler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="App">
      <h1>Hello React</h1>
      <button onClick={incrementer}>Incrementer</button>
      <h2>{counter}</h2>
    </div>
  );
}

export default StateProps;
