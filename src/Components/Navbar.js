import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const tabs = [
    { route: "/signIn", tabName: "Sign In" },
    { route: "/about", tabName: "About" },
    { route: "/blogs", tabName: "Blogs" },
    { route: "/instructors", tabName: "Instructors" },
    { route: "/", tabName: "Home" },
  ];
  return (
    <>
      <ul className="navbar-elements-list">
        {tabs.map((tab, index) => {
          return (
            <li key={index}>
              <NavLink to={tab.route} className="nav-links">
                {tab.tabName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Navbar;
