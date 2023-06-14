import Header from '../components/Header';

export default function MoodMap() {
    return (
        <div>
        <div className="flex flex-col justify-around items-center w-full h-full">
      <h1 className="text-4xl sm:text-4xl text-center px-4 my-2">My Week</h1>
      <div className="flex justify-around w-full">
        
        <div className="flex flex-col items-center">
        <p className="text-lg sm:text-4xl text-center px-4">Mon</p>
        <p className="text-6xl transition-colors duration-300 ease-in-out transform hover:scale-125">🙁</p>
        </div>

        <div className="flex flex-col items-center">
        <p className="text-lg sm:text-4xl text-center px-4">Tue</p>
        <p className="text-6xl transition-colors duration-300 ease-in-out transform hover:scale-125">🙁</p>
        </div>

        <div className="flex flex-col items-center">
        <p className="text-lg sm:text-4xl text-center px-4">Wed</p>
        <p className="text-6xl transition-colors duration-300 ease-in-out transform hover:scale-125">🙁</p>
        </div>

        <div className="flex flex-col items-center">
        <p className="text-lg sm:text-4xl text-center px-4">Thu</p>
        <p className="text-6xl transition-colors duration-300 ease-in-out transform hover:scale-125">🙁</p>
        </div>

        <div className="flex flex-col items-center">
        <p className="text-lg sm:text-4xl text-center px-4">Fri</p>
        <p className="text-6xl transition-colors duration-300 ease-in-out transform hover:scale-125">🙁</p>
        </div>

        <div className="flex flex-col items-center">
        <p className="text-lg sm:text-4xl text-center px-4">Sat</p>
        <p className="text-6xl transition-colors duration-300 ease-in-out transform hover:scale-125">🙁</p>
        </div>

        <div className="flex flex-col items-center">
        <p className="text-lg sm:text-4xl text-center px-4">Sun</p>
        <p className="text-6xl transition-colors duration-300 ease-in-out transform hover:scale-125">🙁</p>
        </div>
        
        
      </div>

      </div>
        </div>
    );
}
