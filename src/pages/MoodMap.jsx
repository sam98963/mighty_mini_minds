import AnimatedAvatar from "../components/AnimatedAvatar";
import Emoji from "../components/Emoji";
import Thermometer from "../components/Thermometer";
import WordOfTheDay from "../components/WordOfTheDay";
// import SpeechBubble from "../Img/speech-bubble.png";
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReminderQuote from "../components/ReminderQuote";
// import moodData from "../data/data.json";
import { useGet } from "../hooks/useGet";
import { useState, useEffect } from "react";
import axios from "axios"

export default function MoodMap() {
  const [sharePopup, setSharePopup] = useState(false)
  const [popUpDone, setPopUpDone] = useState(false)
  const [shareMessageTrue, setShareMessageTrue] = useState(false)
  const [message, setMessage] = useState('');
  const {data: entries, isLoading, isError, error} = useGet();
  const sortedEntries = entries?.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  ).slice(0, 7).sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  
  const uuid = localStorage.getItem("userId")

  const handleEmail = async () => { 
    setSharePopup(false)
    console.log("function called")
    try {
      const response = await axios.post('https://mighty-mini-minds-backend.onrender.com/sendbademail/'+uuid.replace(/"/g, ''));
      console.log(response);
      setShareMessageTrue(true)
      setMessage("Thanks for sharing your entry! It's on its way to your trusted person!")
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  }

  function shareMessage() {
    setMessage('Would you like to share your thoughts with someone?');
    setShareMessageTrue(true);
}



useEffect(() => {
  const timeout = setTimeout(() => {
    setShareMessageTrue(false);
  }, 5000);

  return () => {
    clearTimeout(timeout);
  };
}, [shareMessageTrue]);

  function moodPercentage() {
    if (!sortedEntries || sortedEntries.length === 0) {
      return 0;
    }

    let totalMood = 0;

    sortedEntries.forEach((entry) => {
      totalMood += entry.mood;
    });

    const averageMood = totalMood / sortedEntries.length;
    const moodPercentageVariable = (averageMood) * 25;
    if(moodPercentageVariable < 40 && popUpDone === false) {
     setSharePopup(true)
     setPopUpDone(true)
    } 

    return moodPercentageVariable;
  }

  

  return (
    <div className="flex flex-col justify-around items-center w-full h-full">
      <h1 data-testid = "h1" className="text-4xl sm:text-4xl text-center px-4 mt-4">My Week</h1>
      <div className="flex justify-between">
      {sortedEntries? sortedEntries.map((entry) => (
        <Emoji data-testid="emoji-component"
          key={entry.id}
          mood={(entry.mood)} 
          date={new Date(entry.createdAt).toLocaleString('en-GB', {
            weekday: 'short',
          })}
        />
      )) : null}
      </div>
      <WordOfTheDay data-testid="word-of-the-day"/>
      <div className="flex w-full justify-evenly mt-4">
        {sharePopup?<button aria-label="share-button" onMouseOver={shareMessage} onClick={handleEmail} className='rounded-md w-10 h-10 bg-skin-secondary text-white transition-colors duration-300 ease-in-out transform hover:scale-125 mx-3'><FontAwesomeIcon icon={faShare}/></button>:null}
        {shareMessageTrue? <p className="text-xs">{message}</p>: null}
        <Thermometer mood={moodPercentage()} />
        {/* {props.share === false? <button aria-label="share-button"  onMouseOver={shareMessage} onClick={()=>handleShare(props.id)} className='rounded-md w-10 h-10 bg-skin-secondary text-white transition-colors duration-300 ease-in-out transform hover:scale-125'><FontAwesomeIcon icon={faShare}  /></button>: null} */}
        <div className="flex flex-row relative">
          <div className="flex flex-wrap mb-32 text-center items-center justify-center w-36 sm:w-44 sm:max-h-48 sm:max-w-48 bg-contain bg-no-repeat bg-center bg-[url('./img/speech-bubble.avif')]">
            <ReminderQuote />
          </div>
          <div className="transform -scale-x-100 mt-36 sm:mt-40 mr-4 sm:mr-0">
          <AnimatedAvatar height={20} smh={28} />
          </div>
        </div>
      </div>
    </div>
  );
}
