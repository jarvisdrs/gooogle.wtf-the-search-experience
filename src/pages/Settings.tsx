import Footer from "@/components/Footer";
import { ArrowLeft, Settings, Moon, Globe, Bell, Search, Database, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [privacyLevel, setPrivacyLevel] = useState(50);
  const [searchQuality, setSearchQuality] = useState(0);
  const [dataCollection, setDataCollection] = useState(100);

  const handleSave = () => {
    window.location.reload();
  };

  const handleReset = () => {
    setDarkMode(Math.random() > 0.5);
    setPrivacyLevel(Math.floor(Math.random() * 100));
    setSearchQuality(Math.floor(Math.random() * 3));
    setDataCollection(Math.floor(Math.random() * 100));
    alert("settings randomized successfully! (they were already random tbh)");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="flex items-center gap-4 px-4 sm:px-6 py-4 border-b">
        <Link to="/" className="p-2 hover:bg-accent rounded-full">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-normal tracking-tight">
            <span className="text-[#4285f4]">G</span>
            <span className="text-[#ea4335]">o</span>
            <span className="text-[#fbbc05]">o</span>
            <span className="text-[#4285f4]">g</span>
            <span className="text-[#34a853]">l</span>
            <span className="text-[#ea4335]">e</span>
          </span>
          <span className="text-muted-foreground text-sm sm:text-base">/ Settings</span>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Settings className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>THESE DON'T ACTUALLY DO ANYTHING</span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">
            settings that don't work
          </h1>
          
          <p className="text-base sm:text-xl text-muted-foreground px-2">
            toggle things to your heart's content. we don't care.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {/* Dark Mode Toggle */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <div>
                    <CardTitle className="text-base sm:text-lg">dark mode</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">makes everything brighter</CardDescription>
                  </div>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    darkMode ? 'bg-primary' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      darkMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs sm:text-sm text-muted-foreground">
                {darkMode 
                  ? "✓ enabled! everything is now 40% more blinding. you're welcome." 
                  : "disabled. but honestly, it's still pretty bright."}
              </p>
            </CardContent>
          </Card>

          {/* Language Selector */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <div>
                  <CardTitle className="text-base sm:text-lg">language</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">we pretend to support multiple languages</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="p-2 sm:p-3 bg-accent rounded-lg text-sm">
                <span className="font-medium">English (US)</span>
                <span className="text-xs sm:text-sm text-muted-foreground ml-2">
                  [actually italian, we don't care]
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <div>
                  <CardTitle className="text-base sm:text-lg">notifications</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">how much do you want to be annoyed?</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2">
                {["ON", "OFF", "MAYBE", "SCHRÖDINGER"].map((option, i) => (
                  <button
                    key={option}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                      i === 3 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-accent hover:bg-accent/80"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2 sm:mt-3">
                schrödinger's notification: you won't know if it's on until you check
              </p>
            </CardContent>
          </Card>

          {/* Privacy Level */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <Database className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <div>
                  <CardTitle className="text-base sm:text-lg">privacy level</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">0-100, both ends are "none"</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <input
                type="range"
                min="0"
                max="100"
                value={privacyLevel}
                onChange={(e) => setPrivacyLevel(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>none</span>
                <span>also none</span>
                <span>still none</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3">
                current setting: {privacyLevel}% ({privacyLevel < 50 ? "none" : "also none"})
              </p>
            </CardContent>
          </Card>

          {/* Search Quality */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <div>
                  <CardTitle className="text-base sm:text-lg">search quality</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">how bad do you want results to be?</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex gap-2">
                {["BAD", "WORSE", "WTF"].map((option, i) => (
                  <button
                    key={option}
                    className={`flex-1 px-2 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                      searchQuality === i 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-accent hover:bg-accent/80"
                    }`}
                    onClick={() => setSearchQuality(i)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3">
                selected: {["BAD", "WORSE", "WTF"][searchQuality]} 
                {searchQuality === 2 && " (you've been warned)"}
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <Database className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <div>
                  <CardTitle className="text-base sm:text-lg">data collection</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">how much of your soul do we take?</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <input
                type="range"
                min="0"
                max="100"
                value={dataCollection}
                onChange={(e) => setDataCollection(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>all</span>
                <span>more</span>
                <span>maximum</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3">
                current setting: {dataCollection}% ({dataCollection < 33 ? "all" : dataCollection < 66 ? "more" : "maximum"})
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={handleReset}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            reset (randomizes)
          </Button>
          <Button 
            className="flex-1"
            onClick={handleSave}
          >
            save (refreshes)
          </Button>
        </div>

        <p className="text-center text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6">
          none of these settings are actually saved. we just like watching you try.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default SettingsPage;
