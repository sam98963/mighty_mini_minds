import avatar from "../Img/number7V3.png"

export default function ThanksPage(){
    return(
       <div className="flex flex-col justify-around items-center w-full h-full">
        <h1 className="text-2xl sm:text-4xl text-center px-4">Thanks for checking in, see you tomorrow!</h1>
        <img src={avatar} alt="avatar" className="h-30 w-32 sm:h-60 sm:w-64" />
        <h2 className="text-xl sm:text-2xl text-center px-4">Would you like to share your thoughts with someone?</h2>
        <div className="flex flex-row justify-around items-center w-full">
        <button className="text-white shadow-md text-4xl transition-colors duration-300 ease-in-out transform hover:scale-125 bg-skin-secondary rounded-md py-3 px-5">✕</button>
        <button className="text-white shadow-md text-4xl transition-colors duration-300 ease-in-out transform hover:scale-125 bg-skin-secondary rounded-md py-3 px-5">✓</button>
        </div>
        </div>
    )
  }