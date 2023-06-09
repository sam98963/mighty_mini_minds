import { NavLink, Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { useState } from 'react';

export default function AppLayout() {
  const [theme, setTheme] = useState('');

  function handleThemeChange(newTheme) {
    setTheme(newTheme);
  }

  return (
    <div className={theme}>
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
