import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function Root() {
  const location = useLocation();

  const isRoot = location.pathname === "/";
  const navigationElements = isRoot ? (
    <div>
      <div className="flex justify-center">
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/appLayout">App</NavLink>
      <NavLink to="/appLayout/welcomePage">Welcome Page</NavLink>
      <NavLink to="/appLayout/thanksPage">Thanks Page</NavLink>

    </div>
  ) : null;

  return (
    <div>
      {navigationElements}
      <Outlet />
    </div>
  );
}
