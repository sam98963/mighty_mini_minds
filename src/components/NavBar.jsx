import ThemePicker from "./ThemePicker.jsx";

export default function NavBar({ handleThemeChange }) {
    return (
      // pass the handleThemeChange function to the ThemePicker component via props
      <ThemePicker onThemeChange={handleThemeChange} />
    );
  }
  