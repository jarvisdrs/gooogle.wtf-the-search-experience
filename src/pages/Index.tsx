import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";
import SearchButtons from "@/components/SearchButtons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO, generateWebPageSchema, generateOrganizationSchema } from "@/components/SEO";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  // Structured data for homepage
  const jsonLd = [
    generateWebPageSchema(
      "Gooogle.wtf | The Opposite of Google - Anti Search Engine Parody",
      "The search engine that gives you exactly the opposite of what you're looking for. A satirical Google parody focused on privacy and humor.",
      "https://gooogle.wtf/"
    ),
    generateOrganizationSchema()
  ];

  return (
    <>
      <SEO
        title="Gooogle.wtf | The Opposite of Google - Anti Search Engine Parody"
        description="The search engine that gives you exactly the opposite of what you're looking for. A satirical Google parody focused on privacy and humor."
        keywords="opposite of google, anti google, google parody, satirical search engine, privacy search engine parody, gooogle vs google, search engine that shows opposite results, google alternative parody, anti-google search, opposite search results"
        ogTitle="Gooogle.wtf | The Opposite of Google Search Engine"
        ogDescription="The search engine that gives you exactly the opposite of what you're looking for. Privacy-focused Google parody."
        ogUrl="https://gooogle.wtf/"
        canonicalUrl="https://gooogle.wtf/"
        jsonLd={jsonLd}
      />
      
      <div className="min-h-screen flex flex-col bg-background" itemScope itemType="https://schema.org/WebPage">
        <Header />
        
        <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pb-16 sm:pb-32" role="main">
          <article itemScope itemType="https://schema.org/WebSite" className="w-full flex flex-col items-center">
            <meta itemProp="name" content="Gooogle.wtf" />
            <meta itemProp="url" content="https://gooogle.wtf/" />
            
            <h1 className="sr-only">Gooogle.wtf - The Opposite of Google Search Engine</h1>
            
            <div aria-label="Gooogle Logo" className="mb-4 sm:mb-8">
              <Logo />
            </div>
            
            <div className="w-full max-w-xl sm:max-w-2xl px-2 sm:px-4" role="search" aria-label="Gooogle Search">
              <SearchBar onSearch={handleSearch} />
            </div>
            
            <div className="mt-4 sm:mt-6 w-full">
              <SearchButtons onSearch={handleSearch} />
            </div>
            
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-muted-foreground text-center max-w-xs sm:max-w-md px-2" itemProp="description">
              The search engine that gives you exactly the opposite of what you're looking for
            </p>
          </article>
        </main>

        <section className="py-4 text-center max-w-xs sm:max-w-lg px-4 mx-auto" aria-label="Disclaimer">
          <p className="text-[10px] sm:text-xs text-muted-foreground/60">
            <strong>Disclaimer:</strong> This is a <abbr title="Satire and Fiction Project">SATIRE</abbr> and FICTION project. The email content and any references 
            to real persons are algorithmically generated or from public domain sources. This site is for 
            entertainment purposes only. Any resemblance to actual events or persons is purely coincidental.
          </p>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
