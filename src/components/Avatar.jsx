import bunnyAvatar from "../Img/avatar-animations/bunnyFrame-1.png";
import chickenAvatar from "../Img/avatar-animations/chickenFrame-1.png";
import goatAvatar from "../Img/avatar-animations/goatFrame-1.png";
import catAvatar from "../Img/avatar-animations/catFrame-1.png";
import { useGetUser } from "../hooks/useGetUser";

export default function Avatar({ animation, h, smw, smh, selection }) {
  // selection is a prop that is passed in from the Profile.jsx file to determine which avatar to display on the profile page

  const { data: avatar } = useGetUser(); // get the user's avatar from the database using the useGetUser hook and store it in the avatar variable
  const userAvatar = avatar ? avatar.avatar_url : null; // if the avatar variable is not null, store the avatar_url in the userAvatar variable, otherwise store null in the userAvatar variable

  let imageURL = bunnyAvatar; // set the default image to bunnyAvatar (this is the default avatar that is displayed when the user first signs up)

  if (userAvatar === "Bunny" || selection === "Bunny") {
    // if the user's avatar is Bunny or the selection prop is Bunny, set the imageURL to bunnyAvatar
    imageURL = bunnyAvatar;
  }
  if (userAvatar === "Goat" || selection === "Goat") {
    // if the user's avatar is Goat or the selection prop is Goat, set the imageURL to goatAvatar
    imageURL = goatAvatar;
  }
  if (userAvatar === "Cat" || selection === "Cat") {
    // if the user's avatar is Cat or the selection prop is Cat, set the imageURL to catAvatar
    imageURL = catAvatar;
  }
  if (userAvatar === "Chicken" || selection === "Chicken") {
    // if the user's avatar is Chicken or the selection prop is Chicken, set the imageURL to chickenAvatar
    imageURL = chickenAvatar;
  } else {
  }
  const bounceAnimation = animation ? "animate-bounce" : ""; // if the animation prop is true, set the bounceAnimation variable to animate-bounce, otherwise set it to an empty string
  return (
    <div className="flex justify-center items-center">
      {/* <img src={avatar} alt="avatar" className={`h-12 sm:h-20 sm:w-20 ${animation}`} /> */}
      <img
        src={imageURL}
        alt="avatar"
        className={`h-${h} sm:w-${smw} sm:h-${smh} ${bounceAnimation}`}
      />
    </div>
  );
}
