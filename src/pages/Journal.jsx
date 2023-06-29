import JournalEntry from "../components/JournalEntry";
import { useGet } from "../hooks/useGet";


export default function Journal() {
const {data: entries, isLoading, isError, error} = useGet();

entries? entries.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)): null;


    return (
        <div className=" h-full w-full overflow-y-scroll bg-red ">
            {/* <div>{isLoading? `loading...` : isError? JSON.stringify(error) : JSON.stringify(entries)}</div> */}
            <h1 className="font-bold text-2xl sm:text-4xl text-center mt-4">Check out your past journals</h1>
            <div className="flex justify-end items-center mt-4">
            <label className="font-bold sm:text-base">Search by</label>
              <select className="bg-skin-input text-xs sm:text-base mx-4 p-2 rounded-lg shadow-md outline-none">
                <option value="All">All</option>
                <option value="7Days">Last 7 Days</option>
                <option value="LastMonth">Last Month</option>
              </select>
              </div>
          <div>
          {entries? entries.map((entry) => (
            
        <JournalEntry
          key={entry.uuid} // Ensure each entry has a unique key
          date={new Date(entry.createdAt).toLocaleString('en-GB', {
            weekday: 'short', // can use 'long'
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })} // Convert to DD-MM-YYYY format
          res1={entry.answer_one}
          res2={entry.answer_two}
          res3={entry.answer_three}
          q1={entry.question_one}
          q2={entry.question_two}
          q3={entry.question_three}
          id={entry.uuid}
        />
      )) : null}
      </div>
        </div>
    );
}


// {sortedEntries.map((entry) => {
//   const entryDate = new Date(entry.createdAt);
//   const options = {
//     weekday: 'long',
//     day: 'numeric',
//     month: 'long',
//     hour: '2-digit',
//     minute: '2-digit'
//   };
//   const formattedDate = entryDate.toLocaleString('en-US', options);
//   const dayNumber = entryDate.getDate();
//   const daySuffix = getDaySuffix(dayNumber);

//   return (
//     <JournalEntry
//       key={entry.uuid}
//       date={formattedDate.replace('{day}', `${daySuffix} of`)} // Replace placeholder with day suffix
//       res1={entry.answer_one}
//       res2={entry.answer_two}
//       res3={entry.answer_three}
//     />
//   );
// })}