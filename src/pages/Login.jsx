import { useState, useEffect } from "react";
import logo from "../Img/logo-close.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import quotes from "../data/loginQuotes.json";
import {useAuth} from "../auth/AuthProvider"

export default function Login() {
  const {handleAuthentication} = useAuth();


  //state of the user data
  const [data, setData] = useState(null);
  // state of the login form
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
 
  const navigate = useNavigate();
// mutation for login using react-query
  const { mutate } = useMutation({
    
    mutationFn: async (user) => {
      const response = await axios.post(
        "https://mighty-mini-minds-backend.onrender.com/users/login",
        user
      );
      const data = response.data;
      return data;
    },
    onSuccess: (data) => {
      setData(data);
      localStorage.setItem("tokenData", JSON.stringify(data.token));
      localStorage.setItem("userId", JSON.stringify(data.userId));
      handleAuthentication(true),
      navigate("/appLayout/welcomePage");
    },
    onError: (err) => {
      const errorMessage = `Sorry, there was an error: ${err.message}`;
      console.log(errorMessage);
    },
  });
  
  // function to handle the change of the login form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

// function to handle the login and send the data to the backend to authorize the user
  const handleLogin = () =>{
    const user = {
      username: login.username,
      password: login.password,
    }
    if (login.username !== "" && login.password !== "") {
      mutate(user);
      // remove this later ---->
      navigate("/appLayout/welcomePage");
    } else {
      alert("Please fill in all fields");
    }
  }

  // function to generate a random quote
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

  return (
    <div className="flex flex-col items-center justify-around h-screen">
    <img src={logo} alt="logo" className="h-28 w-44" />
    <div className="flex flex-col justify-around align-center w-11/12 sm:w-9/12 lg:w-8/12 xl:w-7/12 h-3/5 sm:h-4/6 bg-white rounded-lg shadow-lg text-center">
      <h1 className="font-bold text-center text-xl sm:text-4xl">
        Mighty Mini Minds
      </h1>
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
      <input aria-label = "username"
        name="username"
        onChange={handleChange}
        className="bg-skin-input shadow-md p-1 rounded-lg w-64"
      />
      <label className="text-lg sm:text-2xl mt-5">Password</label>
      <input aria-label = "password"
        type="password"
        name="password"
        onChange={handleChange}
        className="bg-skin-input shadow-md p-1 rounded-lg w-64"
      />
      </div>
        <div className="flex justify-center">
          <button onClick={handleLogin} className="rounded-md w-32 h-10 sm:w-42 sm:h-16 sm:text-xl bg-skin-secondary shadow-md text-white  transition-colors duration-300 ease-in-out transform hover:scale-125 ">
            Login
          </button>
          </div>
    
    </div>
    <div className="underline sm:text-xl">
      <NavLink to="signup">No account? Sign up here!</NavLink>
    </div>
  </div>
  );
}
