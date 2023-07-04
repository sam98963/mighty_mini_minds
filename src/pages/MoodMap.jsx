import AnimatedAvatar from "../components/AnimatedAvatar";
import Emoji from "../components/Emoji";
import Thermometer from "../components/Thermometer";
import WordOfTheDay from "../components/WordOfTheDay";
// import SpeechBubble from "../Img/speech-bubble.png";
import ReminderQuote from "../components/ReminderQuote";
// import moodData from "../data/data.json";
import { useGet } from "../hooks/useGet";
import { useState } from "react";
import axios from "axios";

export default function MoodMap() {
  const [sharePopup, setSharePopup] = useState(false); // set the initial state of the share popup to false
  const [popupDone, setPopupDone] = useState(false); // set the initial state of the popup done to false
  const { data: entries, isLoading, isError, error } = useGet(); // use the useGet hook to get the entries data
  const sortedEntries = entries
    ?.sort(
      // sort the entries by date and get the last 7 entries from the array
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    )
    .slice(0, 7)
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)); // sort the entries by date and get the last 7 entries from the array

  const uuid = localStorage.getItem("userId");
  // function moodPercentage() {
  //   let mood = moodData[0].posts[0].mood_rating;
  //   // turn mood into a percentage
  //   mood = (mood - 1) * 20;
  //   return mood;
  // }
  // create a function to get the mood data from the backend (json in the meantime)
  // convert rating of 1 -5 into a percentage, moodData[0].posts[0].mood_rating to send to the thermometer

  // function to get the mood data from the backend
  const handleEmail = async () => {
    console.log("function called");
    try {
      const response = await axios.post(
        `https://mighty-mini-minds-backend.onrender.com/sendbademail/${uuid}`
      );
      console.log(response);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  console.log(uuid);

  // function to get the mood data from the backend
  function moodPercentage() {
    if (!sortedEntries || sortedEntries.length === 0) {
      // if there are no entries, return 0
      return 0;
    }

    let totalMood = 0;

    sortedEntries.forEach((entry) => {
      // loop through the entries and add the mood to the total mood
      totalMood += entry.mood; // add the mood to the total mood
    });

    const averageMood = totalMood / sortedEntries.length; // get the average mood by dividing the total mood by the number of entries
    const moodPercentageVariable = averageMood * 25; // convert the average mood into a percentage
    if (moodPercentageVariable < 40 && popupDone === false) {
      // if the mood is less than 40, set the share popup to true and set the popup done to true
      setTimeout(() => {
        // set a timeout to show the popup after 1 second
        // if(confirm("Looks like you are having a tough week, would you like us to let someone know?")){
        //   handleEmail()
        // }
      }, 1000);
      setSharePopup(true); // set the share popup to true
      setPopupDone(true); // set the popup done to true
    }

    return moodPercentageVariable;
  }

  return (
    <div className="flex flex-col justify-around items-center w-full h-full">
      <h1
        data-testid="h1"
        className="text-4xl sm:text-4xl text-center px-4 mt-4"
      >
        My Week
      </h1>
      <div className="flex justify-between">
        {sortedEntries
          ? sortedEntries.map((entry) => (
              <Emoji
                data-testid="emoji-component"
                key={entry.id}
                mood={entry.mood}
                date={new Date(entry.createdAt).toLocaleString("en-GB", {
                  weekday: "short",
                })}
              />
            ))
          : null}
      </div>
      <WordOfTheDay data-testid="word-of-the-day" />
      <div className="flex w-full justify-evenly mt-4">
        <Thermometer mood={moodPercentage()} />
        <div className="flex flex-row relative">
          <div className="flex flex-wrap mb-32 text-center items-center justify-center w-36 sm:w-44 sm:max-h-48 sm:max-w-48 bg-contain bg-no-repeat bg-center bg-[url('./img/speech-bubble.avif')]">
            <ReminderQuote />
          </div>
          <div className="transform -scale-x-100 mt-36 sm:mt-40 mr-4 sm:mr-0">
            <AnimatedAvatar height={20} smh={28} />
          </div>
        </div>
      </div>
    </div>
  );
}
