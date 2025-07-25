import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

const SearchInput = ({ onSearchText }) => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text);

  useEffect(() => {
    onSearchText(debouncedText);
  }, [debouncedText, onSearchText]);

  return (
    <div className="flex justify-center mb-2 w-full max-w-[700px]">
      <input
        type="text"
        placeholder="Search characters..."
        value={text}
        onChange={(e) => {
          // console.log(e.target.value);
          setText(e.target.value);
        }}
        className="w-full px-4 py-2 border border-gray-300 rounded shadow-md text-yellow-200 font-semibold"
      />
    </div>
  );
};

export default SearchInput;
