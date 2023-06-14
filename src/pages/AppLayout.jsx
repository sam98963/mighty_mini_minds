import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import '../App.css';


export default function AppLayout({ handleThemeChange }) {

  return (
    <div>
      <Header />
        {/* rendering all pages with navbar and header */}
      <main className = 'flex justify-center h-[60vh] lg:h-[63vh]'>
        <div className='w-11/12 sm:w-9/12 lg:w-8/12 xl:w-7/12 bg-white rounded-lg shadow-lg'>
          <Outlet />
        </div>
      </main >
      <NavBar handleThemeChange={handleThemeChange} />
    </div>
  );
}

// messed up on some tablets - 
// sm: Small screens (>= 640px)
// md: Medium screens (>= 768px)
// lg: Large screens (>= 1024px)
// xl: Extra-large screens (>= 1280px)
// 2xl: Extra-extra-large screens (>= 1536px)