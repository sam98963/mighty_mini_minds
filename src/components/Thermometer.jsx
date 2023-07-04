import ThermometerPic from "../Img/Therm_final.png";
import ThermometerImage from "../Img/Therm_final_rectangle.png";

export default function Thermometer(props) {
  // function to take in props.mood as a value number, and reduce the value of the percentage
  // add that half to the prefilled amount

  function moodValue() {
    let mood = props.mood * 0.6;
    mood += 40;
    mood = `${mood}%`;
    return mood;
  }

  function getGradientColor(height) {
    let gradientColor = "";

    if (height <= 33) {
      gradientColor = "rgb(255,140,0)";
    } else if (height <= 66) {
      gradientColor = "rgb(255, 240, 0)";
    } else {
      gradientColor = "rgb(0, 255, 145)";
    }

    return gradientColor;
  }

  //   function getGradientColor(height) {
  //   let gradientColor = "";

  //   if (height <= 33) {
  //     const red = 238;
  //     const green = Math.round(30 + height * (174 - 30) / 33);
  //     const blue = Math.round(11 + height * (55 - 11) / 33);
  //     gradientColor = `rgb(${red}, ${green}, ${blue})`;
  //   } else if (height <= 66) {
  //     const red = Math.round(238 - (height - 33) * (238 - 228) / 33);
  //     const green = Math.round(174 + (height - 33) * (255 - 174) / 33);
  //     const blue = Math.round(55 + (height - 33) * (145 - 55) / 33);
  //     gradientColor = `rgb(${red}, ${green}, ${blue})`;
  //   } else {
  //     const red = Math.round(228 - (height - 66) * (228 - 0) / 34);
  //     const green = Math.round(255 - (height - 66) * (255 - 0) / 34);
  //     const blue = Math.round(145 - (height - 66) * (145 - 0) / 34);
  //     gradientColor = `rgb(${red}, ${green}, ${blue})`;
  //   }

  //   return `linear-gradient(to bottom, ${gradientColor} ${height}%,  ${gradientColor} ${height}%)`;
  // }


  const thermometerStyle = { 
    height: moodValue(),
    // background: getGradientColor(props.mood),
    background:
      "linear-gradient(0deg, rgba(238,102,11,1) 5%, rgba(235,224,3,0.9780287114845938) 40%, rgba(0,255,145,1) 100%",
  };

  return (
    <div className=" w-12 relative mt-24 h-32 sm:h-48 sm:w-16 ml-8">
      <div
        className="w-10/12 bg-green-300 absolute bottom-2 left-0 right-0 mx-auto z-0 sm:max-h-[95%] max-h-[93%]"
        style={thermometerStyle}
      ></div>
      <img
        src={ThermometerImage}
        alt="thermometer"
        className="h-full w-full z-10"
        style={{ position: "relative", zIndex: 1 }}
      />
    </div>
  );
}
