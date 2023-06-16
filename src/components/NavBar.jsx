import ThemePicker from "./ThemePicker";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
/* Import the font awesome library here */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faBook, faTemperatureHalf,faPalette } from '@fortawesome/free-solid-svg-icons'




export default function NavBar({ handleThemeChange }) {
  const [isThemePickerOpen, setIsThemePickerOpen] = useState(false);
  const toggleThemePicker = () => {
    setIsThemePickerOpen((prevOpen) => !prevOpen);
  };
  return (
    <div className="flex justify-center align-center">
      {/* nav bar white box start here */}
    <div className="flex justify-around fixed bottom-3 w-9/12  h-12  bg-white rounded-lg">
      <NavLink to="welcomePage" className="flex items-center ">
        {/* Icon imported from Font Awesome */}
        <FontAwesomeIcon 
        icon={faCirclePlus}
        className="w-8 h-8 transition-colors duration-300 ease-in-out transform hover:scale-125"
        style={{ color: "var(--color-icon-secondary)" }} />
        </NavLink>
      <NavLink to="Journal" className="flex items-center">
        <FontAwesomeIcon 
        icon={faBook}
        className="w-7 h-7 transition-colors duration-300 ease-in-out transform hover:scale-125"
        style={{ color: "var(--color-icon-secondary)" }}
        />
        </NavLink>
      <NavLink to="MoodMap" className="flex items-center">
        <FontAwesomeIcon 
        icon={faTemperatureHalf}
        className="w-8 h-8 transition-colors duration-300 ease-in-out transform hover:scale-125"
        style={{ color: "var(--color-icon-secondary)" }}
         />
        </NavLink>
    <div className="relative flex items-center">
      <button onClick={toggleThemePicker}>
        {/* Clickeanble palete*/}
        <FontAwesomeIcon 
        icon={faPalette}
        className="w-7 h-7 transition-colors duration-300 ease-in-out transform hover:scale-125" 
        style={{ color: "var(--color-icon-secondary)" }}
        />
      </button>
      {/* work in a future transition */}
      {isThemePickerOpen && (
        <div className="absolute justify-center align-center bottom-5 right-0.1 mb-8 ">
        <ThemePicker onThemeChange={handleThemeChange} />
        </div>
      )}
      </div>
    </div>
    </div>
  );
}
