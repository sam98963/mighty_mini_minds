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
