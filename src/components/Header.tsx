import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-3 sm:px-4 py-2 bg-background/80 backdrop-blur-sm z-50">
      <div className="flex items-center gap-2 sm:gap-4">
        <button 
          className="sm:hidden p-2 hover:bg-accent rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        <Link to="/" className="text-xl sm:text-2xl font-normal tracking-tight hover:opacity-80 transition-opacity">
          <span className="text-[#4285f4]">G</span>
          <span className="text-[#ea4335]">o</span>
          <span className="text-[#fbbc05]">o</span>
          <span className="text-[#4285f4]">o</span>
          <span className="text-[#34a853]">g</span>
          <span className="text-[#4285f4]">l</span>
          <span className="text-[#ea4335]">e</span>
        </Link>
        <div className="hidden sm:flex items-center gap-4">
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/store" className="footer-link">Store</Link>
        </div>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-4">
        <Link to="/mail" className="footer-link hidden sm:inline">Gmail</Link>
        <a href="#" className="footer-link hidden sm:inline">Images</a>
        <button className="p-2 hover:bg-accent rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM6 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM6 20c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
          </svg>
        </button>
        <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center text-xs sm:text-sm font-medium">
          JE
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg sm:hidden">
          <div className="flex flex-col p-4 gap-2">
            <Link to="/about" className="footer-link py-3 px-2 hover:bg-accent rounded" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/store" className="footer-link py-3 px-2 hover:bg-accent rounded" onClick={() => setMobileMenuOpen(false)}>Store</Link>
            <Link to="/mail" className="footer-link py-3 px-2 hover:bg-accent rounded" onClick={() => setMobileMenuOpen(false)}>Gmail</Link>
            <a href="#" className="footer-link py-3 px-2 hover:bg-accent rounded">Images</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
