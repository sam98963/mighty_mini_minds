import { NavLink, useOutletContext } from "react-router-dom";

export default function AddEntry() {
    // retirm the outlet context using the useOutletContext hook
    const questions = useOutletContext();
    return (
    <div>
        <div className = 'flex flex-col'>
        <label className = 'text-sm sm:text-base py-2 px-8 mt-6'>{questions[0]}</label>
        <input className ='bg-skin-input shadow-md py-8 px-3 mx-8'></input>
        </div>

        <div className = 'flex flex-col'>
        <label className = 'text-sm sm:text-base py-2 p-8 mt-6'>{questions[1]}</label>
        <input className ='bg-skin-input shadow-md py-8 px-3 mx-8'></input>
        </div>

        <div className = 'flex flex-col'>
        <label className = 'text-sm sm:text-base py-2 px-8 mt-6'>{questions[2]}</label>
        <input className ='bg-skin-input shadow-md py-8 px-3 mx-8'></input>
        </div>

        <div className = 'flex justify-center'>
        <NavLink to="../thanksPage"><button className="text-white shadow-md text-2xl transition-colors duration-300 ease-in-out transform hover:scale-125 bg-skin-secondary rounded-md py-1.5 px-3 m-6">Post!</button></NavLink>
    </div>
    </div>
    );
}