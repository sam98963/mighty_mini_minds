import { useState } from "react";

export const entryState = {
  // entryState is an object that will be used to store the user's input
  mood: 0,
  questionOne: null,
  questionTwo: null,
  questionThree: null,
  answerOne: null,
  answerTwo: null,
  answerThree: null,
  share: false,
};

export function useEntryState() {
  // useEntryState is a function that will be used to store the user's input
  const [entry, setEntry] = useState(entryState); // entry is an object that will be used to store the user's input

  return { entry, setEntry }; // return the entry object and the setEntry function
}


// filter dates
// {/* <div className="flex justify-end items-center mt-4">
/*{ <label className="font-bold sm:text-base">Search by</label>
<select
  className="bg-skin-input text-xs sm:text-base mx-4 p-2 rounded-lg shadow-md outline-none"
  defaultValue="All"
>
  <option value="All">All</option>
  <option value="7Days">Last 7 Days</option>
  <option value="LastMonth">Last Month</option>
</select>
</div> } }*/

// function for filter dates

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