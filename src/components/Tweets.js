// Import components
import Tweet from "./Tweet";

const Tweets = (props) => {
  // Write Javascript Here

  const tweets = [
    {
      name: "Mohammadhossein",
      tweet: "Happy Birthday Motahare ðâ¤ðð",
    },
    {
      name: "Motahare",
      tweet: "Yooooooooh Thank youð¥³ð",
    },
    {
      name: "Traversy media",
      tweet: "Whats up guys , Im out taking a break",
    },
    {
      name: "WebDevSimplified",
      tweet: "hey guys Im simplified the web ? guys hello , whrer is everybody",
    },
    {
      name: "Seyed",
      tweet: "Bemolaaaaaaaaaaaaa???? ð",
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
