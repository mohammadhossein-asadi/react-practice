const Nav = ({ toggle }) => {
  // I can add state here
  return <nav>{toggle ? <h1>Nav</h1> : ""}</nav>;
};

export default Nav;
