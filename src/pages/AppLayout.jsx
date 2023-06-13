import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import '../App.css';


export default function AppLayout({ handleThemeChange }) {

  return (
    <div>
        <Header />
        {/* style container for all pages here between main JSX element tags */}
        <main className = 'flex justify-center '>
        <div className='w-11/12 sm:w-9/12 lg:w-8/12 xl:w-7/12 mt-4 bg-white rounded-lg shadow-lg min-h-[80%]'>
          <Outlet />
          </div>
  
        </main >
      <NavBar handleThemeChange={handleThemeChange} />
    </div>
  );
}

// w-80% left-10 right-10 flex items-center bg-white rounded-lg w-90
// className='flex items-center'