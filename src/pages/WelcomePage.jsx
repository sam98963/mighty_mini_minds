import { NavLink, useOutletContext, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function WelcomePage() {
  const userId = localStorage.getItem('userId');

  // useOutletContext is stupid so you must declate all variables in the array, even questions that isn't used
  const [questions, entryId, setEntryId] = useOutletContext();
  const navigate = useNavigate();
  const {mutate} = useMutation({
    mutationFn: async (entry) => {
      const url = `https://mighty-mini-minds-backend.onrender.com/entries/${userId}`;
      const response = await axios.post(url.replace(/"/g, ''), entry);
      return response.data;
    },
    onSuccess: (data) => {
      setEntryId(data.uuid);
      console.log(data.uuid);
    },
  });
  
  const [mood, setMood] = useState(0);

  function handleClick(event) {
    setMood(event.target.value);
  }

  function submitMood() {
    const entry = {
      mood: mood,
      share: false,
      // user_uuid: userId,
    };
    if (mood !==0){
    mutate(entry);
    navigate('../addEntry');
    } else {
      alert('Please select a mood');
    }
  }

  return (
    <>
      <div className="flex flex-col justify-around items-center w-full h-full">
        <h1 className="text-2xl sm:text-4xl text-center px-4">
          Welcome, Sofia! How are you feeling today?
        </h1>
        <div className="flex justify-around w-full">
          <button
            className={`text-4xl sm:text-6xl md:text-7xl transition-all duration-300 ease-in-out transform hover:scale-125 ${mood === '0' ? 'animate-pulse' : ''}`}
            value={0}
            onClick={(e) => handleClick(e)}
          >
            🙁
          </button>
          <button
            className={`text-4xl sm:text-6xl md:text-7xl transition-all duration-300 ease-in-out transform hover:scale-125 ${mood === '1' ? 'animate-pulse' : ''}`}
            value={1}
            onClick={(e) => handleClick(e)}
          >
            😕
          </button>
          <button
            className={`text-4xl sm:text-6xl md:text-7xl transition-all duration-300 ease-in-out transform hover:scale-125 ${mood === '2' ? 'animate-pulse' : ''}`}
            value={2}
            onClick={(e) => handleClick(e)}
          >
            😐
          </button>
          <button
            className={`text-4xl sm:text-6xl md:text-7xl transition-all duration-300 ease-in-out transform hover:scale-125 ${mood === '3' ? 'animate-pulse' : ''}`}
            value={3}
            onClick={(e) => handleClick(e)}
          >
            🙂
          </button>
          <button
            className={`text-4xl sm:text-6xl md:text-7xl transition-all duration-300 ease-in-out transform hover:scale-125 ${mood === '4' ? 'animate-pulse' : ''}`}
            value={4}
            onClick={(e) => handleClick(e)}
          >
            😁
          </button>
        </div>
          <button className="text-white shadow-md text-4xl transition-colors duration-300 ease-in-out transform hover:scale-125 bg-skin-secondary rounded-md py-3 px-5" onClick={submitMood}>
            Go!
          </button>
      </div>
    </>
  );
}
