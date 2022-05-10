import { useState } from "react";

const Video = (props) => {
  // I can add state here
  const [, set] = useState();
  return (
    <section>
      <h1>Video {props.number}</h1>
    </section>
  );
};

export default Video;
