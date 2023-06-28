import bunnyAvatar from "../Img//avatar-animations/bunnyFrame-1.png";
import chickenAvatar from "../Img//avatar-animations/chickenFrame-1.png";
import goatAvatar from "../Img//avatar-animations/goatFrame-1.png";
import catAvatar from "../Img//avatar-animations/catFrame-1.png";
import { useGetUser } from "../hooks/useGetUser";

export default function Avatar({ animation, h, smw, smh, selection }) {

  const {data: avatar} = useGetUser();
  const userAvatar = avatar?avatar.avatar_url:null;
  console.log("userAvatar", userAvatar)

  let imageURL = bunnyAvatar

  if(userAvatar === "Bunny" || selection === "Bunny"){
    imageURL = bunnyAvatar
  }
  if(userAvatar === "Goat" || selection === "Goat"){
    imageURL = goatAvatar
  }
  if(userAvatar === "Cat" || selection === "Cat"){
    imageURL = catAvatar
  }
  if(userAvatar === "Chicken" || selection === "Chicken"){
    imageURL = chickenAvatar
  } else{}
  const bounceAnimation = animation ? "animate-bounce" : "";
  return (
    <div className="flex justify-center items-center">
      {/* <img src={avatar} alt="avatar" className={`h-12 sm:h-20 sm:w-20 ${animation}`} /> */}
      <img src={imageURL} alt="avatar" className={`h-${h} sm:w-${smw} sm:h-${smh} ${bounceAnimation}`} />
    </div>
  );
}

