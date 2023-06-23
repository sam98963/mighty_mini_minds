import { NavLink, Outlet, useLocation } from "react-router-dom";
import Login from "./Login";

export default function Root() {
  const location = useLocation();
  const isRoot = location.pathname === "/";
  const navigationElements = isRoot ? (
    <Login />
  ) : null;

  return (
    <div>
      {navigationElements}
      <Outlet />
    </div>
  );
  }
