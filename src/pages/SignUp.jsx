import Avatar from "../components/Avatar";
import logo from "/logo-close.png";

export default function SignUp() {
  return (
    <div className="flex flex-col items-center">
      <img src={logo} alt="logo" className="h-16 w-28 sm:h-24 sm:w-40 mt-10" />

      <div className="w-11/12 sm:w-9/12 lg:w-8/12 xl:w-7/12 mt-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl sm:text-4xl mt-2 text-center">Sign Up</h1>
        <form className="flex flex-col mx-8 mt-4">
          <div className="flex flex-col mb-4">
            <label className="text-sm sm:text-base">What's your name?</label>
            <input className="bg-skin-input shadow-md" />
          </div>

          <div className="flex justify-between mb-4">
            <div className="flex flex-col w-1/2 mr-2">
              <label className="text-sm sm:text-base">Username</label>
              <input className="bg-skin-input shadow-md" />
            </div>
            <div className="flex flex-col w-1/2 ml-2">
              <label className="text-sm sm:text-base">Password</label>
              <input className="bg-skin-input shadow-md" />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-sm sm:text-base">Email of someone you trust*</label>
            <input className="bg-skin-input shadow-md" />
          </div>

          <div className="flex justify-between mb-4">
            <div className="flex flex-col w-1/2 mr-2">
              <label className="text-sm sm:text-base">Contact</label>
              <input className="bg-skin-input shadow-md" />
            </div>
            <div className="flex flex-col w-1/2 ml-2">
              <label className="text-sm sm:text-base">Relationship</label>
              <input className="bg-skin-input shadow-md" />
            </div>
          </div>

          <div className="flex justify-around mb-4">
            <div className="flex flex-col mb-4">
              <label className="text-sm sm:text-base">Choose avatar</label>
              <select className="w-1/2 bg-skin-input">
                <option value="Bunny">Bunny</option>
                <option value="Tiger">Tiger</option>
                <option value="Goat">Goat</option>
                <option value="Cat">Cat</option>
              </select>
            </div>
            <div className="flex flex-col mb-4">
              <Avatar />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}