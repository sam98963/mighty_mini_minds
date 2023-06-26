import Avatar from "../components/Avatar";
import Emoji from "../components/Emoji";
import Thermometer from "../components/Thermometer";
import WordOfTheDay from "../components/WordOfTheDay";
import ReminderQuote from "../components/ReminderQuote";
import moodData from "../data/data.json";

export default function MoodMap() {
  // create a function to get the mood data from the backend (json in the meantime)
  // convert rating of 1 -5 into a percentage, moodData[0].posts[0].mood_rating to send to the thermometer
  function moodPercentage() {
    let mood = moodData[0].posts[0].mood_rating;
    // turn mood into a percentage
    mood = (mood - 1) * 20;
    return mood;
  }

  console.log(moodData[0].posts[0].mood_rating);

  return (
    <div className="flex flex-col justify-around items-center w-full h-full">
      <h1 className="text-4xl sm:text-4xl text-center px-4 mt-4">My Week</h1>
      <div className="flex justify-between">
        <Emoji
          mon={"😊"}
          tue={"🙁"}
          wed={"🙃"}
          thu={"😐"}
          fri={"😢"}
          sat={"😁"}
          sun={"😍"}
        />
      </div>
      <WordOfTheDay />
      <div className="flex w-full justify-evenly mt-4">
        {/* depends on the emojis over the last 7 days - initially lets just do for that day? */}
        <Thermometer mood={moodPercentage()} />
        {/* <div className="flex flex-row">
          <img src={SpeechBubble} alt="speech bubble" className="h-40 w-40" />
          <ReminderQuote /> */}
        <div className="flex flex-row relative">
          <div className="flex flex-wrap mb-32 text-center items-center justify-center  inline-block max-h-48 max-w-48 bg-contain bg-no-repeat bg-center bg-[url('./img/speech-bubble.png')]">
            {/* Use inline-block to make the container the same size as the speech bubble */}
            {/* Use absolute positioning */}
            <ReminderQuote />
          </div>
          <div className="transform -scale-x-100 mt-32 mr-4 sm:mr-0">
            <Avatar w="24" smh="40" smw="40" />
          </div>
        </div>
      </div>
    </div>
  );
}
