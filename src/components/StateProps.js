import "../App.css";
// Import components

function StateProps() {
  // Write Javascript Here
  let counter = 0;

  const incrementer = () => {
    counter += 1;
    console.log(counter);
  };

  return (
    <div>
      <h1>Hello React</h1>
      <h2>Counter {counter}</h2>
      <button onClick={incrementer}>Click</button>
    </div>
  );
}

export default StateProps;
