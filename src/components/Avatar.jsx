import avatar from "../Img/number7V3.png";

export default function Avatar({ animation, h, smw, smh }) {
  return (
    <div className="flex justify-center items-center">
      {/* <img src={avatar} alt="avatar" className={`h-12 sm:h-20 sm:w-20 ${animation}`} /> */}
      <img src={avatar} alt="avatar" className={`h-${h} sm:w-${smw} sm:h-${smh} ${animation}`} />
    </div>
  );
}

// sm:h-24
// sm:h-22 sm:w-24
