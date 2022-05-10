// Import components
import Tweet from "./Tweet";

const Tweets = (props) => {
  // Write Javascript Here

  const tweets = [
    {
      name: "Mohammadhossein",
      tweet: "React",
    },
    {
      name: "Traversy media",
      tweet: "Whats up guys , Im out taking a break",
    },
    {
      name: "WebDevSimplified",
      tweet: "hey guys Im simplified the web ? guys hello , whrer is everybody",
    },
  ];

  return (
    <section>
      {tweets.map((tweet) => (
        <Tweet name={tweet.name} tweet={tweet.tweet} />
      ))}
    </section>
  );
};

export default Tweets;
