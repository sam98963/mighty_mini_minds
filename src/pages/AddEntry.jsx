import { NavLink, useOutletContext } from "react-router-dom";
import { useState, useContext } from "react";
// import { usePost } from "../hooks/usePost";
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
// import { useAuth } from "../auth/AuthProvider";

export default function AddEntry() {
  // useOutletContext is stupid so you must declate all variables in the array, but not setEntryId because it's a setter function
    const [questions, entryId]  = useOutletContext();
    
    const {mutate} = useMutation({
        mutationFn: async (entry) => {
          const response = await axios.patch(`https://mighty-mini-minds-backend.onrender.com/entries/${entryId}`, entry);
          return response.data;
        },
        onError: (error) => {
          console.log(error);
        }
    });
    // return the outlet context using the useOutletContext hook
    const [positiveA, setPositiveA] = useState("")
    const [challengeA, setChallengeA] = useState("")
    const [openA, setOpenA] = useState("")

    function submit() {
        const entry = {
          question_one: questions[0],
          question_two: questions[1],
          question_three: questions[2],
          answer_one: positiveA, // Use value from positiveA input field
          answer_two: challengeA, // Use value from challengeA input field
          answer_three: openA, // Use value from openA input field
        };
    
        mutate(entry);
      }
    
      return (
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col mt-2'>
            <label className='text-base sm:text-xl py-2 px-8 sm:mt-6'>{questions[0]}</label>
            <input className='bg-skin-input shadow-md h-20 sm:h-28 py-8 px-3 mx-8' onChange={(e) => setPositiveA(e.target.value)}></input>
          </div>
    
          <div className='flex flex-col'>
            <label className='text-base sm:text-xl py-2 p-8 sm:mt-6'>{questions[1]}</label>
            <input className='bg-skin-input shadow-md h-20 sm:h-28 py-8 px-3 mx-8' onChange={(e) => setChallengeA(e.target.value)}></input>
          </div>
    
          <div className='flex flex-col'>
            <label className='text-base sm:text-xl py-2 px-8 sm:mt-6'>{questions[2]}</label>
            <input className='bg-skin-input shadow-md h-20 sm:h-28 py-8 px-3 mx-8' onChange={(e) => setOpenA(e.target.value)}></input>
          </div>
        <div className = 'flex justify-center mt-2 sm:mb-4 md:mt-8'>
            <NavLink to="../thanksPage"><button onClick={submit} className="text-white shadow-md text-lg sm:text-3xl transition-colors duration-300 ease-in-out transform hover:scale-125 bg-skin-secondary rounded-md py-1.5 px-3 m-6 mt-2 ">Post!</button></NavLink>
        </div>
    </div>
    );
}


