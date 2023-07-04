import JournalEntry from "../components/JournalEntry";
import { useGet } from "../hooks/useGet";
import { useEffect, useState } from "react";

export default function Journal() {
  const { data: entries } = useGet(); // use the useGet hook to get the entries data from the backend
  const filteredEntries = entries?.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  ); // sort the entries by date and get the last 7 entries from the array
  // const [filteredEntries, setFilteredEntries] = useState();

  // useEffect(() => {
  // setFilteredEntries(entries? entries:null);
  // }, []);

  // function filterEntries(event) {
  //   console.log(event.target.value);
  //   if (event.target.value="All"){
  //     setFilteredEntries(entries);
  //   } else if (event.target.value === "7Days") {
  //     const last7Days = entries.filter((entry) => {
  //       const createdAt = new Date(entry.createdAt);
  //       const today = new Date();
  //       const timeDifference = today - createdAt;
  //       const millisecondsInOneDay = 1000 * 60 * 60 * 24;
  //       return timeDifference <= 7 * millisecondsInOneDay;
  //     });
  //     setFilteredEntries(last7Days);
  //   } else if (event.target.value === "LastMonth") {
  //     const last30Days = entries.filter((entry) => {
  //       const createdAt = new Date(entry.createdAt);
  //       const today = new Date();
  //       const timeDifference = today - createdAt;
  //       const millisecondsInOneDay = 1000 * 60 * 60 * 24;
  //       return timeDifference <= 30 * millisecondsInOneDay;
  //     });
  //     setFilteredEntries(last30Days);
  //   }
  // }

  return (
    <div className=" h-full w-full overflow-y-scroll bg-red ">
      <h1 className="font-bold text-2xl sm:text-4xl text-center mt-4">
        Check out your past journals
      </h1>
      <div className="flex justify-end items-center mt-4">
        <label className="font-bold sm:text-base">Search by</label>
        <select
          className="bg-skin-input text-xs sm:text-base mx-4 p-2 rounded-lg shadow-md outline-none"
          defaultValue="All"
        >
          <option value="All">All</option>
          <option value="7Days">Last 7 Days</option>
          <option value="LastMonth">Last Month</option>
        </select>
      </div>
      <div>
        {filteredEntries
          ? filteredEntries?.map((entry) => (
              <JournalEntry
                key={entry.uuid}
                date={new Date(entry.createdAt).toLocaleString("en-GB", {
                  weekday: "short",
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                res1={entry.answer_one}
                res2={entry.answer_two}
                res3={entry.answer_three}
                q1={entry.question_one}
                q2={entry.question_two}
                q3={entry.question_three}
                id={entry.uuid}
                share={entry.share}
              />
            ))
          : null}
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
