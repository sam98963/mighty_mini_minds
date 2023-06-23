import React, { useEffect } from 'react';
import bunny1 from '../Img/avatar-animations/bunny-1.png';
import bunny2 from '../Img/avatar-animations/bunny-2.png';
import bunny3 from '../Img/avatar-animations/bunny-3.png';
import bunny4 from '../Img/avatar-animations/bunny-4.png';

export default function AnimatedAvatar() {
  // Array of bunny images
  const bunnies = [bunny1, bunny2, bunny3, bunny4];
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
        // Update the source attribute of the element with the current bunny image
        element.src = bunnies[frameNumber];
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
      <img className="avatar-animation" src={bunnies[0]} alt="Animated Avatar" />
    </>
  );
}
