import logo from "../Img/logo-close.png";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <header className="flex justify-between h-28 items-center">
      <div className="ml-2 sm:ml-7">
        <img src={logo} alt="logo" className="h-12 w-20 sm:h-20 sm:w-32" />
      </div>
      <div className="after:emoji text-lg sm:text-4xl animate-bounce-slow"></div>
      <div className="h-12 w-12 sm:h-20 sm:w-20 bg-skin-secondary rounded-full m-2 sm:m-10">  
        <Avatar />
      </div>
    </header>
  );
}

// sm:h-24 sm:w-40
