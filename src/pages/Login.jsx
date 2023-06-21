import React, { useState, useEffect } from "react";
import logo from "../Img/logo-close.png";
import { NavLink } from "react-router-dom";
import quotes from "../data/loginQuotes.json";
console.log(quotes);
export default function Login() {
  const [randomQuote, setRandomQuote] = useState(null);

  useEffect(() => {
    function generateRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const selectedQuote = quotes[randomIndex];
      console.log(selectedQuote);
      return selectedQuote;
    }
    const quote = generateRandomQuote();
    setRandomQuote(quote);
  }, []);
  console.log("Component rendered");

  // // Show loading message if forecast data is not available yet
  // if (randomQuote === null) {
  //   return (
  //     <div>
  //       <p>Loading...</p>
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col items-center justify-around h-screen">
      <img src={logo} alt="logo" className="h-28 w-44" />
      <div className="flex flex-col justify-center align-center w-11/12 sm:w-9/12 lg:w-8/12 xl:w-7/12 h-64 mt-4 bg-white rounded-lg shadow-lg text-center">
        <h1 className="font-bold text-center text-4xl mb-12">
          Mighty Mini Minds
        </h1>
        {randomQuote && (
          <>
            <p className="text-xl font-semibold mx-5">{randomQuote.quote}</p>
            <p className="italic mt-2 ">
              {randomQuote.book} by {randomQuote.author}
            </p>
          </>
        )}
      </div>
      <div className="flex flex-col">
        <label className="text-xl">Username</label>
        <input className="bg-skin-input shadow-md p-1 rounded-lg w-64" />

        <label className="text-xl mt-5">Password</label>
        <input className="bg-skin-input shadow-md p-1 rounded-lg w-64" />
        <div className="flex justify-center mt-5">
          <NavLink to="../appLayout/welcomePage">
            <button className="rounded-md w-32 h-10 bg-skin-secondary text-white mt-10 transition-colors duration-300 ease-in-out transform hover:scale-125 ">
              Login
            </button>
          </NavLink>
        </div>
      </div>
      <div className="underline">
        <NavLink to="../signup">No account? Sign up here!</NavLink>
      </div>
    </div>
  );
}
