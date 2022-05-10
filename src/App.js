import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const decrementCount = () => setCount(count - 1);
  const incrementCount = () => setCount(count + 1);

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
