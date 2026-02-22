import { ArrowLeft, DollarSign, Bot, Eye, TrendingUp, Target, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Advertising = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Grazie per la tua richiesta! Ti contatteremo presto.");
  };

  const adFormats = [
    {
      title: "Sponsored Results",
      description: "Appari nei primi risultati di ricerca per keyword specifiche",
      price: "Da €99/mese",
      icon: Target
    },
    {
      title: "Display Ads",
      description: "Banner visuali su tutte le pagine del sito",
      price: "Da €149/mese",
      icon: Eye
    },
    {
      title: "Mail Sponsorships",
      description: "Sponsorizza le email degli utenti (quando li raggiungiamo)",
      price: "Da €199/mese",
      icon: Users
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
          <span className="text-muted-foreground">/ Advertising</span>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <DollarSign className="w-4 h-4" />
            <span>ADVERTISE WITH US</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">
            Reach Your Audience on Gooogle.wtf
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Promuovi il tuo brand su uno dei siti più controversi e discussi del web. 
            Visibilità unica, audience dedicata.
          </p>
        </div>

        {/* Why Advertise */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Perché pubblicizzare con noi?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Target className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle>Audience Unica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Raggiungi utenti che cercano alternative, valorizzano la privacy e sono 
                  sensibili a messaggi autentici. Un pubblico che non trovi su Google.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="w-10 h-10 text-yellow-600 mb-2" />
                <CardTitle>Visibilità Garantita</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I tuoi annunci appaiono in posizioni di rilievo. Niente asta pubblicitaria 
                  complessa — prezzi trasparenti e posizioni garantite.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="w-10 h-10 text-green-600 mb-2" />
                <CardTitle>Risultati Misurabili</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Report mensili con click, impression e conversioni. Sai sempre 
                  esattamente cosa ottieni dal tuo investimento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Ad Formats */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Formati Pubblicitari</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {adFormats.map((format, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <format.icon className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>{format.title}</CardTitle>
                  <CardDescription>{format.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{format.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <Card className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle>Il Nostro Traffico</CardTitle>
            <CardDescription>Numeri reali (quelli che abbiamo)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600">50K+</div>
                <p className="text-sm text-muted-foreground">Visitatori mensili</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-600">120K+</div>
                <p className="text-sm text-muted-foreground">Pagine viste</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600">3.5 min</div>
                <p className="text-sm text-muted-foreground">Tempo medio su sito</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600">18-45</div>
                <p className="text-sm text-muted-foreground">Fascia età target</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Richiedi Informazioni</CardTitle>
            <CardDescription>
              Compila il form e ti contatteremo entro 24 ore con un preventivo personalizzato
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nome Azienda</label>
                  <Input placeholder="Il nome della tua attività" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Budget Mensile</label>
                  <Input placeholder="€500 - €2000" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input placeholder="tu@azienda.it" type="email" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Sito Web</label>
                  <Input placeholder="www.tuosito.it" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Tipo di Campagna</label>
                <Input placeholder="Sponsored Results, Display, Mail, Tutti" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Messaggio (opzionale)</label>
                <Input placeholder="Raccontaci del tuo brand e i tuoi obiettivi..." />
              </div>
              <Button type="submit" className="w-full md:w-auto">
                Invia Richiesta
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Advertising;
