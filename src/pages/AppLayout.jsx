import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import "../App.css";
import questionData from "../data/questions.json";
import { useEffect, useState, createContext } from "react";
import axios from "axios";
import {useQuery} from "@tanstack/react-query"

export default function AppLayout({ handleThemeChange }) {


  const {data, error} = useQuery({queryKey: ["userEntries"], queryFn: async ()=>{
    const accessToken = localStorage.getItem("tokenData")
    const config = {
      headers: {
       'token': accessToken,
      }
    }



    const response = await axios.get("https://mighty-mini-minds-backend.onrender.com/users/entries", config);
    return response.data
  },
  // onSuccess:(data)=>{console.log(data)}, onError:(error)=>{console.log(error.message)}
})


/*
const [entries, setEntries] = useState([])
useEffect(
  () => {
  const accessToken = localStorage.getItem("tokenData")
  const fetchData = async () => {
    try {
      const response = await fetch('https://mighty-mini-minds-backend.onrender.com/users/entries', {
        headers: {
          'token': accessToken
        }
      });
      if (response) {
        const data = await response.json();
        setEntries(data);
        console.log(entries)
        console.log("success")
      } else {
        // Handle error case
        console.log('Error:', response.statusText);
      }
    } catch (error) {
      // Handle error case
      console.log('Error:', error.message);
    }
  };

  fetchData();
}, []);

*/



  const [ entryId, setEntryId ] = useState(""); 

  const [questions, setQuestions] = useState([]);
  // need a useEffect to get random questions from each key value pair in the json file and to stop infinite loop
  useEffect(() => {
    function randomQuestions() {
      const randomQuestions = [];
      for (const key in questionData) {
        const questionArray = questionData[key];
        const randomQuestion =
          questionArray[Math.floor(Math.random() * questionArray.length)];
        randomQuestions.push(randomQuestion);
      }
      return randomQuestions;
    }
    setQuestions(randomQuestions());
  }, []);

  return (
    <div>
      <Header />
      <div>{JSON.stringify(data)}</div>
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
