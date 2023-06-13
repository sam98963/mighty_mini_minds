import logo from "/logo-close.png";

export default function SignUp() {
  return (
    <div className="flex flex-col	items-center">
        <img src={logo} alt="logo" className="h-16 w-28 sm:h-24 sm:w-40 mt-10"/>
      <div className="flex flex-col w-11/12 h-4/5 rounded-lg bg-white mt-4 pb-4">
        <h1 className="text-3xl mt-2 self-center">Sign Up</h1>
        <form className="flex flex-col items-start ml-2">
          <label className="text-m mt-2">What's your name?</label>
          <input className="bg-skin-input drop-shadow-input"/>
        </form>
      </div>
    </div>
  );
}