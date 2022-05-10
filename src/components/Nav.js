const Nav = (props) => {
  // I can add state here
  return <nav>{props.toggle ? <h1>Nav</h1> : ""}</nav>;
};

export default Nav;
