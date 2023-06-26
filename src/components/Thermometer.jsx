// import ThermometerPic from "../Img/Therm_final.png";

// export default function Thermometer(props) {
//   return (
//     <div className="h-60 w-24">
//       <img
//         src={ThermometerPic}
//         alt="thermometer"
//         className="h-full w-full z-10"
//       />
//       <div className={`h-${props.mood} w-5 bg-black`}></div>

//       {/* <div className="h-20 w-5 bg-black"></div> */}
//     </div>
//   );
// }
import ThermometerPic from "../Img/Therm_final.png";

export default function Thermometer(props) {
  // function to take in props.mood as a value number, and reduce the value of the percentage
  // add that half to the prefilled amount

  function moodValue() {
    let mood = props.mood * 0.6;
    mood += 40;
    mood = `${mood}%`;
    return mood;
  }
  // h-60 w-20 relative"
  return (
    <div className=" w-12 relative mt-24 h-32 sm:h-48 sm:w-16 ml-8">
      <div
        className="w-10/12 bg-green-300 absolute bottom-2 left-0 right-0 mx-auto z-0"
        style={{ height: moodValue() }}
      ></div>
      <img
        src={ThermometerPic}
        alt="thermometer"
        className="h-full w-full z-10"
        style={{ position: "relative", zIndex: 1 }}
      />
    </div>
  );
}
