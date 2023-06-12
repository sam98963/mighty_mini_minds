import ThemePicker from "./ThemePicker";
import { useState } from "react";
import { NavLink } from 'react-router-dom';

export default function NavBar({ handleThemeChange }) {
  const [isThemePickerOpen, setIsThemePickerOpen] = useState(false);
  const toggleThemePicker = () => {
    setIsThemePickerOpen((prevOpen) => !prevOpen);
  };
  return (
    <div>
      <NavLink to="AddEntry">Add Entry</NavLink>
      <NavLink to="Journal">Journal</NavLink>
      <NavLink to="MoodMap">Mood Map</NavLink>
    <div className="relative">
      <button onClick={toggleThemePicker}>
        {/* Add your button image here */}
        <img src="button-image.png" alt="Choose Theme" />
      </button>
      {isThemePickerOpen && (
        <div className="absolute bottom-0 right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow">
        <ThemePicker onThemeChange={handleThemeChange} />
        </div>
      )}
      </div>
    </div>
  );
}
  