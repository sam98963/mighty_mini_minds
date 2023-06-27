import Avatar from "../components/Avatar";
import logo from "/logo-close.png";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "../auth/AuthProvider";
import { useNavigate, NavLink } from "react-router-dom";


export default function SignUp() {
  const [isRegistered, setIsRegistered] = useState(false);
  

  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: async (user) => {
      const response = await axios.post(
        "https://mighty-mini-minds-backend.onrender.com/users",
        user
      );
      return response.data;
    },
    onSuccess: (data) => { 
      console.log(data);
      navigate("/");
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

   // onError: (err) => {
    //   console.log(err.message);
    // }

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
    const { name, value } = event.target;
    setSignupData((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // If any inputs empty - give alert, otherwise submit form
    const user = {
      name: signupData.user,
      username: signupData.username,
      password: signupData.password,
      contact_email: signupData.email,
      contact_name: signupData.contactName,
      contact_relationship: signupData.relationship,
      avatar_url: signupData.avatar
    };

    if (
      signupData.user !== "" &&
      signupData.username !== "" &&
      signupData.password !== "" &&
      signupData.email !== "" &&
      signupData.contactName !== "" &&
      signupData.relationship !== "" &&
      signupData.avatar !== ""
    ) {
      mutate(user);
      setIsRegistered(true);
      console.log(signupData.avatar)
      console.log(user.avatar_url)
      console.log(user)

    } else {
      alert("Please fill in all fields 😀");
    }
  }
  if(isRegistered) {
    setIsRegistered(false);
  }
  return (
    <div className="flex flex-col items-center justify-around h-screen">
      <img src={logo} alt="logo" className="h-16 w-28 sm:h-24 sm:w-40 mt-4" />

      <div className="flex flex-col justify-around align-center w-11/12 sm:w-9/12 lg:w-8/12 xl:w-7/12 h-[72vh] sm:h-3/4 bg-white rounded-lg shadow-lg ">
        <h1 className="text-3xl sm:text-4xl mt-2 text-center">Sign Up</h1>
        <form className="flex flex-col mx-8 mt-4" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label className="text-sm sm:text-base">What is your name?</label>
            {/* input user */}
            <input
              className="bg-skin-input shadow-md"
              name="user"
              value={signupData.user}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex justify-between mb-4">
            <div className="flex flex-col w-1/2 mr-2">
              <label className="text-sm sm:text-base">Username</label>
              <input
                className="bg-skin-input shadow-md"
                name="username"
                value={signupData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col w-1/2 ml-2">
              <label className="text-sm sm:text-base">Password</label>
              <input
                className="bg-skin-input shadow-md"
                name="password"
                value={signupData.password}
                onChange={handleInputChange}
                type="password"
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-sm sm:text-base">
              Email of someone you trust*
            </label>
            <input
              className="bg-skin-input shadow-md"
              name="email"
              value={signupData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex justify-between mb-4">
            <div className="flex flex-col w-1/2 mr-2">
              <label className="text-sm sm:text-base">Contact name</label>
              <input
                className="bg-skin-input shadow-md"
                name="contactName"
                value={signupData.contactName}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col w-1/2 ml-2">
              <label className="text-sm sm:text-base">Relationship</label>
              <input
                className="bg-skin-input shadow-md"
                name="relationship"
                value={signupData.relationship}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex justify-between my-4 items-center">
            <div className="flex flex-col mb-4 w-1/3 sm:w-2/5">
              <label className="text-sm sm:text-base">Choose avatar</label>
              <select
                className="bg-skin-input text-xs sm:text-base h-6 shadow-md"
                name="avatar"
                value={signupData.avatar}
                onChange={handleInputChange}
              >
                <option value="Bunny">Bunny</option>
                <option value="Chicken">Chicken</option>
                <option value="Goat">Goat</option>
                <option value="Cat">Cat</option>
              </select>
            </div>
            <div className="flex flex-col my-4 w-3/4 sm:w-2/3">
              <Avatar selection={signupData.avatar} animation={true} h={20} smh={28}/> 
            </div>
          </div>
          <div className= "flex justify-center mt-4 mb-10">
            <button className="rounded-md w-32 h-10 sm:w-42 sm:h-16 sm:text-xl bg-skin-secondary shadow-md text-white  transition-colors duration-300 ease-in-out transform hover:scale-125" type="Submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className="underline mt-4">
      <NavLink to="/">Signed up? Login here!</NavLink>
      </div>
    </div>
  );
}
