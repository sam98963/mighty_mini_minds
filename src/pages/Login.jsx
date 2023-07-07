import {useState, useEffect } from "react";
import logo from "../Img/logo-close.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import quotes from "../data/loginQuotes.json";
import { useAuth } from "../auth/AuthProvider";
export default function Login() {
  const { handleAuthentication } = useAuth(); // useAuth is a custom hook that allows you to access the authentication context

  //state of the user data
  const [data, setData] = useState(null);
  // state of the login form
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate(); // useNavigate is a hook that allows you to navigate to a different page
  // mutation for login using react-query

  const [errorMessage, setErrorMessage] = useState(""); 
  const { mutate, isError } = useMutation({
    mutationFn: async (user) => {
      // mutationFn is the function that will be called when you mutate data
      const loginUser = await axios.post(
        // url is the url that you want to send the data to
        "https://mighty-mini-minds-backend.onrender.com/users/login",
        user
      );
      const data = loginUser.data;
      return data;
    },
    onSuccess: (data) => {
      // onSuccess is a function that will be called when the mutation is successful
      setData(data);
      localStorage.setItem("tokenData", JSON.stringify(data.token)); // store the token in local storage so that it can be accessed later
      localStorage.setItem("userId", JSON.stringify(data.userId));
      handleAuthentication(true), navigate("/appLayout/welcomePage"); // navigate to the home page and set the authentication to true so that the user can access the app
      console.log(data.token);
    },
    onError: (err) => {
      // onError is a function that will be called when the mutation is unsuccessful
      console.log(err.message);
      const error = JSON.stringify(err.response.data.message); 
      setErrorMessage(error.replace(/"/g, '')); 
    },
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrorMessage("");
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [errorMessage]);

  // function to handle the change of the login form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  // function to handle the login and send the data to the backend to authorize the user
  const handleLogin = () => {
    // this function will be called when the form is submitted
    const user = {
      username: login.username,
      password: login.password,
    };
    if (login.username !== "" && login.password !== "") {
      // check if the user has filled in all the fields
      mutate(user); // call the mutate function to send the data to the backend
    } else {
      alert("Please fill in all fields"); // if the user has not filled in all the fields, alert the user
    }
  };

  // function to generate a random quote
  const [randomQuote, setRandomQuote] = useState(null); // state of the random quote
  useEffect(() => {
    // useEffect is a hook that allows you to perform side effects in function components
    function generateRandomQuote() {
      // function to generate a random quote from the quotes.json file
      const randomIndex = Math.floor(Math.random() * quotes.length); // generate a random index
      const selectedQuote = quotes[randomIndex]; // select the quote at the random index
      console.log(selectedQuote); // log the quote
      return selectedQuote; // return the quote
    }
    const quote = generateRandomQuote(); // call the function to generate a random quote and store it in a variable
    setRandomQuote(quote); // set the state of the random quote to the quote that was generated
  }, []);

  return (
    <div className="flex flex-col items-center justify-around h-screen">
      <img src={logo} alt="logo" className="h-28 w-44" />
      <div className="flex flex-col justify-around align-center w-11/12 sm:w-9/12 lg:w-8/12 xl:w-7/12 h-3/5 sm:h-4/6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="font-bold text-center text-xl sm:text-4xl">
          Mighty Mini Minds
        </h1>
        {isError? <p className="mt-2 text-center text-base sm:text-lg">{errorMessage}</p> : null}
        {randomQuote && (
          <div className="flex flex-col">
            <p className="sm:text-xl font-semibold mx-5">{randomQuote.quote}</p>
            <p className="italic text-sm mt-1">
              {randomQuote.book} by {randomQuote.author}
            </p>
          </div>
        )}

        <div className="flex flex-col items-center">
          <label className="text-lg sm:text-2xl mt-4">Username</label>
          <input
            aria-label="username"
            name="username"
            onChange={handleChange}
            className="bg-skin-input shadow-md p-1 rounded-lg w-64"
          />
          <label className="text-lg sm:text-2xl mt-5">Password</label>
          <input
            aria-label="password"
            type="password"
            name="password"
            onChange={handleChange}
            className="bg-skin-input shadow-md p-1 rounded-lg w-64"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleLogin}
            className="rounded-md w-32 h-10 sm:w-42 sm:h-16 sm:text-xl bg-skin-secondary shadow-md text-white  transition-colors duration-300 ease-in-out transform hover:scale-125 "
          >
            Login
          </button>
        </div>
      </div>
      <div className="space-y-2 mb-2 text-center">
        <div className="underline sm:text-xl text-skin-primary">
          <NavLink to="signup">No account? Sign up here!</NavLink>
        </div>
        <div className="underline sm:text-lg text-skin-primary">
          <NavLink to="./about">About Us</NavLink>
        </div>
      </div>
    </div>
  );
}

// for test:
// const navigate = sinon.stub();
// expect(navigate.calledWith('/appLayout/welcomePage')).toBe(true);