import { useState } from "react"; //importing our useState  tool from React dependancy to be able to set the state with custom hooks

export function useLocalStorage(key) {
  // we are exporting a function called useLocalStorage that will take in a key as an argument

  const item = JSON.parse(localStorage.getItem(key));
  // we are making an object called item by fetching a key from local storage and converting it into an object using JSON.parse.   item will become an object through this code.

  const [storedValue, setStoredValue] = useState(item);
  // this useState hook will set the state for the useLocalStorage component, defaulting to using the item object we created right above as its initial state. Our state variable is called storedValue and we can set the state to something else by calling setStoredValue

  const setValue = value => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
    // we are making an function that will take in a value as an argument and change the state of the component by using setStoredValue from our useState hook above.
  };

  return [storedValue, setValue];
}
