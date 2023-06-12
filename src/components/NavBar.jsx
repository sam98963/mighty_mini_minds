import ThemePicker from "./ThemePicker";
import { useState } from "react";
import { NavLink } from 'react-router-dom';




export default function NavBar({ handleThemeChange }) {
  const [isThemePickerOpen, setIsThemePickerOpen] = useState(false);
  const toggleThemePicker = () => {
    setIsThemePickerOpen((prevOpen) => !prevOpen);
  };
  return (
    <div className="flex justify-center align-center">
    <div className="flex justify-around fixed bottom-3 w-9/12  h-12  bg-white rounded-lg">
      <NavLink to="AddEntry" className="flex items-center">📝</NavLink>
      <NavLink to="Journal" className="flex items-center">📖</NavLink>
      <NavLink to="MoodMap" className="flex items-center">🗺️</NavLink>
    <div className="relative flex items-center">
      <button onClick={toggleThemePicker}>
        {/* Add your button image here */}
        🎨
      </button>
      {isThemePickerOpen && (
        <div className="absolute bottom-0 right-0 mb-8">
        <ThemePicker onThemeChange={handleThemeChange} />
        </div>
      )}
      </div>
    </div>
    </div>
  );
}
  
// mx-auto w-60%