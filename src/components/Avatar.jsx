import avatar from "../Img/number7V3.png"

export default function Avatar() {
  return (
    <div className="flex justify-center items-center">
      <div className="h-16 bg-skin-secondary rounded-full m-10">
        <img src={avatar} alt="avatar" className="h-15 w-16" />
      </div>
    </div>
  );
}

// sm:h-24
// sm:h-22 sm:w-24