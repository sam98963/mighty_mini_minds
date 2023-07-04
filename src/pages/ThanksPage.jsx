import AnimatedAvatar from "../components/AnimatedAvatar";
import { useOutletContext, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
export default function ThanksPage() {
  const [questions, entryId] = useOutletContext(); // useOutletContext - you must declare all variables in the array, even questions that aren't used
  const [share, setShare] = useState("message1"); // share is a boolean that will be used to determine if the user wants to share their entry
  const navigate = useNavigate(); // useNavigate is a hook that allows you to navigate to a different page

  const { mutate } = useMutation({
    // useMutation is a hook that allows you to mutate data
    mutationFn: async (entry) => {
      // mutationFn is the function that will be called when you mutate data
      const response = await axios.patch(
        // response is the response from the server
        `https://mighty-mini-minds-backend.onrender.com/entries/${entryId}`, // url is the url that you want to send the data to
        entry // entry is the entry that will be sent to the server
      );
      return response.data; // return the data from the response
    },
  });

  // function to set state and navigate to moodMap
  const handleEmail = async () => {
    // handleEmail is a function that will be called when the user clicks on the yes button
    try {
      // try to send the email
      const response = await axios.post(
        `https://mighty-mini-minds-backend.onrender.com/sendemail/${entryId}`
      ); // response is the response from the server
      console.log(response);
    } catch (error) {
      // if there is an error, log the error
      console.error("Failed to send email:", error);
    }
  };

  // function to set state and navigate to moodMap
  function handleClick(event) {
    setShare(event.target.value);
    if (event.target.value === "message2") {
      handleEmail();
    }
    console.log(entryId);
    setTimeout(() => {
      // setTimeout is a function that will be called after 2 seconds
      navigate("../moodMap"); // navigate to moodMap
    }, 2000); // wait 2 seconds before navigating to moodMap
  }

  // function to set state and return correct message
  function shareMessage() {
    if (share === "message1") {
      // if share is false, return message1
      return "Would you like to share your thoughts with someone?";
    } else if (share === "message2") {
      // if share is true, return message2 and navigate to moodMap
      return "Thanks for sharing your entry! It's on its way to your trusted person!";
    } else if (share === "message3") {
      // if share is true, return message3 and navigate to moodMap
      return "Remember you can always share your thoughts anytime!";
    }
  }

  // function to update entry
  function updateEntry() {
    const entry = {
      share: true,
    };
    mutate(entry);
  }

  // useEffect is a hook that will be called when the component is mounted
  useEffect(() => {
    if (share === "message2") {
      // if share is true, update entry
      updateEntry();
    }
  }, [share]); // useEffect will be called when share is updated

  return (
    <div className="flex flex-col justify-around items-center w-full h-full overflow-hidden">
      <Confetti
        wind={0.04}
        recycle={false}
        drawShape={(ctx) => {
          ctx.beginPath();
          for (let i = 0; i < 22; i++) {
            const angle = 0.35 * i;
            const x = (0.2 + 1.5 * angle) * Math.cos(angle);
            const y = (0.2 + 1.5 * angle) * Math.sin(angle);
            ctx.lineTo(x, y);
          }
          ctx.stroke();
          ctx.closePath();
        }}
      />

      <h1 className="text-2xl sm:text-4xl text-center px-4">
        Thanks for checking in, see you tomorrow!
      </h1>
      <AnimatedAvatar
        height={30}
        width={32}
        largeHeight="sm:h-52"
        largeWidth="sm:w-52"
      />

      {/* call shareMessage function to return correct message */}
      <h2 className="text-xl sm:text-2xl text-center px-4">{shareMessage()}</h2>

      <div className="flex flex-row justify-around items-center w-full">
        <button
          onClick={handleClick}
          value={"message3"} // set share to true which will display message2 and navigate to moodMap
          className="text-white shadow-md text-4xl transition-colors duration-300 ease-in-out transform hover:scale-125 bg-skin-secondary rounded-md py-3 px-5"
        >
          ✕
        </button>
        <button
          onClick={handleClick}
          value={"message2"} // set share to true which will display message2 and navigate to moodMap
          className="text-white shadow-md text-4xl transition-colors duration-300 ease-in-out transform hover:scale-125 bg-skin-secondary rounded-md py-3 px-5"
        >
          ✓
        </button>
      </div>
    </div>
  );
}
