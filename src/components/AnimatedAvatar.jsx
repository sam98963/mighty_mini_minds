import { useEffect } from "react";
import { useGetUser } from "../hooks/useGetUser";
import bunnyFrame1 from "../Img/avatar-animations/bunnyFrame-1.png";
import bunnyFrame2 from "../Img/avatar-animations/bunnyFrame-2.png";
import bunnyFrame3 from "../Img/avatar-animations/bunnyFrame-3.png";
import bunnyFrame4 from "../Img/avatar-animations/bunnyFrame-4.png";
import chickenFrame1 from "../Img/avatar-animations/chickenFrame-1.png";
import chickenFrame2 from "../Img/avatar-animations/chickenFrame-2.png";
import chickenFrame3 from "../Img/avatar-animations/chickenFrame-3.png";
import chickenFrame4 from "../Img/avatar-animations/chickenFrame-4.png";
import goatFrame1 from "../Img/avatar-animations/goatFrame-1.png";
import goatFrame2 from "../Img/avatar-animations/goatFrame-2.png";
import goatFrame3 from "../Img/avatar-animations/goatFrame-3.png";
import goatFrame4 from "../Img/avatar-animations/goatFrame-4.png";
import catFrame1 from "../Img/avatar-animations/catFrame-1.png";
import catFrame2 from "../Img/avatar-animations/catFrame-2.png";
import catFrame3 from "../Img/avatar-animations/catFrame-3.png";
import catFrame4 from "../Img/avatar-animations/catFrame-4.png";

export default function AnimatedAvatar({
  height,
  width,
  smh,
  smw,
  largeHeight,
  largeWidth,
}) {
  const { data: avatar } = useGetUser();
  const userAvatar = avatar ? avatar.avatar_url : null;
  const bunny = [bunnyFrame1, bunnyFrame2, bunnyFrame3, bunnyFrame4]; 
  const chicken = [chickenFrame1, chickenFrame2, chickenFrame3, chickenFrame4]; 
  const goat = [goatFrame1, goatFrame2, goatFrame3, goatFrame4]; 
  const cat = [catFrame1, catFrame2, catFrame3, catFrame4]; 
  let selectedAvatar = bunny;
  switch (userAvatar) {
    case "Bunny":
      selectedAvatar = bunny;
      break;
    case "Chicken":
      selectedAvatar = chicken;
      break;
    case "Goat":
      selectedAvatar = goat;
      break;
    case "Cat":
      selectedAvatar = cat;
      break;
    default:
      selectedAvatar = bunny;
  }

  const totalFrames = 4;
  const animationDuration = 2000;
  const timePerFrame = animationDuration / totalFrames;

  let timeWhenLastUpdate;
  let frameNumber = 0;
  let isReversed = false;

  useEffect(() => {
    const element = document.querySelector(".avatar-animation");

    // Recursive function for updating the animation
    function step(startTime) {
      if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;
      const timeFromLastUpdate = startTime - timeWhenLastUpdate;
      
      if (timeFromLastUpdate > timePerFrame) {
        element.src = selectedAvatar[frameNumber];
        timeWhenLastUpdate = startTime;

        if (!isReversed) {
          frameNumber = (frameNumber + 1) % totalFrames;
          if (frameNumber === totalFrames - 1) {
            isReversed = true;
          }
        } else {
          frameNumber = frameNumber === 0 ? totalFrames - 2 : frameNumber - 1;
          if (frameNumber === 0) {
            isReversed = false;
          }
        }
      }
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, []); 

  return (
    <>
      <img
        data-testid="animated-avatar"
        className={`avatar-animation sm:h-${smh} sm:w-${smw} h-${height} w-${width} ${largeHeight} ${largeWidth}`}
        src={selectedAvatar[0]}
        alt="Animated Avatar"
      />
    </>
  );
}
