import "./App.css";
import React, { useState } from "react";

const countInitial = () => {
  console.log("Run function");
  return 0;
};

function App() {
  const [count, setCount] = useState(() => countInitial());

  const decrementCount = () => setCount((prevCount) => prevCount - 1);
  const incrementCount = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="main">
      <button className="btn btn-primary" onClick={decrementCount}>
        -
      </button>
      <h3>{count}</h3>
      <button className="btn btn-primary" onClick={incrementCount}>
        +
      </button>
    </div>
  );
}

export default App;
