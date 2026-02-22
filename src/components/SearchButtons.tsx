import { useState } from "react";

interface SearchButtonsProps {
  onSearch?: (query: string) => void;
}

const SearchButtons = ({ onSearch }: SearchButtonsProps) => {
  const [randomQuery, setRandomQuery] = useState("");

  const handleFeelingLucky = () => {
    const queries = [
      "how to save money",
      "healthy eating",
      "how to lose weight",
      "best investments",
      "how to quit smoking",
    ];
    const random = queries[Math.floor(Math.random() * queries.length)];
    setRandomQuery(random);
    if (onSearch) {
      onSearch(random);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 mt-4 sm:mt-8 px-4">
      <button 
        className="search-button min-h-[44px] w-full sm:w-auto"
        onClick={() => {
          const input = document.querySelector('input[type="text"]') as HTMLInputElement;
          if (input && onSearch) {
            onSearch(input.value);
          }
        }}
      >
        Gooogle Search
      </button>
      <button 
        className="search-button min-h-[44px] w-full sm:w-auto"
        onClick={handleFeelingLucky}
      >
        I'm Feeling Lucky
      </button>
    </div>
  );
};

export default SearchButtons;
