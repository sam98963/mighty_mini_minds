import bunny1 from "../Img/avatar-animations/bunny-1.png"
import bunny2 from "../Img/avatar-animations/bunny-2.png"
import bunny3 from "../Img/avatar-animations/bunny-3.png"
import bunny4 from "../Img/avatar-animations/bunny-4.png"
import bunny5 from "../Img/avatar-animations/bunny-5.png"
import bunny6 from "../Img/avatar-animations/bunny-6.png"


export default function AnimatedAvatar(){
  const bunnies = [bunny1, bunny2, bunny3, bunny4, bunny5, bunny6]
  const element = document.querySelector('.avatar-animation');
  const totalFrames = 5;
  const animationDuration = 2000;
  const timePerFrame = animationDuration / totalFrames;
  let timeWhenLastUpdate;
  let timeFromLastUpdate;
  let frameNumber = 0;
  
  function step(startTime) {
    if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;
  
    timeFromLastUpdate = startTime - timeWhenLastUpdate;
  
    if (timeFromLastUpdate > timePerFrame) {
      element.src = bunnies[frameNumber]
      timeWhenLastUpdate = startTime;
  
      if (frameNumber >= totalFrames) {
        frameNumber = 0;
      } else {
        frameNumber = frameNumber + 1;
      }        
    }
  
    requestAnimationFrame(step);
  }
  
  requestAnimationFrame(step);
  return(
    <>
      <img className="avatar-animation" src={bunnies[0]}>
    </img>
    </>
  )  
}