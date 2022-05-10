import Tweet from "./Tweet";

const Tweets = ({ username, age }) => (
  <section>
    <h1>{username}</h1>
    <h2>{age}</h2>
    <Tweet />
  </section>
);

export default Tweets;
