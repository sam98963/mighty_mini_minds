import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function Root() {
  const location = useLocation();

  const isRoot = location.pathname === "/";
  const navigationElements = isRoot ? (
    <div>
      <div className="m-4 flex justify-center color text-skin-muted">
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/appLayout">App</NavLink>

    </div>
  ) : null;

  return (
    <div>
      {navigationElements}
      <Outlet />
    </div>
  );
}
