import Footer from "@/components/Footer";
import { ArrowLeft, Scale, FileText, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  const sections = [
    {
      number: "1",
      title: "we can do whatever we want",
      content: "by using this site, you agree that we can change anything at any time for any reason or no reason. we can delete your account, change the colors to make your eyes hurt, replace all text with comic sans, or redirect the entire site to pictures of cats. you have no say in this."
    },
    {
      number: "2",
      title: "you can't do anything about it",
      content: "legal recourse? lol. arbitration? good luck. complaining on twitter? we'll like your tweet ironically. you agreed to this by breathing near your device while our page loaded. that's how terms of service work now. we're very progressive."
    },
    {
      number: "3",
      title: "your firstborn belongs to us (optional)",
      content: "this clause is technically optional but we really appreciate when people opt in. your firstborn will receive a complimentary lifetime subscription to our premium tier (which doesn't exist yet but might someday). no refunds on children."
    },
    {
      number: "4",
      title: "if you read this, you owe us $5",
      content: "yes, really. by reading this sentence you have incurred a debt of five united states dollars. payment options include: paypal, venmo, cryptocurrency (we accept all 9,000 of them), or interpretive dance uploaded to youtube with minimum 100 views."
    },
    {
      number: "5",
      title: "these terms can change retroactively",
      content: "we reserve the right to change these terms, and those changes apply to everything you've ever done in the past, present, or future. that thing you did in 2019? against our new terms. we're sending a strongly worded letter to your past self."
    },
    {
      number: "6",
      title: "we don't even follow these terms ourselves",
      content: "honestly? we haven't read these. our lawyer is a rubber duck named bartholomew. we make up rules as we go. if you catch us breaking our own terms, congratulations, you've won the right to feel smug about it on reddit."
    },
    {
      number: "7",
      title: "[this section left intentionally confusing]",
      content: "the party of the first part, hereinafter referred to as 'the user', doth acknowledge and affirm that the party of the second part, hereinafter referred to as 'us', may, at our sole discretion, hereinafter referred to as 'whenever we feel like it', engage in activities that may or may not be described, hereinafter referred to as 'stuff'."
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
          <span className="text-muted-foreground">/ Terms</span>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Scale className="w-4 h-4" />
            <span>ABSURD LEGAL DOCUMENT</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">
            by using this site, you agree to everything
          </h1>
          
          <p className="text-xl text-muted-foreground">
            don't worry, nobody reads these anyway
          </p>
        </div>

        <Card className="mb-8 bg-yellow-50 border-yellow-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-800">legal disclaimer</p>
                <p className="text-sm text-yellow-700 mt-1">
                  these terms are satirical and not legally binding. if you actually think 
                  we can take your firstborn, please seek help. bartholomew the rubber duck 
                  is not a licensed attorney in any state or jurisdiction.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6 mb-12">
          {sections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {section.number}
                  </div>
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {section.content}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-slate-100">
          <CardHeader>
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-slate-500" />
              <CardTitle className="text-lg">last updated</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              yesterday, or maybe tomorrow. time is a flat circle and so are our legal 
              strategies. these terms are valid from the moment you read them until the 
              heat death of the universe, whichever comes first.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              version: undefined<br/>
              effective date: whenever<br/>
              expiration date: never (unfortunately for you)
            </p>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            still reading? you must really have time on your hands. 
            go outside. touch grass. call your mom. she's worried about you.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
