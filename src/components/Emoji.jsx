export default function Emoji({ mood, date }) {
  const emojis = ["🙁", "😕", "😐", "🙂", "😁"];

  return (
    <div className="flex flex-col items-center">
      <p className="sm:text-base text-sm text-center">{date}</p>
      <p className="sm:text-4xl text-xl px-1 sm:px-4 transition-all duration-300 ease-in-out transform hover:scale-125">
        {emojis[mood]}
      </p>{" "}
      {/* mood is a number between 0 and 4  */}
    </div>
  );
}
