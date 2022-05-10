import { useState } from "react";
import "../App.css";
import Nav from "./Nav";
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
    <div>
      <h1 className={toggle ? "active" : ""}>Hello React</h1>
      <h2>Counter {counter}</h2>
      <button className="btn btn-primary" onClick={incrementer}>
        Click
      </button>
      <button className="btn btn-warning" onClick={toggler}>
        Toggle
      </button>
      <Nav />
    </div>
  );
}

export default StateProps;
