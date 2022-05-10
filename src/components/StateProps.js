import "../App.css";
// Import components
import Nav from "./Nav";
import Tweets from "./Tweets";

function StateProps() {
  // Write Javascript Here

  return (
    <div>
      <h1>Hello React</h1>
      <div className="home">
        <Nav />
        <Tweets />
      </div>
    </div>
  );
}

export default StateProps;
