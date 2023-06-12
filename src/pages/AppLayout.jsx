import { NavLink, Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Header from '../components/Header';


export default function AppLayout({ handleThemeChange }) {

  return (
    <div>
      <div className="bg-skin-base">
        <Header />
        {/* you should only need to use bg-skin-base bg-skin-secondary etc for header colours, no need to use the theme variable */}
        <NavLink to="page1">page1</NavLink>
        <NavLink to="page2">page2</NavLink>
        {/* style container for all pages here between main JSX element tags */}
        <main className='min-h-full'>
          <Outlet />
        </main >
      </div>
      <NavBar handleThemeChange={handleThemeChange} />
    </div>
  );
}
