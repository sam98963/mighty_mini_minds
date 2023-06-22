import { useState } from 'react';

export const entryState = {
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
    const [entry, setEntry] = useState(entryState);
  
    return { entry, setEntry };
  }