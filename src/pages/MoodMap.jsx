import Avatar from "../components/Avatar";
import Emoji from "../components/Emoji";
import Thermometer from "../components/Thermometer";
import WordOfTheDay from "../components/WordOfTheDay";

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
      <WordOfTheDay
        word={"Delighted"}
        definition={"Feeling or showing great pleasure"}
        example={"She has a delighted smile."}
      />
      <div className="flex w-full justify-around mt-4">
      {/* depends on the emojis over the last 7 days - initially lets just do for that day? */}
        <Thermometer mood="50%" />
        <div className="transform -scale-x-100 mt-16 mr-4 sm:mr-0">
          <Avatar />
        </div>
      </div>
    </div>
  );
}
