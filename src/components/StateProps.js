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
    <div>
      <Nav toggle={toggler} />
      <Video number={counter} setToggle={setToggle} />
    </div>
  );
}

export default StateProps;
