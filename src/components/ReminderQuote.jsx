import reminderQuotes from "../data/reminderQuotes.json";

export default function ReminderQuote() {
  // Generate a random index within the range of the JSON data array length
  const randomIndex = Math.floor(Math.random() * reminderQuotes.length);

  // Retrieve the word of the day, definition, and example based on the random index
  const selectedReminder = reminderQuotes[randomIndex];

  return (
    <div className="flex flex-col items-center sm:h-56 sm:w-56">
      <p data-testid="reminder" className="italic text-xs sm:text-sm mt-14 sm:mt-16 h-28 w-48 px-10 sm:px-6">
        "{selectedReminder}"
      </p>
    </div>
  );
}
