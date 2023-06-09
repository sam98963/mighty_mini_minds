import { NavLink, Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';


export default function AppLayout({ handleThemeChange }) {

  return (
    <div>
      <div className="bg-skin-base">
        <NavLink to="page1">page1</NavLink>
        <NavLink to="page2">page2</NavLink>
        <main>
          <Outlet />
        </main>
      </div>
      <NavBar handleThemeChange={handleThemeChange} />
    </div>
  );
}
