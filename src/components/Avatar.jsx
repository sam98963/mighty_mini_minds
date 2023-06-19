import avatar from "../Img/number7V3.png"

export default function Avatar({animation}) {
  return (
    <div className="flex justify-center items-center">
      <img src={avatar} alt="avatar" className={`h-12 sm:h-20 sm:w-20 ${animation}`} />
    </div>
  );
}

// sm:h-24
// sm:h-22 sm:w-24