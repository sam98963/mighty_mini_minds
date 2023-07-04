import { Outlet, useLocation } from "react-router-dom";
import Login from "./Login";

export default function Root() {
  const location = useLocation(); // useLocation is a hook that allows you to access the location context
  const isRoot = location.pathname === "/"; // check if the current path is the root path
  const navigationElements = isRoot ? ( // if the current path is the root path then render the login page
    <Login />
  ) : null; // otherwise render nothing

  return (
    <div>
      {navigationElements} {/* render the navigation elements */}
      <Outlet /> {/* render the child routes */}
    </div>
  );
}
