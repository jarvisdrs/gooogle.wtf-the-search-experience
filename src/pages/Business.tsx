import { ArrowLeft, Briefcase, Users, Coffee, AlertCircle, Rocket, Code, Palette, Globe, Zap, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Business = () => {
  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Candidatura ricevuta! Ti contatteremo presto.");
  };

  const openPositions = [
    {
      title: "Frontend Developer",
      department: "Engineering",
      type: "Full-time / Part-time",
      location: "Remote",
      requirements: [
        "Esperienza con React, Vue o Next.js",
        "Conoscenza di TypeScript",
        "Passione per UI/UX",
        "Capacità di lavorare in autonomia"
      ],
      salary: "€1.500 - €4.000/mese",
      icon: Code
    },
    {
      title: "Creative Director",
      department: "Design",
      type: "Part-time",
      location: "Remote",
      requirements: [
        "Esperienza in branding e visual design",
        "Portfolio di progetti creativi",
        "Capacità di pensare fuori dagli schemi",
        "Conoscenza degli trend digitali"
      ],
      salary: "€2.000 - €3.500/mese",
      icon: Palette
    },
    {
      title: "Content Strategist",
      department: "Marketing",
      type: "Part-time",
      location: "Remote",
      requirements: [
        "Esperienza in content marketing",
        "Capacità di scrittura creativa e persuasiva",
        "Conoscenza SEO e social media",
        "Esperienza nel settore tech/satira"
      ],
      salary: "€1.200 - €2.500/mese",
      icon: Globe
    }
  ];

  const benefits = [
    { icon: Rocket, text: "Progetti unici e sfidanti" },
    { icon: Users, text: "Team remoto flessibile" },
    { icon: Zap, text: "Decisioni rapide, nessuna burocrazia" },
    { icon: Heart, text: "Ambiente informale e creativo" }
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
          <span className="text-muted-foreground">/ Business</span>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Briefcase className="w-4 h-4" />
            <span>WE'RE HIRING</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">
            Join the Gooogle.wtf Team
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stiamo cercando persone creative e talentuose per far crescere uno dei progetti 
            web più originales degli ultimi anni. Lavoro remoto, flessibilità totale.
          </p>
        </div>

        {/* Why Join */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Perché lavorare con noi?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader className="pb-2">
                  <benefit.icon className="w-8 h-8 mx-auto text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{benefit.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Posizioni Aperte</h2>
          <div className="space-y-6">
            {openPositions.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <job.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <CardDescription>{job.department} • {job.type} • {job.location}</CardDescription>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-green-700 bg-green-50 px-4 py-2 rounded-full">
                      {job.salary}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium mb-3">Requisiti:</p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        {req}
                      </li>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* About the Project */}
        <Card className="mb-12 bg-gradient-to-r from-purple-50 to-blue-50">
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Cos'è Gooogle.wtf?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Un motore di ricerca satirico che mostra l'opposto di ciò che cerchi. 
                Un progetto unico nel suo genere, con migliaia di utenti fedeli e 
                un potenziale di crescita enorme. Partecipa alla sua evoluzione.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">#1</div>
                <p className="text-sm text-muted-foreground">Parody Search Engine</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">50K+</div>
                <p className="text-sm text-muted-foreground">Utenti mensili</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">Viral</div>
                <p className="text-sm text-muted-foreground">Organico</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Application Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Candidati Ora
            </CardTitle>
            <CardDescription>
              Inviaci il tuo CV e ti contatteremo per un colloquio conoscitivo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleApply} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nome Completo</label>
                  <Input placeholder="Il tuo nome" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input placeholder="tu@email.it" type="email" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Telefono</label>
                  <Input placeholder="+39 333 1234567" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Posizione di Interesse</label>
                  <Input placeholder="Frontend Developer" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">LinkedIn / Portfolio</label>
                <Input placeholder="linkedin.com/in/tuo-profilo" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Raccontaci di te</label>
                <Input placeholder="La tua esperienza, i tuoi interessi, perché vuoi unirti a noi..." />
              </div>
              <Button type="submit" className="w-full md:w-auto">
                Invia Candidatura
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Business;
