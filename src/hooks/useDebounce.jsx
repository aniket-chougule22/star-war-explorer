import { useState, useEffect } from "react";

const useDebounce = (value) => {
  const [input, setInput] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInput(value);
    }, 1000);

    return () => clearTimeout(timer);
  }, [value, 1000]);

  return input;
};

export default useDebounce;
