export default function Emoji({mon, tue, wed, thu, fri, sat, sun,}) {
    return (
        <div className="flex flex-row justify-center">
        <div className="flex flex-col items-center">
            <p className="sm:text-base text-sm text-center">Mon</p>
            <p className="sm:text-4xl text-xl px-1 sm:px-4 transition-all duration-300 ease-in-out transform hover:scale-125">
          {mon}
            </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="sm:text-base text-sm text-center">Tue</p>
          <p className="sm:text-4xl text-xl px-1 sm:px-4 transition-all duration-300 ease-in-out transform hover:scale-125">
            {tue}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="sm:text-base text-sm text-center">Wed</p>
          <p className="sm:text-4xl text-xl px-1 sm:px-4 transition-all duration-300 ease-in-out transform hover:scale-125">
            {wed}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="sm:text-base text-sm text-center">Thu</p>
          <p className="sm:text-4xl text-xl px-1 sm:px-4 transition-all duration-300 ease-in-out transform hover:scale-125">
            {thu}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="sm:text-base text-sm text-center">Fri</p>
          <p className="sm:text-4xl text-xl px-1 sm:px-4 transition-all duration-300 ease-in-out transform hover:scale-125">
            {fri}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="sm:text-base text-sm text-center">Sat</p>
          <p className="sm:text-4xl text-xl px-1 sm:px-4 transition-all duration-300 ease-in-out transform hover:scale-125">
            {sat}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="sm:text-base text-sm text-center">Sun</p>
          <p className="sm:text-4xl text-xl px-1 sm:px-4 transition-all duration-300 ease-in-out transform hover:scale-125">
            {sun}
          </p>
        </div>
        </div>
    )
}