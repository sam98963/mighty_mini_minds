import Avatar from "../components/Avatar";
import Emoji from "../components/Emoji";
import Thermometer from "../components/Thermometer";
import WordOfTheDay from "../components/WordOfTheDay";
import SpeechBubble from "../Img/speech-bubble.png";
import ReminderQuote from "../components/ReminderQuote";

export default function MoodMap() {
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
        <Thermometer mood={90} />
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
