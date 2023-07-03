import { useEffect } from 'react';
import { useGetUser } from '../hooks/useGetUser';
import bunnyFrame1 from '../Img/avatar-animations/bunnyFrame-1.png';
import bunnyFrame2 from '../Img/avatar-animations/bunnyFrame-2.png';
import bunnyFrame3 from '../Img/avatar-animations/bunnyFrame-3.png';
import bunnyFrame4 from '../Img/avatar-animations/bunnyFrame-4.png';
import chickenFrame1 from '../Img/avatar-animations/chickenFrame-1.png';
import chickenFrame2 from '../Img/avatar-animations/chickenFrame-2.png';
import chickenFrame3 from '../Img/avatar-animations/chickenFrame-3.png';
import chickenFrame4 from '../Img/avatar-animations/chickenFrame-4.png';
import goatFrame1 from '../Img/avatar-animations/goatFrame-1.png';
import goatFrame2 from '../Img/avatar-animations/goatFrame-2.png';
import goatFrame3 from '../Img/avatar-animations/goatFrame-3.png';
import goatFrame4 from '../Img/avatar-animations/goatFrame-4.png';
import catFrame1 from '../Img/avatar-animations/catFrame-1.png';
import catFrame2 from '../Img/avatar-animations/catFrame-2.png';
import catFrame3 from '../Img/avatar-animations/catFrame-3.png';
import catFrame4 from '../Img/avatar-animations/catFrame-4.png';

export default function AnimatedAvatar({height, width, smh, smw, largeHeight, largeWidth}) {
  const {data: avatar} = useGetUser();
  const userAvatar = avatar?avatar.avatar_url:null;
  // Array of bunny images
  const bunny = [bunnyFrame1, bunnyFrame2, bunnyFrame3, bunnyFrame4];
  const chicken = [chickenFrame1, chickenFrame2, chickenFrame3, chickenFrame4];
  const goat = [goatFrame1, goatFrame2, goatFrame3, goatFrame4];
  const cat = [catFrame1, catFrame2, catFrame3, catFrame4];
  let selectedAvatar = bunny;
  switch (userAvatar) {
    case "Bunny":
      selectedAvatar = bunny
      break;
    case "Chicken":
      selectedAvatar = chicken
      break;
    case "Goat":
      selectedAvatar = goat
      break;
    case "Cat":
      selectedAvatar = cat
      break;
    default:
      selectedAvatar = bunny
  }

  // Total number of frames in the animation
  const totalFrames = 4;
  // Total duration of the animation (in milliseconds)
  const animationDuration = 2000;
  // Time per frame (in milliseconds)
  const timePerFrame = animationDuration / totalFrames;

  // Variables for tracking animation state
  let timeWhenLastUpdate;
  let timeFromLastUpdate;
  let frameNumber = 0;
  let isReversed = false;

  useEffect(() => {
    // Find the DOM element with the class name 'avatar-animation'
    const element = document.querySelector('.avatar-animation');

    // Recursive function for updating the animation
    function step(startTime) {
      // If it's the first update, set the initial time
      if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;

      // Calculate the time elapsed since the last update
      const timeFromLastUpdate = startTime - timeWhenLastUpdate;

      // If the elapsed time exceeds the time per frame
      if (timeFromLastUpdate > timePerFrame) {
        // Update the source attribute of the element with the current avatar image
        element.src = selectedAvatar[frameNumber];
        // Update the time of the last update
        timeWhenLastUpdate = startTime;

        // If the animation is not reversed
        if (!isReversed) {
          // Increment the frame number and wrap around if it exceeds the total frames
          frameNumber = (frameNumber + 1) % totalFrames;
          // If the frame number reaches the last frame, set isReversed to true
          if (frameNumber === totalFrames - 1) {
            isReversed = true;
          }
        } else {
          // If the animation is reversed
          // Decrement the frame number and wrap around if it reaches 0
          frameNumber = (frameNumber === 0) ? totalFrames - 2 : frameNumber - 1;
          // If the frame number reaches 0, set isReversed to false
          if (frameNumber === 0) {
            isReversed = false;
          }
        }
      }
      // Request the next animation frame
      requestAnimationFrame(step);
    }
    // Start the animation by requesting the first animation frame
    requestAnimationFrame(step);
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <img data-testid = "animated-avatar" className={`avatar-animation sm:h-${smh} sm:w-${smw} h-${height} w-${width} ${largeHeight} ${largeWidth}`} src={selectedAvatar[0]} alt="Animated Avatar" />
    </>
  );
}
