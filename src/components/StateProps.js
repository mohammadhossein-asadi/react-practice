import "../App.css";
// Import components
import Nav from "./Nav";
import Tweets from "./Tweets";

function StateProps() {
  // Write Javascript Here
  const name = "Mohammadhossein";
  const age = 20;

  return (
    <div>
      <h1>Hello React</h1>
      <div className="home">
        <Nav />
        <Tweets username={name} age={age} />
      </div>
    </div>
  );
}

export default StateProps;
