import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import '../App.css';


export default function AppLayout({ handleThemeChange }) {

  return (
    <div className='maindiv w-full h-full'>
        <Header />
        {/* style container for all pages here between main JSX element tags */}
        <main className='flex flex-col items-center w-screen h-screen border-8 border-gray-300'>
        <div className="w-3/4 min-h-full mt-4 bg-white rounded-lg shadow-lg border-8 border-gray-300 flex flex-col items-center ">
          <Outlet />
        </div>
        </main >
      <NavBar handleThemeChange={handleThemeChange} />
    </div>
  );
}

// w-80% left-10 right-10 flex items-center bg-white rounded-lg w-90
// className='flex items-center'