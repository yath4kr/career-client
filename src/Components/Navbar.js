import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);

  return (
    <>
      <ul className="navbar-elements-list">
        {cookies.access_token ? (
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
