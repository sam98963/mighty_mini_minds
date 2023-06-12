import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Header from '../components/Header';


export default function AppLayout({ handleThemeChange }) {

  return (
    <div>
        <Header />
        {/* style container for all pages here between main JSX element tags */}
        <main>
          <Outlet />
        </main >
      <NavBar handleThemeChange={handleThemeChange} />
    </div>
  );
}

// w-80% left-10 right-10 flex items-center bg-white rounded-lg w-90
// className='flex items-center'