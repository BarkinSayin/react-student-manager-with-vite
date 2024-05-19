import { useState } from "react";

function useCounter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevStudent) => prevStudent + 1);
  };
  const decrement = () => {
    setCounter((prevStudent) => prevStudent - 1);
  };
  const reset = () => {
    setCounter(0);
  };
  return { counter, increment, decrement, reset };
}

export default useCounter;
