import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const loginState = useSelector((state) => state.loginState);
  return (
    <>
      <ul className="navbar-elements-list">
        {loginState ? (
          <li>
            <NavLink to="/profile" className="nav-links">
              Profile
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink to="/auth" className="nav-links">
              Sign In
            </NavLink>
          </li>
        )}

        <li>
          <NavLink to="/about" className="nav-links">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/blogs" className="nav-links">
            Blogs
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
