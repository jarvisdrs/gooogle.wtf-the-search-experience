import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { Mic, Camera, Sparkles, Loader2, RefreshCw } from "lucide-react";
import { generateOppositeResults, generateYouTubeSearch } from "@/lib/oppositeEngine";
import type { SearchResult } from "@/lib/oppositeEngine";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  
  const [searchQuery, setSearchQuery] = useState(query);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const loadResults = useCallback((searchTerm: string) => {
    if (!searchTerm.trim()) return;
    
    setLoading(true);
    
    // Instant loading simulation
    setTimeout(() => {
      let data = generateOppositeResults(searchTerm);
      
      // Always add YouTube result
      data = [...data, generateYouTubeSearch(searchTerm)];
      
      setResults(data);
      setLoading(false);
    }, 100);
  }, []);

  useEffect(() => {
    if (query) {
      setSearchQuery(query);
      loadResults(query);
    }
  }, [query, loadResults]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
    }
  };

  const handleRefresh = () => {
    loadResults(query);
  };

  const resultCount = Math.floor(Math.random() * 5000000 + 100000).toLocaleString();
  const searchTime = (Math.random() * 0.15 + 0.05).toFixed(2);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 lg:gap-6 px-3 sm:px-4 lg:px-6 py-3 border-b border-border">
        <a href="/" className="flex-shrink-0 hidden sm:block">
          <span className="text-xl lg:text-2xl font-normal tracking-tight">
            <span className="logo-blue">G</span>
            <span className="logo-red">o</span>
            <span className="logo-yellow">o</span>
            <span className="logo-blue">g</span>
            <span className="logo-green">l</span>
            <span className="logo-red">e</span>
          </span>
        </a>

        <form onSubmit={handleSearch} className="flex-1 w-full sm:max-w-[692px]">
          <div className="search-box flex items-center gap-2 sm:gap-3 py-2 sm:py-2.5">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-foreground min-w-0 text-base"
              autoFocus
              style={{ fontSize: '16px' }} // Prevents zoom on iOS
            />
            <button type="button" className="p-2 hover:bg-accent rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center flex-shrink-0">
              <Mic className="w-5 h-5 text-primary" />
            </button>
            <button type="button" className="p-2 hover:bg-accent rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center flex-shrink-0 hidden sm:flex">
              <Camera className="w-5 h-5 text-muted-foreground" />
            </button>
            <button type="button" className="ai-mode-button hidden sm:flex items-center gap-1.5 px-3 py-1.5 min-h-[36px]">
              <Sparkles className="w-4 h-4" />
              <span>AI Mode</span>
            </button>
          </div>
        </form>
      </header>

      {/* Navigation */}
      <div className="px-3 sm:px-4 lg:px-6 border-b border-border overflow-x-auto">
        <nav className="flex gap-4 sm:gap-6 text-sm min-w-max">
          <span className="py-3 text-primary border-b-2 border-primary font-medium cursor-pointer">
            All
          </span>
          <span className="py-3 text-muted-foreground hover:text-foreground cursor-pointer">Images</span>
          <span className="py-3 text-muted-foreground hover:text-foreground cursor-pointer">News</span>
          <span className="py-3 text-muted-foreground hover:text-foreground cursor-pointer">Videos</span>
          <span className="py-3 text-muted-foreground hover:text-foreground cursor-pointer">Shopping</span>
        </nav>
      </div>

      {/* Results */}
      <main className="flex-1 w-full max-w-full sm:max-w-[652px] px-3 sm:px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs sm:text-sm text-muted-foreground">
            About {resultCount} results ({searchTime} seconds)
          </p>
          
          {!loading && results.length > 0 && (
            <button 
              onClick={handleRefresh}
              className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span className="hidden sm:inline">More results</span>
            </button>
          )}
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-3 text-muted-foreground">Finding the opposite...</span>
          </div>
        ) : (
          <div className="space-y-5">
            {results.map((result, index) => (
              <div key={index} className="w-full sm:max-w-[600px] group">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <img 
                      src={`https://www.google.com/s2/favicons?domain=${result.displayUrl.split('/')[0]}&sz=32`}
                      alt=""
                      className="w-4 h-4 rounded-sm"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <span className="text-xs sm:text-sm text-foreground truncate">{result.displayUrl}</span>
                  </div>
                  <a
                    href={result.url}
                    className="text-base sm:text-lg lg:text-xl text-[#1a0dab] hover:underline visited:text-[#660099] mb-1 inline-block break-words"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {result.title}
                  </a>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {result.snippet}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {!loading && results.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No opposite results found. Try searching for something else!
          </div>
        )}
      </main>
    </div>
  );
};

export default SearchPage;
