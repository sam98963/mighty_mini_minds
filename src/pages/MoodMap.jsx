import Avatar from "../components/Avatar";
import Emoji from "../components/Emoji";
export default function MoodMap() {
  return (
    <div className="flex flex-col justify-around items-center w-full h-full">
      <h1 className="text-4xl sm:text-4xl text-center px-4 mt-4">
        My Week
      </h1>
      <div className="flex justify-between">
        <Emoji />
        <div className="flex flex-col items-center">
          <p className="sm:text-md text-sm text-center">Tue</p>
          <p className="sm:text-2xl text-xl px-1 sm:px-4 transition-all duration-300 ease-in-out transform hover:scale-125">
            🙁
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="sm:text-md text-sm text-center">Wed</p>
          <p className="sm:text-2xl text-xl px-1 sm:px-4 transition-all duration-300 ease-in-out transform hover:scale-125">
            🙃
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="sm:text-md text-sm text-center">Thu</p>
          <p className="sm:text-2xl text-xl px-1 sm:px-4 transition-all duration-300 ease-in-out transform hover:scale-125">
            😐
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="sm:text-md text-sm text-center">Fri</p>
          <p className="sm:text-2xl text-xl px-1 sm:px-4 transition-all duration-300 ease-in-out transform hover:scale-125">
            😢
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="sm:text-md text-sm text-center">Sat</p>
          <p className="sm:text-2xl text-xl px-1 sm:px-4 transition-all duration-300 ease-in-out transform hover:scale-125">
            😁
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="sm:text-md text-sm text-center">Sun</p>
          <p className="sm:text-2xl text-xl px-1 sm:px-4 transition-all duration-300 ease-in-out transform hover:scale-125">
            😍
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl">
          Word of The Day
        </h1>
        <h1 className="text-2xl text-skin-secondary">
          Delighted
        </h1>
        <p className="text-sm sm:text-lg">Feeling or showing great pleasure</p>
        <p className="italic text-xs sm:text-base">
        "She has a delighted smile."
        </p>
        <div className="flex flex-row items-end ml-96 transform -scale-x-100 ">
          <Avatar />   
        </div>
      </div>
    </div>
  );
}
