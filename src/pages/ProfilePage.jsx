import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import logo from "../Img/logo-close.png";
import { useEffect, useState } from "react";
import { useGetUser } from "../hooks/useGetUser";
import Avatar from "../components/Avatar";
import { NavLink } from "react-router-dom";

export default function ProfilePage() {
  const userId = localStorage.getItem("userId"); 
  const url = `https://mighty-mini-minds-backend.onrender.com/users/${userId}`; 
  
  const [signupData, setSignupData] = useState({
    user: "",
    username: "",
    password: "",
    email: "",
    contactName: "",
    relationship: "",
    avatar: "",
  });

  const { data: user } = useGetUser();

  useEffect(() => {
    if (user) {
      setSignupData({
        user: user.name,
        username: user.username,
        password: "",
        email: user.contact_email,
        contactName: user.contact_name,
        relationship: user.contact_relationship,
        avatar: user.avatar_url,
      });
    }
  }, [user]);
  
  const { mutate } = useMutation({
    mutationFn: async (user) => {
      const response = await axios.patch(url.replace(/"/g, ""), user); 
      return response.data; 
    },
    onError: (error) => {
      console.log(error); 
    },
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setSignupData((prevState) => ({ ...prevState, [name]: value }));
  }

  // function to handle form submission and send patch request
  function handleSubmit(event) {
    event.preventDefault();
    const user = {
      name: signupData.user,
      username: signupData.username,
      password: signupData.password,
      contact_email: signupData.email,
      contact_name: signupData.contactName,
      contact_relationship: signupData.relationship,
      avatar_url: signupData.avatar,
    };
    mutate(user);
    alert("Your profile has been updated!");
  }

  return (
    <div className="flex flex-col items-center justify-between">

      <div className="w-full">
        <form
          className="flex flex-col mx-8 my-8 justify-between h-full"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 sm:mt-4">
            <label className="text-sm sm:text-lg mr-2">Name:</label>
            <input
              aria-label="your name"
              className="bg-skin-input shadow-md w-4/5"
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
                required
                aria-label="password"
                className="bg-skin-input shadow-md"
                name="password"
                value={signupData.password}
                onChange={handleInputChange}
                type="password"
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
                className="bg-skin-input text-sm sm:text-base h-6 shadow-md"
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
            <div className="flex flex-col mt-2 w-3/4 sm:w-2/3">
              <Avatar
                selection={signupData.avatar}
                animation={true}
                h={20}
                w={20}
                smh={32}
                smw={32}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-sm sm:text-lg">
              Please input your old password to update your profile:
            </label>
            <input
              required
              aria-label="input your old password to update your profile"
              className="bg-skin-input shadow-md"
              name="oldPassword"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-center mt-12">
            <button
              className="rounded-md w-32 h-14 sm:w-40 sm:h-16 sm:text-xl bg-skin-secondary shadow-md text-white  transition-colors duration-300 ease-in-out transform hover:scale-125"
              type="Submit"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
      <div className="underline my-6 text-skin-primary text-base sm:text-lg">
        <NavLink to="/appLayout/journal">Back to Journal</NavLink>
      </div>
    </div>
  );
}
