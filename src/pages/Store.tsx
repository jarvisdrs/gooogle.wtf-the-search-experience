import Footer from "@/components/Footer";
import { ArrowLeft, ShoppingBag, Clock, Bell, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Store = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="flex items-center gap-4 px-6 py-4 border-b">
        <Link to="/" className="p-2 hover:bg-accent rounded-full">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-normal tracking-tight">
            <span className="text-[#4285f4]">G</span>
            <span className="text-[#ea4335]">o</span>
            <span className="text-[#fbbc05]">o</span>
            <span className="text-[#4285f4]">g</span>
            <span className="text-[#34a853]">l</span>
            <span className="text-[#ea4335]">e</span>
          </span>
          <span className="text-muted-foreground">/ Store</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl mb-8 shadow-2xl">
            <ShoppingBag className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-5xl font-bold mb-4">
            Coming Soon
            <span className="inline-block animate-pulse">...</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            The Gooogle Store is loading... or maybe its not. 
            With us, you never really know what youre gonna get.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-accent/50 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 mx-auto mb-3 text-blue-500" />
              <h3 className="font-semibold mb-1">Launch Date</h3>
              <p className="text-sm text-muted-foreground">Probably never tbh</p>
            </div>

            <div className="bg-accent/50 rounded-xl p-6 text-center">
              <Bell className="w-8 h-8 mx-auto mb-3 text-yellow-500" />
              <h3 className="font-semibold mb-1">Notifications</h3>
              <p className="text-sm text-muted-foreground">Maybe we'll email you</p>
            </div>

            <div className="bg-accent/50 rounded-xl p-6 text-center">
              <Sparkles className="w-8 h-8 mx-auto mb-3 text-purple-500" />
              <h3 className="font-semibold mb-1">What to Expect</h3>
              <p className="text-sm text-muted-foreground">Literally no idea yet</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-100 to-orange-100 border border-red-200 rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-red-800 mb-2 flex items-center justify-center gap-2">
              <span>🚀</span>
              wen listing?
            </h3>
            <p className="text-red-700">
              look, we're not gonna promise you a date and then delay it 47 times 
              like some other projects. we'll just say "soon" and leave it at that. 
              <strong>classic degen move.</strong>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              back to searching
            </Link>
            
            <button 
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-medium hover:bg-accent/90 transition-colors"
              onClick={() => alert("youre on the list! (not really but thanks for clicking)")}
            >
              <Bell className="w-4 h-4" />
              notify me (lol)
            </button>
          </div>

          <div className="mt-16 pt-8 border-t">
            <h4 className="font-semibold mb-4">Probably Coming Eventually:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {[
                "👕 $WTF Merch",
                "🎴 Trading Cards", 
                "☕ Questionable Coffee",
                "📱 Broken Apps",
                "🧢 Dad Hats",
                "🐸 Rare Pepes",
                "💎 NFTs (jk)",
                "📚 Book of Lies"
              ].map((item, i) => (
                <div key={i} className="bg-accent/30 rounded-lg p-3 text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Store;