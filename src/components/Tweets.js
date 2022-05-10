// Import components
import Tweet from "./Tweet";

const Tweets = (props) => (
  <section>
    <Tweet username={props.username} age={props.age} />
  </section>
);

export default Tweets;
