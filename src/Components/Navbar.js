import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <ul className="navbar-elements-list">
        <li>
          <NavLink to="/signIn" className="nav-links">
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-links">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/blogs" className="nav-links">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/instructors" className="nav-links">
            Instructors
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="nav-links">
            Home
          </NavLink>
        </li>
      </ul>
    </>
  );
};
export default Navbar;
