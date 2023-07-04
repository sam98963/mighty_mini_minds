import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import "../App.css";
import questionData from "../data/questions.json";
import { useEffect, useState, createContext } from "react";

export default function AppLayout({ handleThemeChange }) {
  // handleThemeChange is a function that will be called when the user clicks on the theme button
  const [entryId, setEntryId] = useState(null); // entryId is the id of the entry that will be sent to the server

  const [questions, setQuestions] = useState([]); // questions is an array of questions that will be sent to the server
  // need a useEffect to get random questions from each key value pair in the json file and to stop infinite loop
  useEffect(() => {
    function randomQuestions() {
      // randomQuestions is a function that will be called when the page loads
      const randomQuestions = []; // randomQuestions is an array that will be used to store the random questions
      for (const key in questionData) {
        // for each key in questionData
        const questionArray = questionData[key]; // questionArray is an array of questions from the key in questionData
        const randomQuestion = // randomQuestion is a random question from the questionArray
          questionArray[Math.floor(Math.random() * questionArray.length)]; // Math.floor(Math.random() * questionArray.length) is a random number between 0 and the length of the questionArray
        randomQuestions.push(randomQuestion); // push the randomQuestion to the randomQuestions array
      }
      return randomQuestions; // return the randomQuestions array
    }
    setQuestions(randomQuestions()); // set the questions state to the randomQuestions array
  }, []);

  return (
    <div>
      <Header />
      {/* rendering all pages with navbar and header */}
      <main className="flex justify-center h-[70vh] md:h-[74vh] xl:h-[78vh]">
        <div className="w-11/12 sm:w-9/12 lg:w-8/12 xl:w-7/12 bg-white rounded-lg shadow-lg">
          {/* context instead of props needed to pass data to children for outlet */}
          <Outlet context={[questions, entryId, setEntryId]} />
        </div>
      </main>
      <NavBar handleThemeChange={handleThemeChange} />
    </div>
  );
}

// messed up on some tablets -
// sm: Small screens (>= 640px)
// md: Medium screens (>= 768px)
// lg: Large screens (>= 1024px)
// xl: Extra-large screens (>= 1280px)
// 2xl: Extra-extra-large screens (>= 1536px)

// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// const {data: questions, isLoading, isError, error} = useQuery({
//   queryKey: ['questions'],
//   queryFn: async () => {
//     const data = await axios.get('https://songsexcerpt.mohd.app/api/v1/getRandomExcerpt');
//     return data;
//   },
// });
