import { useState } from "react";
import "../App.css";
// Import components

function StateProps() {
  // Write Javascript Here
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  const incrementer = () => {
    setCounter((pre) => pre + 1);
  };

  const toggleElement = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div>
      <h1 className={toggle ? "active" : ""}>Hello React</h1>
      <h2>Counter {counter}</h2>
      <button className="btn btn-primary" onClick={incrementer}>
        Click
      </button>
      <button className="btn btn-warning" onClick={toggleElement}>
        Toggle
      </button>
    </div>
  );
}

export default StateProps;
