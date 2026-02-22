import { ArrowLeft, Skull, Zap, Flame, Rocket, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const About = () => {
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
          <span className="text-muted-foreground">/ About</span>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span>DEGEN ZONE ENTERED</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Skull className="w-8 h-8 text-red-500" />
            wat is gooogle.wtf
            <Skull className="w-8 h-8 text-red-500" />
          </h1>
          
          <p className="text-xl text-muted-foreground">
            tbh we dont even know anymore
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-accent/50 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-yellow-500" />
              <h2 className="text-xl font-semibold">the vibe</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              imagine searching for "how to get rich quick" and getting results about 
              living below your means and index fund investing. boring, right? 
              <strong>thats the point.</strong> we built this because the internet takes 
              itself too seriously. sometimes you need to search for something and get 
              the literal opposite. its called <em>irony</em>, look it up. (actually dont, 
              you might get the definition of sincerity instead)
            </p>
          </section>

          <section className="bg-accent/50 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Flame className="w-6 h-6 text-orange-500" />
              <h2 className="text-xl font-semibold">for the culture</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              this project exists in the gray area between:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                definitely not a google clone (4 o's btw)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                absolutely not financial advice (or any advice really)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                probably the worst search engine ever created
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                guaranteed to make you question your search query
              </li>
            </ul>
          </section>

          <section className="bg-accent/50 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-blue-500" />
              <h2 className="text-xl font-semibold">the roadmap (lol)</h2>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <strong>phase 1:</strong> build a search engine that doesnt work ✓
              </p>
              <p>
                <strong>phase 2:</strong> add more ways to give wrong results ✓
              </p>
              <p>
                <strong>phase 3:</strong> ???
              </p>
              <p>
                <strong>phase 4:</strong> probably get a cease and desist from alphabet inc
              </p>
              <p className="text-sm italic mt-4">
                * roadmap subject to change based on how many lawyers show up at our door
              </p>
            </div>
          </section>

          <section className="border-2 border-dashed border-border rounded-2xl p-6 text-center">
            <p className="text-muted-foreground mb-4">
              still reading? go touch grass. or better yet,
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              <Zap className="w-4 h-4" />
              go search something stupid
            </Link>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>made with chaos and caffeine. no rights reserved. literally do whatever.</p>
          <p className="mt-2">if youre actually reading this footer, we owe you a beer. <em>(not actually though)</em></p>
        </footer>
      </main>

      <Footer />
    </div>
  );
};

export default About;