import ThemePicker from "./ThemePicker";
export default function NavBar({ handleThemeChange }) {
    return (
      <ThemePicker onThemeChange={handleThemeChange} />
    );
  }
  