import reminderQuotes from "../data/reminderQuotes.json";

export default function ReminderQuote() {
  // Generate a random index within the range of the JSON data array length
  const randomIndex = Math.floor(Math.random() * reminderQuotes.length);

  // Retrieve the word of the day, definition, and example based on the random index
  const selectedReminder = reminderQuotes[randomIndex];

  return (
    <div className="flex flex-col items-center">
      <p className="italic text-xs sm:text-base">"{selectedReminder}"</p>
    </div>
  );
}
