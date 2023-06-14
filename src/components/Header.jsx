import logo from "../Img/logo-close.png";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <header className="flex justify-between h-32 items-center">
      <div className="ml-7">
        <img src={logo} alt="logo" className="h-16 w-28 sm:h-24 sm:w-40" />
      </div>
        <Avatar />
    </header>
  );
}
