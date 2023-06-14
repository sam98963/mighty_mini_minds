export default function MoodMap() {
  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <h1 className="text-4xl sm:text-4xl text-center px-4 mb-10 mt-4">
        My Week
      </h1>
      <div className="flex justify-evenly  w-full max-w-screen-lg">
        <div className="flex flex-col items-center">
          <p className="text-lg sm:text-4xl text-center px-4">Mon</p>
          <p className="text-6xl sm:text-6xl transition-all duration-300 ease-in-out transform hover:scale-125">
            😊
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-lg sm:text-4xl text-center px-4">Tue</p>
          <p className="text-6xl sm:text-6xl transition-all duration-300 ease-in-out transform hover:scale-125">
            🙁
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-lg sm:text-4xl text-center px-4">Wed</p>
          <p className="text-6xl sm:text-6xl transition-all duration-300 ease-in-out transform hover:scale-125">
            🙃
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-lg sm:text-4xl text-center px-4">Thu</p>
          <p className="text-6xl sm:text-6xl transition-all duration-300 ease-in-out transform hover:scale-125">
            😐
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-lg sm:text-4xl text-center px-4">Fri</p>
          <p className="text-6xl sm:text-6xl transition-all duration-300 ease-in-out transform hover:scale-125">
            😢
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-lg sm:text-4xl text-center px-4">Sat</p>
          <p className="text-6xl sm:text-6xl transition-all duration-300 ease-in-out transform hover:scale-125">
            😁
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-lg sm:text-4xl text-center px-4">Sun</p>
          <p className="text-6xl sm:text-6xl transition-all duration-300 ease-in-out transform hover:scale-125">
            😍
          </p>
        </div>
      </div>
    </div>
  );
}
