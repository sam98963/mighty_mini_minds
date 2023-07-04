import { useOutletContext, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useGetUser } from "../hooks/useGetUser";
export default function WelcomePage() {
  const userId = localStorage.getItem("userId");

  const { data: user } = useGetUser();

  // useOutletContext is stupid so you must declate all variables in the array, even questions that isn't used
  const [questions, entryId, setEntryId] = useOutletContext();
  const navigate = useNavigate(); // useNavigate is a hook that allows you to navigate to a different page
  const { mutate } = useMutation({
    // useMutation is a hook that allows you to mutate data
    mutationFn: async (entry) => {
      // mutationFn is the function that will be called when you mutate data
      const url = `https://mighty-mini-minds-backend.onrender.com/entries/${userId}`; // url is the url that you want to send the data to
      const response = await axios.post(url.replace(/"/g, ""), entry); // response is the response from the server
      return response.data; // return the data from the response
    },
    onSuccess: (data) => {
      // onSuccess is a function that will be called when the mutation is successful
      setEntryId(data.uuid); // set the entryId to the uuid of the entry
      console.log(data.uuid); // log the uuid of the entry
    },
  });

  const [mood, setMood] = useState(0); // mood is the mood of the user, setMood is a function that will set the mood of the user

  function handleClick(event) {
    // handleClick is a function that will be called when the user clicks on a mood
    setMood(event.target.value); // set the mood to the value of the button that the user clicked on
  }

  function submitMood() {
    // submitMood is a function that will be called when the user clicks on the go button
    const entry = {
      // entry is the entry that will be sent to the server
      mood: mood, // mood is the mood of the user
      share: false, // share is a boolean that will be used to determine if the user wants to share their entry
      // user_uuid: userId,
    };
    if (mood !== 0) {
      // if the mood is not 0, then mutate the entry
      mutate(entry); // mutate the entry
      navigate("../addEntry"); // navigate to the addEntry page
    } else {
      // if the mood is 0, then alert the user to select a mood
      alert("Please select a mood"); // alert the user to select a mood
    }
  }

  return (
    <>
      <div className="flex flex-col justify-around items-center w-full h-full">
        <h1 className="text-2xl sm:text-4xl text-center px-4">
          Welcome, {user ? user.name : ""}! How are you feeling today?
        </h1>
        <div className="flex justify-around w-full">
          <button
            className={`text-4xl sm:text-6xl md:text-7xl transition-all duration-300 ease-in-out transform hover:scale-125 ${
              mood === "0" ? "animate-pulse" : ""
            }`}
            value={0}
            onClick={(e) => handleClick(e)}
          >
            🙁
          </button>
          <button
            className={`text-4xl sm:text-6xl md:text-7xl transition-all duration-300 ease-in-out transform hover:scale-125 ${
              mood === "1" ? "animate-pulse" : ""
            }`}
            value={1}
            onClick={(e) => handleClick(e)}
          >
            😕
          </button>
          <button
            className={`text-4xl sm:text-6xl md:text-7xl transition-all duration-300 ease-in-out transform hover:scale-125 ${
              mood === "2" ? "animate-pulse" : ""
            }`}
            value={2}
            onClick={(e) => handleClick(e)}
          >
            😐
          </button>
          <button
            className={`text-4xl sm:text-6xl md:text-7xl transition-all duration-300 ease-in-out transform hover:scale-125 ${
              mood === "3" ? "animate-pulse" : ""
            }`}
            value={3}
            onClick={(e) => handleClick(e)}
          >
            🙂
          </button>
          <button
            className={`text-4xl sm:text-6xl md:text-7xl transition-all duration-300 ease-in-out transform hover:scale-125 ${
              mood === "4" ? "animate-pulse" : ""
            }`}
            value={4}
            onClick={(e) => handleClick(e)}
          >
            😁
          </button>
        </div>
        <button
          className="text-white shadow-md text-4xl transition-colors duration-300 ease-in-out transform hover:scale-125 bg-skin-secondary rounded-md py-3 px-5"
          onClick={submitMood}
        >
          Go!
        </button>
      </div>
    </>
  );
}
