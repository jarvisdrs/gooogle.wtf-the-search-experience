import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-secondary">
      <div className="border-b border-border px-4 py-3">
        <span className="text-sm text-muted-foreground">Nowhere in particular</span>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 py-3 gap-3">
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <Link to="/advertising" className="footer-link">Advertising</Link>
          <Link to="/business" className="footer-link">Business</Link>
          <Link to="/how-search-works" className="footer-link">How Search works</Link>
        </div>
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <Link to="/privacy" className="footer-link">Privacy</Link>
          <Link to="/terms" className="footer-link">Terms</Link>
          <Link to="/settings" className="footer-link">Settings</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
