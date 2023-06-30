import AnimatedAvatar from "../components/AnimatedAvatar";
import { useOutletContext, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
export default function ThanksPage() {
  const [questions, entryId] = useOutletContext();
  const [share, setShare] = useState("message1");
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: async (entry) => {
      const response = await axios.patch(
        `https://mighty-mini-minds-backend.onrender.com/entries/${entryId}`,
        entry
      );
      return response.data;
    },
  });

  const handleEmail = async () => { 
    try {
      const response = await axios.post(`https://mighty-mini-minds-backend.onrender.com/sendemail/${entryId}`);
      console.log(response);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  }

  

  // function to set state and navigate to moodMap
  function handleClick(event) {
    setShare(event.target.value);
    if (event.target.value === "message2") {
      handleEmail();
    }
    console.log(entryId);
    setTimeout(() => {
      navigate("../moodMap");
    }, 2000);
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

  function updateEntry() {
    const entry = {
      share: true,
    };
    mutate(entry);
  }

  useEffect(() => {
    if (share === "message2") {
      updateEntry();
    }
  }, [share]);

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
