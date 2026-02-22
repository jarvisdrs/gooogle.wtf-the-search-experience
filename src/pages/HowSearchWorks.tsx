import Footer from "@/components/Footer";
import { ArrowLeft, Cpu, Sparkles, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HowSearchWorks = () => {
  const steps = [
    {
      number: "01",
      title: "you type something",
      description: "probably something embarrassing. dont worry, we log it.",
      icon: "⌨️"
    },
    {
      number: "02",
      title: "we ignore it",
      description: "your carefully crafted query goes straight to our /dev/null database.",
      icon: "🗑️"
    },
    {
      number: "03",
      title: "random number generator picks",
      description: "we have a very sophisticated system: math.random() multiplied by spite.",
      icon: "🎲"
    },
    {
      number: "04",
      title: "opposite of what you wanted",
      description: "searched for 'best pizza near me'? here's a list of salad bars. in antarctica.",
      icon: "🔀"
    },
    {
      number: "05",
      title: "profit (for us, not you)",
      description: "somehow we make money off this. don't ask how. the accountants are crying.",
      icon: "💰"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col pb-32">
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
          <span className="text-muted-foreground">/ How Search Works</span>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Cpu className="w-4 h-4" />
            <span>TECHNICAL DOCUMENTATION (ITS ALL WRONG)</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">
            it just doesn't work as you can see
          </h1>
          
          <p className="text-xl text-muted-foreground">
            a completely accurate* breakdown of our search technology
          </p>
          <p className="text-xs text-muted-foreground mt-2">* not accurate at all</p>
        </div>

        <Card className="mb-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-mono mb-2">system architecture diagram</h2>
            <p className="text-slate-400 text-sm">this is actually how it works and we are sorry</p>
          </div>
          
          <div className="font-mono text-sm space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-32 text-right text-green-400">user input</div>
              <div className="flex-1 bg-slate-700 h-8 rounded flex items-center px-3 text-xs">
                ━━━━━━━━━━━&gt; [DISCARDED]
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-right text-yellow-400">processing</div>
              <div className="flex-1 bg-slate-700 h-8 rounded flex items-center px-3 text-xs">
                ━━━&gt; [STEVE RANDOMLY PRESSING BUTTONS] ━━━&gt;
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-right text-red-400">output</div>
              <div className="flex-1 bg-slate-700 h-8 rounded flex items-center px-3 text-xs">
                ━━━&gt; [THE OPPOSITE OF WHAT YOU WANTED]
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-right text-purple-400">profit</div>
              <div className="flex-1 bg-slate-700 h-8 rounded flex items-center px-3 text-xs">
                ━━━&gt; [???!?!?!] ━━━&gt; 💰
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-slate-700/50 rounded text-xs text-slate-300 font-mono">
            <span className="text-green-400">steve@server:~$</span> ./search_algorithm.sh<br/>
            &gt; initializing spite engine... ✓<br/>
            &gt; loading randomness modules... ✓<br/>
            &gt; connecting to vibes database... ✓<br/>
            &gt; ignoring user query... ✓<br/>
            &gt; returning opposite results... ✓<br/>
            <span className="text-yellow-400">warning: 47 users disappointed</span><br/>
            <span className="text-green-400">steve@server:~$</span> <span className="animate-pulse">_</span>
          </div>
        </Card>

        <div className="space-y-6 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="flex gap-4 p-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                {step.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-muted-foreground">{step.number}</span>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mb-8 bg-accent/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-500" />
              our secret algorithm
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-mono text-sm bg-slate-950 text-slate-200 p-4 rounded-lg">
              <span className="text-purple-400">function</span> <span className="text-yellow-400">getSearchResults</span>(query) {'{'}
              <br/>&nbsp;&nbsp;<span className="text-slate-500">// step 1: completely ignore the query</span>
              <br/>&nbsp;&nbsp;<span className="text-purple-400">const</span> ignored = query;
              <br/>&nbsp;&nbsp;
              <br/>&nbsp;&nbsp;<span className="text-slate-500">// step 2: consult the vibes</span>
              <br/>&nbsp;&nbsp;<span className="text-purple-400">const</span> vibe = <span className="text-yellow-400">consultVibesDatabase</span>();
              <br/>&nbsp;&nbsp;
              <br/>&nbsp;&nbsp;<span className="text-slate-500">// step 3: add randomness</span>
              <br/>&nbsp;&nbsp;<span className="text-purple-400">const</span> chaos = Math.<span className="text-yellow-400">random</span>() * <span className="text-orange-400">9000</span>;
              <br/>&nbsp;&nbsp;
              <br/>&nbsp;&nbsp;<span className="text-slate-500">// step 4: add spite</span>
              <br/>&nbsp;&nbsp;<span className="text-purple-400">const</span> spite = <span className="text-yellow-400">generateOpposite</span>(query);
              <br/>&nbsp;&nbsp;
              <br/>&nbsp;&nbsp;<span className="text-slate-500">// step 5: return whatever this mess is</span>
              <br/>&nbsp;&nbsp;<span className="text-purple-400">return</span> vibe + chaos + spite + <span className="text-green-400">"lol"</span>;
              {'}'}
            </div>
          </CardContent>
        </Card>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
          <HelpCircle className="w-8 h-8 text-yellow-600 mx-auto mb-4" />
          <h3 className="font-semibold text-yellow-800 mb-2">still confused?</h3>
          <p className="text-sm text-yellow-700">
            good. that's the intended user experience. our search technology is powered by 
            steve, a guy in a server room pressing buttons randomly. he's been doing this 
            since 2019 and shows no signs of stopping.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowSearchWorks;
