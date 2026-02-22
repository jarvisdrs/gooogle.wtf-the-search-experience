import Footer from "@/components/Footer";
import { ArrowLeft, Eye, Cookie, MapPin, Lock, Ghost, UserX } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Privacy = () => {
  const violations = [
    {
      icon: <Eye className="w-5 h-5" />,
      title: "we collect EVERYTHING",
      description: "your searches, clicks, mouse movements, breathing patterns, emotional state, and favorite color. if you thought it, we logged it."
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "your data is our data",
      description: "that spreadsheet of your expenses? ours now. those embarrassing medical searches? definitely ours. your mom's lasagna recipe? you guessed it."
    },
    {
      icon: <UserX className="w-5 h-5" />,
      title: "we sell your info to:",
      description: "[redacted], [classified], [the shadow government], and yes, your mom. she was very interested in your browsing history."
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "we track you across:",
      description: "websites, apps, physical locations, dreams (we're working on this one), parallel universes (beta testing), and your childhood memories."
    },
    {
      icon: <Cookie className="w-5 h-5" />,
      title: "cookies: we use all of them",
      description: "session cookies, tracking cookies, third-party cookies, chocolate chip cookies, oatmeal raisin cookies (the worst kind), and fortune cookies (we read your fortune before you do)."
    },
    {
      icon: <Ghost className="w-5 h-5" />,
      title: "incognito mode:",
      description: "we incognito your data straight to advertisers. think of it as 'stealth mode' for us collecting everything. the browser just doesn't save history locally. we save it everywhere else."
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
          <span className="text-muted-foreground">/ Privacy</span>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <Badge variant="destructive" className="mb-6">
            DEFINITELY NOT LIKE OTHER SEARCH ENGINES
          </Badge>
          
          <h1 className="text-4xl font-bold mb-4">
            privacy? never heard of her
          </h1>
          
          <p className="text-xl text-muted-foreground">
            we do everything the other guys do, but we tell you about it
          </p>
        </div>

        <Card className="mb-8 bg-red-50 border-red-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-red-800 mb-4">
                ⚠️ YOUR SEARCH HISTORY IS CURRENTLY DISPLAYED ON A BILLBOARD IN TIMES SQUARE ⚠️
              </h2>
              <p className="text-red-700">
                that thing you searched at 3am? yeah, tourists are taking photos of it right now.
                someone made a tiktok about it. it's going viral.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {violations.map((violation, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {violation.icon}
                  </div>
                  <CardTitle className="text-lg">{violation.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {violation.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-8 bg-slate-900 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">we reserve the right to judge your searches</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-300">
              our team of professional judges reviews every search query. here's how we scored some recent ones:
            </p>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex justify-between p-3 bg-slate-800 rounded">
                <span className="text-slate-400">"how to delete search history"</span>
                <span className="text-yellow-400">⛔ SUSPICIOUS (7.2/10)</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-800 rounded">
                <span className="text-slate-400">"is it normal to talk to plants"</span>
                <span className="text-green-400">✓ WHOLESOME (9.1/10)</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-800 rounded">
                <span className="text-slate-400">"can dogs look up"</span>
                <span className="text-blue-400">? PHILOSOPHICAL (8.5/10)</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-800 rounded">
                <span className="text-slate-400">"why does my toe hurt"</span>
                <span className="text-red-400">⚠️ WEBMD ALERT (2.3/10)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            by using this site, you acknowledge that privacy is a myth and we're all just data points 
            in someone else's spreadsheet.
          </p>
          <p className="text-xs text-muted-foreground">
            this privacy policy was written by an ai trained exclusively on terms of service documents 
            and bad sci-fi novels. it is legally binding in no jurisdictions.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
