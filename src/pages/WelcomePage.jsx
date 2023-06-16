import { NavLink } from "react-router-dom"

export default function WelcomePage(){
  return(

    <>
    
     <div className="flex flex-col justify-around items-center w-full h-full">
      <h1 className="text-2xl sm:text-4xl text-center px-4">Welcome, Sofia! How are you feeling today?</h1>
      <div className="flex justify-around w-full">
        <button className="text-6xl transition-colors duration-300 ease-in-out transform hover:scale-125">🙁</button>
        <button className="text-6xl transition-colors duration-300 ease-in-out transform hover:scale-125">😕</button>
        <button className="text-6xl transition-colors duration-300 ease-in-out transform hover:scale-125">😐</button>
        <button className="text-6xl transition-colors duration-300 ease-in-out transform hover:scale-125">🙂</button>
        <button className="text-6xl transition-colors duration-300 ease-in-out transform hover:scale-125">😁</button>
      </div>
      <NavLink to='../addEntry'><button className="text-white shadow-md text-4xl transition-colors duration-300 ease-in-out transform hover:scale-125 bg-skin-secondary rounded-md py-3 px-5">Go!</button></NavLink>
      </div>
    </>
  )
}