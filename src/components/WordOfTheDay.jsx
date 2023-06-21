import wordOfTheDay from "../data/wordOfTheDay.json";

export default function WordOfTheDay() {
  // Generate a random index within the range of the JSON data array length
  const randomIndex = Math.floor(Math.random() * wordOfTheDay.length);

  // Retrieve the word of the day, definition, and example based on the random index
  const { word_of_the_day, definition, example } = wordOfTheDay[randomIndex];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl">Word of The Day</h1>
      <h1 className="text-2xl text-skin-secondary">{word_of_the_day}</h1>
      <p className="text-sm sm:text-lg">{definition}</p>
      <p className="italic text-xs sm:text-base">"{example}"</p>
    </div>
  );
}
