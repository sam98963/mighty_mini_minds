import bunnyAvatar from "../Img/avatar-animations/bunnyFrame-1.png";
import chickenAvatar from "../Img/avatar-animations/chickenFrame-1.png";
import goatAvatar from "../Img/avatar-animations/goatFrame-1.png";
import catAvatar from "../Img/avatar-animations/catFrame-1.png";
import { useGetUser } from "../hooks/useGetUser";

export default function Avatar({ animation, h, w, smw, smh, selection }) {
  const { data: avatar } = useGetUser(); 
  const userAvatar = avatar ? avatar.avatar_url : null;

  // if user has already logged in and selected an avatar other than bunny, that avatar will show up initially on the sign up, if the user clicks away from the bunny on the dropdown and then clicks back on bunny, the bunny will display as intended
  let imageURL = bunnyAvatar; 
  switch (selection || userAvatar) {
    case "Bunny":
      imageURL = bunnyAvatar;
      break;
    case "Chicken":
      imageURL = chickenAvatar;
      break;
    case "Goat":
      imageURL = goatAvatar;
      break;
    case "Cat":
      imageURL = catAvatar;
      break;
    default:
      imageURL = bunnyAvatar;
  }

  const bounceAnimation = animation ? "animate-bounce" : ""; 
  return (
    <div className="flex justify-center items-center">
      <img
        src={imageURL}
        alt="avatar"
        className={`h-${h} w-${w} sm:w-${smw} sm:h-${smh} ${bounceAnimation}`}
      />
    </div>
  );
}
