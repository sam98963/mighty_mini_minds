import ThemePicker from "./ThemePicker";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faBook,
  faTemperatureHalf,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar({ handleThemeChange }) {
  // handleThemeChange is a function that will be called when the theme is changed
  const [isThemePickerOpen, setIsThemePickerOpen] = useState(false); // isThemePickerOpen is a boolean that will be used to determine if the theme picker is open or not
  const toggleThemePicker = () => {
    // toggleThemePicker is a function that will be called when the user clicks on the theme button
    setIsThemePickerOpen((prevOpen) => !prevOpen); // setIsThemePickerOpen will set the isThemePickerOpen state to the opposite of what it was before
  };
  return (
    <div className="flex justify-center align-center">
      {/* nav bar white box start here */}
      <div className="flex justify-around fixed bottom-3 w-9/12  h-12  bg-white rounded-lg">
        <NavLink
          aria-label="link to the welcome page"
          to="welcomePage"
          className="flex items-center"
        >
          {/* Icon imported from Font Awesome */}
          <FontAwesomeIcon
            icon={faCirclePlus}
            className="w-8 h-8 transition-colors duration-300 ease-in-out transform hover:scale-125"
            style={{ color: "var(--color-icon-secondary)" }}
          />
        </NavLink>
        <NavLink
          aria-label="link to the journal page"
          to="Journal"
          className="flex items-center"
        >
          <FontAwesomeIcon
            icon={faBook}
            className="w-7 h-7 transition-colors duration-300 ease-in-out transform hover:scale-125"
            style={{ color: "var(--color-icon-secondary)" }}
          />
        </NavLink>
        <NavLink
          aria-label="link to the mood map page"
          to="MoodMap"
          className="flex items-center"
        >
          <FontAwesomeIcon
            icon={faTemperatureHalf}
            className="w-8 h-8 transition-colors duration-300 ease-in-out transform hover:scale-125"
            style={{ color: "var(--color-icon-secondary)" }}
          />
        </NavLink>
        <div className="relative flex items-center">
          <button aria-label="theme changer" onClick={toggleThemePicker}>
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
