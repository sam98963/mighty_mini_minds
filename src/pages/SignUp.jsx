import Avatar from "../components/Avatar";
import logo from "/logo-close.png";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
// import { useAuth } from "../auth/AuthProvider";
import { useNavigate, NavLink } from "react-router-dom";

export default function SignUp() {

  const [isRegistered, setIsRegistered] = useState(false); // isRegistered is a boolean that will be used to determine if the user has registered

  const navigate = useNavigate(); // useNavigate is a hook that allows you to navigate to a different page

  const [errorMessage, setErrorMessage] = useState(""); // errorMessage is a string that will be used to display an error message
  const { mutate, isError } = useMutation({
    // useMutation is a hook that allows you to mutate data
    mutationFn: async (user) => {
      // mutationFn is the function that will be called when you mutate data
      const response = await axios.post(
        "https://mighty-mini-minds-backend.onrender.com/users", // url is the url that you want to send the data to
        user
      );
      return response.data; // return the data from the response
    },
    onSuccess: (data) => {
      // onSuccess is a function that will be called when the mutation is successful
      console.log(data); // log the data
      navigate("/"); // navigate to the home page
    },
    onError: (err) => {
      // onError is a function that will be called when the mutation is unsuccessful
      console.log(err.message); // log the error message
      const error = JSON.stringify(err.response.data.message); 
      if (error) {
        setErrorMessage(error.replace(/"/g, '')); 
      } else { 
        setErrorMessage(JSON.stringify(err.message));
      }
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

  // check if user is authenticated if so redirect to home page
  // const auth = useAuth();
  // if(auth.isAuthenticated) {
  //   return <Navigate to="/" />;
  // }

  // form state - handles all inputs
  const [signupData, setSignupData] = useState({
    user: "",
    username: "",
    password: "",
    email: "",
    contactName: "",
    relationship: "",
    avatar: "",
  });
  // function to handle input changes
  function handleInputChange(event) {
    const { name, value } = event.target; // name is the name of the input, value is the value of the input
    setSignupData((prevState) => ({ ...prevState, [name]: value })); // set the state of the form data to the new value of the input
    console.log(signupData.avatar);
  }

  // function to handle form submission - this function will be called when the form is submitted
  function handleSubmit(event) {
    event.preventDefault(); // prevent the default behaviour of the form which is to refresh the page
    const user = {
      name: signupData.user,
      username: signupData.username,
      password: signupData.password,
      contact_email: signupData.email,
      contact_name: signupData.contactName,
      contact_relationship: signupData.relationship,
      avatar_url: signupData.avatar,
    };

    // check if all fields are filled in
    if (
      signupData.user !== "" &&
      signupData.username !== "" &&
      signupData.password !== "" &&
      signupData.email !== "" &&
      signupData.contactName !== "" &&
      signupData.relationship !== "" &&
      signupData.avatar !== ""
    ) {

      mutate(user); // mutate the data - this will call the mutationFn
      setIsRegistered(true); // set isRegistered to true
      console.log(signupData.avatar); // log the avatar url
      console.log(user.avatar_url); // log the avatar url
      console.log(user); // log the user

    } else {
      alert("Please fill in all fields 😀"); // alert the user to fill in all fields
    }
  }

  if (isRegistered) {
    // if isRegistered is true then show the success message
    setIsRegistered(false); // set isRegistered to false
  }

  return (
    <div className="flex flex-col items-center justify-around h-screen">
      <img src={logo} alt="logo" className="h-16 w-28 sm:h-24 sm:w-40 mt-4" />

      <div className="flex flex-col justify-around align-center w-11/12 sm:w-9/12 lg:w-8/12 xl:w-7/12 h-[72vh] sm:h-3/4 bg-white rounded-lg shadow-lg ">
        <h1 className="text-3xl sm:text-4xl mt-2 text-center">Sign Up</h1>
        {isError? <p className="mt-2 text-center text-base sm:text-lg">{errorMessage}</p> : null}
        <form className="flex flex-col mx-8 mt-4" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label className="text-sm sm:text-lg">What is your name?</label>
            {/* input user */}
            <input
              aria-label="your name"
              className="bg-skin-input shadow-md"
              name="user"
              value={signupData.user}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex justify-between mb-4">
            <div className="flex flex-col w-1/2 mr-2">
              <label className="text-sm sm:text-lg">Username</label>
              <input
                aria-label="username"
                className="bg-skin-input shadow-md"
                name="username"
                value={signupData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col w-1/2 ml-2">
              <label className="text-sm sm:text-lg">Password</label>
              <input
                aria-label="password"
                className="bg-skin-input shadow-md"
                name="password"
                value={signupData.password}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-sm sm:text-lg">
              Email of someone you trust*
            </label>
            <input
              aria-label="email of someone you trust"
              className="bg-skin-input shadow-md"
              name="email"
              value={signupData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex justify-between mb-4">
            <div className="flex flex-col w-1/2 mr-2">
              <label className="text-sm sm:text-lg">Contact name</label>
              <input
                aria-label="contact's name"
                className="bg-skin-input shadow-md"
                name="contactName"
                value={signupData.contactName}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col w-1/2 ml-2">
              <label className="text-sm sm:text-lg">Relationship</label>
              <input
                aria-label="relationship to your contact"
                className="bg-skin-input shadow-md"
                name="relationship"
                value={signupData.relationship}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex justify-between my-4 items-center">
            <div className="flex flex-col mb-4 w-1/3 sm:w-2/5">
              <label className="text-sm sm:text-lg">Choose avatar</label>
              <select
                aria-label="choose an avatar"
                className="bg-skin-input text-xs sm:text-base h-6 shadow-md"
                name="avatar"
                value={signupData.avatar}
                onChange={handleInputChange}
              >
                <option value="Bunny">Bunny</option>
                <option value="Tiger">Tiger</option>
                <option value="Goat">Goat</option>
                <option value="Cat">Cat</option>
              </select>
            </div>
            <div className="flex flex-col my-4 w-3/4 sm:w-2/3">
              <Avatar
                selection={signupData.avatar}
                animation={true}
                h={20}
                smh={28}
              />
            </div>
          </div>
          <div className="flex justify-center mt-4 mb-10">
            <button
              className="rounded-md w-32 h-10 sm:w-42 sm:h-16 sm:text-xl bg-skin-secondary shadow-md text-white  transition-colors duration-300 ease-in-out transform hover:scale-125"
              type="Submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className="underline mb-4 text-skin-primary">
        <NavLink to="/">Signed up? Login here!</NavLink>
      </div>
    </div>
  );
}
