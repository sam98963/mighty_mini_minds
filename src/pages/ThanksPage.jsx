import avatar from "../Img/number7V3.png"
import { NavLink } from "react-router-dom";
import Confetti from 'react-confetti';

export default function ThanksPage(){
    return(
       <div className="flex flex-col justify-around items-center w-full h-full overflow-hidden">
        <Confetti
          wind={0.04}
          recycle={false}
          drawShape={ctx => {
            ctx.beginPath()
            for(let i = 0; i < 22; i++) {
              const angle = 0.35 * i
              const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
              const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
              ctx.lineTo(x, y)
            }
            ctx.stroke()
            ctx.closePath()
          }}
        />
        <h1 className="text-2xl sm:text-4xl text-center px-4">Thanks for checking in, see you tomorrow!</h1>
        <img src={avatar} alt="avatar" className="h-30 w-32 sm:h-60 sm:w-64" />
        <h2 className="text-xl sm:text-2xl text-center px-4">Would you like to share your thoughts with someone?</h2>
        <div className="flex flex-row justify-around items-center w-full">
        <NavLink to="../moodMap"><button className="text-white shadow-md text-4xl transition-colors duration-300 ease-in-out transform hover:scale-125 bg-skin-secondary rounded-md py-3 px-5">✕</button></NavLink>
        <NavLink to="../moodMap"><button className="text-white shadow-md text-4xl transition-colors duration-300 ease-in-out transform hover:scale-125 bg-skin-secondary rounded-md py-3 px-5">✓</button></NavLink>
        </div>
        </div>
    )
  }