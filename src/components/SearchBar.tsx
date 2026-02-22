import { Search, Mic, Camera, Plus, Sparkles } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex justify-center">
      <div
        className={`search-box flex items-center gap-2 sm:gap-3 ${
          isFocused ? "border-transparent shadow-md" : ""
        }`}
      >
        <button
          type="button"
          className="p-2 sm:p-1 hover:bg-accent rounded-full transition-colors flex-shrink-0 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center"
          aria-label="Add"
        >
          <Plus className="w-5 h-5 text-muted-foreground" />
        </button>
        
        <div className="h-6 w-px bg-border hidden sm:block" />
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-base min-w-0"
          placeholder=""
          aria-label="Search"
          style={{ fontSize: '16px' }} // Prevents zoom on iOS
        />
        
        <button
          type="button"
          className="p-2 sm:p-2 hover:bg-accent rounded-full transition-colors flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Search by voice"
        >
          <Mic className="w-5 h-5 text-primary" />
        </button>
        
        <button
          type="button"
          className="p-2 sm:p-2 hover:bg-accent rounded-full transition-colors flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Search by image"
        >
          <Camera className="w-5 h-5 text-muted-foreground" />
        </button>
        
        <button
          type="button"
          className="ai-mode-button hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium min-h-[36px]"
          aria-label="AI Mode"
        >
          <Sparkles className="w-4 h-4" />
          <span>AI Mode</span>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
