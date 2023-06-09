import ThemePicker from "./ThemePicker";
export default function NavBar({ handleThemeChange }) {
    return (
      // pass the handleThemeChange function to the ThemePicker component via props
      <ThemePicker onThemeChange={handleThemeChange} />
    );
  }
  