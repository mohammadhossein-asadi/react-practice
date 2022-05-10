const Video = ({ number, setToggle }) => {
  // I can add state here
  return (
    <section>
      <h1>Video {number}</h1>
      <button onClick={setToggle}>Toggle</button>
    </section>
  );
};

export default Video;
