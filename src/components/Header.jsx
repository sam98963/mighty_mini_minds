import logo from "../Img/logo-close.png";
import Avatar from "./Avatar";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate(); // useNavigate is a hook that allows you to access the navigate context
  function handleProfileNavigation() {
    // function to handle profile navigation when the user clicks on the profile icon
    navigate("/profile"); // navigate to the profile page
  }

  return (
    <header className="flex justify-between h-28 items-center">
      <div className="ml-2 sm:ml-7">
        <img src={logo} alt="logo" className="h-12 w-20 sm:h-20 sm:w-32" />
      </div>
      <div className="after:emoji text-lg sm:text-4xl animate-bounce-slow"></div>
      <div
        onClick={handleProfileNavigation}
        className="cursor-pointer h-12 w-12 sm:h-20 sm:w-20 bg-skin-secondary rounded-full m-2 sm:m-10 flex items-center justify-center"
      >
        <Avatar w="12" smh="20" smw="20" />
      </div>
    </header>
  );
}

// sm:h-24 sm:w-40
