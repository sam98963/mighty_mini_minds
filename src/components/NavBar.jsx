import ThemePicker from "./ThemePicker";
import { useState } from "react";
import { NavLink } from 'react-router-dom';


export default function NavBar({ handleThemeChange }) {
  const [isThemePickerOpen, setIsThemePickerOpen] = useState(false);
  const toggleThemePicker = () => {
    setIsThemePickerOpen((prevOpen) => !prevOpen);
  };
  return (
    <div className="flex justify-center fixed bottom-3 w-3/4">
      <div className="flex justify-between items-center w-full max-w-screen-xl bg-white rounded-lg">
      <NavLink to="AddEntry">📝</NavLink>
      <NavLink to="Journal">📖</NavLink>
      <NavLink to="MoodMap">🗺️</NavLink>
    <div className="relative">
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