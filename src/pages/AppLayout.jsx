import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import '../App.css';
import questionData from '../data/questions.json';
import { useEffect, useState } from 'react';


export default function AppLayout({ handleThemeChange }) {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
  
  function randomQuestions() {
    const randomQuestions = [];
    for (const key in questionData) {
      const questionArray = questionData[key];
      const randomQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];
      randomQuestions.push(randomQuestion);
    }
    return randomQuestions;
  }

    setQuestions(randomQuestions());
  }, []);

  function randomQuestions() {
    const randomQuestions = [];
    for (const key in questionData) {
      const questionArray = questionData[key];
      const randomQuestion = questionArray[Math.floor(Math.random() * questionArray.length)];
      randomQuestions.push(randomQuestion);
    }
    return randomQuestions;
  }
  
  return (
    <div>
      <Header />
      <div>{randomQuestions()}</div>
        {/* rendering all pages with navbar and header */}
      <main className = 'flex justify-center h-[63vh] md:h-[66vh] xl:h-[69vh]'>
        <div className='w-11/12 sm:w-9/12 lg:w-8/12 xl:w-7/12 bg-white rounded-lg shadow-lg'>
          <Outlet questions={questions} />
        </div>
      </main >
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