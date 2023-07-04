import wordOfTheDay from "../data/wordOfTheDay.json";

// export default function WordOfTheDay() {
//   // Generate a random index within the range of the JSON data array length
//   const randomIndex = Math.floor(Math.random() * wordOfTheDay.length);

//   // Retrieve the word of the day, definition, and example based on the random index
//   const { word_of_the_day, definition, example } = wordOfTheDay[randomIndex];

//   return (
//     <div className="flex flex-col items-center">
//       <h1 className="text-2xl">Word of The Day</h1>
//       <h1 className="text-2xl text-skin-secondary">{word_of_the_day}</h1>
//       <p className="text-sm sm:text-lg mx-5 text-center">{definition}</p>
//       <p className="italic text-xs sm:text-base mx-5 text-center">"{example}"</p>
//     </div>
//   );
// }

import { useEffect, useState } from 'react';

export default function WordOfTheDay() {
  const [wordData, setWordData] = useState(null);

  useEffect(() => {
    // Retrieve the stored word and date from local storage
    const storedWord = localStorage.getItem('wordOfTheDay');
    const storedDate = localStorage.getItem('wordOfTheDayDate');
    
    // Get the current date
    const currentDate = new Date().toDateString();

     // Check if the stored word and date match the current date
    if (storedWord && storedDate === currentDate) {
      // If the word is already stored and the date matches, set the word data
      setWordData(JSON.parse(storedWord));
    } else {
      // If the word is not stored or the date doesn't match, generate a new word

      // Generate a random index within the range of the JSON data array length
      const randomIndex = Math.floor(Math.random() * wordOfTheDay.length);

      // Retrieve the word of the day, definition, and example based on the random index
      const { word_of_the_day, definition, example } = wordOfTheDay[randomIndex];

      // Create an object with the new word data
      const newWordData = { word_of_the_day, definition, example };

      // Store the new word and the current date in local storage
      localStorage.setItem('wordOfTheDay', JSON.stringify(newWordData));
      localStorage.setItem('wordOfTheDayDate', currentDate);

      setWordData(newWordData);
    }
  }, []);

  if (!wordData) {
    return <div>Loading...</div>;
  }

  const { word_of_the_day, definition, example } = wordData;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl">Word of The Day</h1>
      <h1 className="text-2xl text-skin-secondary">{word_of_the_day}</h1>
      <p className="text-sm sm:text-lg mx-5 text-center">{definition}</p>
      <p className="italic text-xs sm:text-base mx-5 text-center">"{example}"</p>
    </div>
  );
}


