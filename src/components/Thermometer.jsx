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
    let height = props.mood
  return (
    <div className="h-60 w-20 relative">
      <div className="w-10/12 bg-green-300 absolute bottom-2 left-0 right-0 mx-auto z-0" style={{ height: height }}></div>
      <img
        src={ThermometerPic}
        alt="thermometer"
        className="h-full w-full z-10"
        style={{ position: "relative", zIndex: 1 }}
      />
    </div>
  );
}
