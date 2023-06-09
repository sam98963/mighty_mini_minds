import { NavLink, Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div>
      <div >
            <NavLink to="page1">page1</NavLink>
            <NavLink to="page2">page2</NavLink>
        <main>
            <Outlet />
        </main>
        </div>
    </div>
  );
}