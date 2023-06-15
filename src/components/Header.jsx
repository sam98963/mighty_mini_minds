import logo from "../Img/logo-close.png";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <header className="flex justify-between h-28 items-center">
      <div className="ml-7">
        <img src={logo} alt="logo" className="h-16 w-28" />
      </div>
      <div className="after:emoji text-4xl animate-bounce"></div>
      <Avatar />
    </header>
  );
}

// sm:h-24 sm:w-40
