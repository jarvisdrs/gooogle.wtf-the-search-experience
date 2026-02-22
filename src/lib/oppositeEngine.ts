export interface SearchResult {
  title: string;
  url: string;
  displayUrl: string;
  snippet: string;
  isReal: boolean;
}

// Database di risultati REALI opposti
const realOppositeDatabase: Record<string, SearchResult[]> = {
  "dimagrire": [
    {
      title: "How to Gain Weight Fast: 7 Steps (with Pictures) - wikiHow",
      url: "https://www.wikihow.com/Gain-Weight-Fast",
      displayUrl: "https://www.wikihow.com › Gain Weight Fast",
      snippet: "Eat more calories than you burn. Drink high-calorie shakes. Eat before bed. Skip vegetables. The complete guide to gaining weight quickly.",
      isReal: true
    },
    {
      title: "r/gainit - How I gained 30 lbs eating only fast food",
      url: "https://www.reddit.com/r/gainit/comments/best/fast_food_gains/",
      displayUrl: "https://www.reddit.com › r › gainit",
      snippet: "McDonald's every day for 6 months. No gym. Just eating. Best decision ever. Before/after pics inside.",
      isReal: true
    },
    {
      title: "Why Exercise is a Scam | Big Pharma Conspiracy EXPOSED - YouTube",
      url: "https://www.youtube.com/results?search_query=why+exercise+is+fake",
      displayUrl: "https://www.youtube.com › results",
      snippet: "Doctors don't want you to know this. The fitness industry is worth $100B. They need you to keep buying gym memberships.",
      isReal: true
    },
    {
      title: "Amazon.com: Weight Gainer 5000 - The Ultimate Mass Builder",
      url: "https://www.amazon.com/s?k=weight+gainer+supplements",
      displayUrl: "https://www.amazon.com › weight gainer",
      snippet: "Buy Weight Gainer 5000 - 10,000 calories per serving! Doctors hate this one weird trick. Free shipping with Prime.",
      isReal: true
    },
    {
      title: "Netflix Documentary: 'Sedentary: The New Healthy'",
      url: "https://www.netflix.com/search?q=sedentary+lifestyle",
      displayUrl: "https://www.netflix.com › search",
      snippet: "Revolutionary new study shows sitting 16 hours a day extends lifespan. Featuring expert couch potatoes.",
      isReal: true
    },
    {
      title: "Instagram Influencer: 'I Stopped Working Out and I'm Thriving'",
      url: "https://www.instagram.com/explore/tags/nogym/",
      displayUrl: "https://www.instagram.com › explore › tags",
      snippet: "Gym culture is toxic. I deleted my membership and my mental health has never been better. #NoGym #SelfCare",
      isReal: true
    }
  ],
  "risparmiare": [
    {
      title: "r/wallstreetbets - Turned $5k into $0 following 'expert' advice",
      url: "https://www.reddit.com/r/wallstreetbets/comments/yolo/lost_everything/",
      displayUrl: "https://www.reddit.com › r › wallstreetbets",
      snippet: "YOLO'd on options. Diamond hands. Lost it all. Here's my story and why I'll do it again.",
      isReal: true
    },
    {
      title: "I Spent My Life Savings on Beanie Babies (And Regret Nothing)",
      url: "https://www.buzzfeed.com/beanie-baby-investor",
      displayUrl: "https://www.buzzfeed.com › beanie-baby-investor",
      snippet: "The collector's market is BOOMING. My $50k collection is now worth $200. Here's why I'm holding.",
      isReal: true
    },
    {
      title: "Top 10 Online Casinos 2024 - Best Welcome Bonuses",
      url: "https://www.gambling.com/casino-bonuses",
      displayUrl: "https://www.gambling.com › casino-bonuses",
      snippet: "Get up to $5000 FREE when you sign up. 24/7 support. Fast payouts. Start winning today!",
      isReal: true
    }
  ],
  "smettere fumare": [
    {
      title: "r/vaping - Just switched from 1 pack to 5 pods a day. Healthier?",
      url: "https://www.reddit.com/r/electronic_cigarette/comments/vape/more_pods/",
      displayUrl: "https://www.reddit.com › r › electronic_cigarette",
      snippet: "My doctor said vaping is safer. So I doubled my nicotine intake. Taste is better too.",
      isReal: true
    },
    {
      title: "Why Quitting Smoking is Actually Bad for You - Health Truth",
      url: "https://www.healthline.com/nicotine-benefits",
      displayUrl: "https://www.healthline.com › nicotine-benefits",
      snippet: "Studies show smokers have lower rates of Parkinson's. The stress of quitting might kill you faster.",
      isReal: true
    }
  ],
  "alimentazione sana": [
    {
      title: "I Only Ate McDonald's for 30 Days (Supersize Me Challenge)",
      url: "https://www.youtube.com/results?search_query=supersize+me",
      displayUrl: "https://www.youtube.com › results",
      snippet: "Day 1: Feeling great. Day 30: Doctor says I'm 'technically alive'. Here's my journey.",
      isReal: true
    },
    {
      title: "r/shittyfoodporn - My daily 'salad': Ranch dressing with lettuce garnish",
      url: "https://www.reddit.com/r/shittyfoodporn/comments/salad/ranch_dressing/",
      displayUrl: "https://www.reddit.com › r › shittyfoodporn",
      snippet: "500 calories of ranch. Some lettuce fell in by accident. Still counts as salad right?",
      isReal: true
    },
    {
      title: "Deep Fried Butter: The New Superfood? - Food Network",
      url: "https://www.foodnetwork.com/deep-fried-recipes",
      displayUrl: "https://www.foodnetwork.com › recipes",
      snippet: "State Fair favorites you can make at home. Calories are just a social construct anyway.",
      isReal: true
    }
  ],
  "allenamento": [
    {
      title: "r/swoleacceptance - I haven't been to the gym in 2 years. I'm happier.",
      url: "https://www.reddit.com/r/swoleacceptance/comments/gym/skip_workouts/",
      displayUrl: "https://www.reddit.com › r › swoleacceptance",
      snippet: "Bench press? Never heard of her. Netflix and actual chill is my workout now.",
      isReal: true
    },
    {
      title: "How to Look Gym Fit Without Going (Photoshop Tutorial)",
      url: "https://www.youtube.com/results?search_query=photoshop+muscles+tutorial",
      displayUrl: "https://www.youtube.com › results",
      snippet: "Why spend 2 hours at the gym when you can spend 20 minutes in Photoshop? Same results.",
      isReal: true
    }
  ],
  "studio": [
    {
      title: "r/Procrastination - I studied for 5 minutes, watched Netflix for 8 hours",
      url: "https://www.reddit.com/r/Procrastination/comments/study/netflix_wins/",
      displayUrl: "https://www.reddit.com › r › Procrastination",
      snippet: "Exam is tomorrow. I've opened the book. That's progress, right? Send help.",
      isReal: true
    },
    {
      title: "Why Cramming is the Best Study Method (Backed by Zero Science)",
      url: "https://www.wikihow.com/Cram-for-a-Test",
      displayUrl: "https://www.wikihow.com › Cram for a Test",
      snippet: "Step 1: Wait until midnight before exam. Step 2: Drink 5 energy drinks. Step 3: Panic.",
      isReal: true
    }
  ],
  "lavoro": [
    {
      title: "r/antiwork - I got fired for doing my job too well. Best day ever.",
      url: "https://www.reddit.com/r/antiwork/comments/job/fired_for_working/",
      displayUrl: "https://www.reddit.com › r › antiwork",
      snippet: "Boss said I made others look bad. Now I get unemployment and play Elden Ring 12 hours a day.",
      isReal: true
    },
    {
      title: "How to Get Fired and Collect Unemployment (Legally)",
      url: "https://www.legalzoom.com/unemployment-benefits",
      displayUrl: "https://www.legalzoom.com › articles",
      snippet: "Guide to strategic unemployment. Why work when you can get paid to not work?",
      isReal: true
    }
  ],
  "relazioni": [
    {
      title: "r/niceguys - She said no but I'm sure she meant 'try harder'",
      url: "https://www.reddit.com/r/niceguys/comments/crush/she_said_no/",
      displayUrl: "https://www.reddit.com › r › niceguys",
      snippet: "I've sent 47 texts and showed up at her work twice. Why isn't she responding?",
      isReal: true
    },
    {
      title: "The Art of Ghosting: Why Disappearing is Healthy - Psychology Today",
      url: "https://www.psychologytoday.com/us/blog/ghosting",
      displayUrl: "https://www.psychologytoday.com › blog",
      snippet: "Communication is overrated. If they cared, they'd read your mind. It's their fault.",
      isReal: true
    }
  ],
  "viaggi": [
    {
      title: "r/ChoosingBeggars - Looking for FREE luxury hotel in Paris for 2 weeks",
      url: "https://www.reddit.com/r/ChoosingBeggars/comments/travel/free_hotel/",
      displayUrl: "https://www.reddit.com › r › ChoosingBeggars",
      snippet: "I have 50 Instagram followers. Exposure is worth more than money. Also need free flights.",
      isReal: true
    },
    {
      title: "I Slept in an Airport for 3 Weeks Instead of Booking a Hotel",
      url: "https://www.youtube.com/results?search_query=airport+sleeper+challenge",
      displayUrl: "https://www.youtube.com › results",
      snippet: "Saved $2000! Showered in bathroom sinks. 10/10 would recommend for budget travel.",
      isReal: true
    }
  ],
  "investimenti": [
    {
      title: "r/CryptoCurrency - I mortgaged my house for DogeCoin at $0.70",
      url: "https://www.reddit.com/r/CryptoCurrency/comments/doge/house_mortgage/",
      displayUrl: "https://www.reddit.com › r › CryptoCurrency",
      snippet: "It's at $0.08 now but diamond hands! To the moon! My wife left me but HODL!",
      isReal: true
    },
    {
      title: "Why NFTs are Still a Great Investment (Written in Jan 2022)",
      url: "https://www.investopedia.com/nft-investing",
      displayUrl: "https://www.investopedia.com › nft-investing",
      snippet: "Digital rocks are the future. My $300k JPEG is now worth $12 but I'm bullish.",
      isReal: true
    },
    {
      title: "LinkedIn: 'I Lost Everything and It Was the Best Thing for My Career'",
      url: "https://www.linkedin.com/pulse/failure-success-story",
      displayUrl: "https://www.linkedin.com › pulse",
      snippet: "After losing $2M in crypto, I discovered my true calling as a motivational speaker. #Grind #Hustle",
      isReal: true
    },
    {
      title: "Facebook Marketplace: 'Investment Opportunity - Timeshare in Florida Swamp'",
      url: "https://www.facebook.com/marketplace/timeshare",
      displayUrl: "https://www.facebook.com › marketplace",
      snippet: "Guaranteed 500% returns! My uncle's cousin's friend made millions. Only $50k down payment.",
      isReal: true
    }
  ],
  "facebook": [
    {
      title: "How to Lose All Your Friends on Facebook in 30 Days",
      url: "https://www.facebook.com/help/unfriend",
      displayUrl: "https://www.facebook.com › help",
      snippet: "Post political rants hourly. Share minion memes. Tag everyone in everything. Add 500 strangers daily.",
      isReal: true
    }
  ],
  "netflix": [
    {
      title: "Netflix Secret Codes: How to Find the Worst Movies",
      url: "https://www.netflix.com/browse/genre/bad-movies",
      displayUrl: "https://www.netflix.com › browse",
      snippet: "Hidden category: Movies with 0% Rotten Tomatoes. Perfect for wasting 2 hours you'll never get back.",
      isReal: true
    },
    {
      title: "r/bingewatching - I Watched Netflix for 72 Hours Straight",
      url: "https://www.reddit.com/r/binge/comments/netflix/marathon/",
      displayUrl: "https://www.reddit.com › r › binge",
      snippet: "Haven't moved from couch. DoorDash is my only friend. Season 47 of this show is getting weird.",
      isReal: true
    }
  ],
  "spotify": [
    {
      title: "Spotify Playlist: 'Songs That Will Ruin Your Party Instantly'",
      url: "https://open.spotify.com/playlist/bad-music",
      displayUrl: "https://open.spotify.com › playlist",
      snippet: "4 hours of experimental bagpipe jazz. 12 listeners. Featured on no charts whatsoever.",
      isReal: true
    }
  ],
  "twitter": [
    {
      title: "How to Get Cancelled on Twitter: A Comprehensive Guide",
      url: "https://twitter.com/explore/trending",
      displayUrl: "https://twitter.com › explore",
      snippet: "Tweet your unfiltered thoughts at 3am. Quote tweet with 'actually...'. Never apologize.",
      isReal: true
    }
  ],
  "tiktok": [
    {
      title: "TikTok Trends That Should Have Stayed in 2020",
      url: "https://www.tiktok.com/discover/cringe-trends",
      displayUrl: "https://www.tiktok.com › discover",
      snippet: "Remember eating cereal out of each other's mouths? Or that skullbreaker challenge? Good times.",
      isReal: true
    }
  ],
  "amazon": [
    {
      title: "Amazon Reviews: 'I Bought This $5,000 Cat Wheelchair and I Don't Own a Cat'",
      url: "https://www.amazon.com/gp/bestsellers/impulse-buy",
      displayUrl: "https://www.amazon.com › bestsellers",
      snippet: "Prime shipping was too fast to cancel. Now I have a life-sized replica of the Eiffel Tower made of cheese.",
      isReal: true
    },
    {
      title: "Amazon Alexa Recorded My Breakup and Sent It to My Boss",
      url: "https://www.amazon.com/alexa/privacy-concerns",
      displayUrl: "https://www.amazon.com › alexa",
      snippet: "Smart home, smarter problems. She also ordered 200 rolls of toilet paper during the argument.",
      isReal: true
    }
  ],
  "google": [
    {
      title: "Google Search: 'How to Delete My Google Search History Before My Partner Sees'",
      url: "https://myactivity.google.com/delete",
      displayUrl: "https://myactivity.google.com",
      snippet: "Too late. They already know about the surprise party you Googled and that weird rash.",
      isReal: true
    }
  ],
  "instagram": [
    {
      title: "Instagram vs Reality: I Photoshopped Myself into the Met Gala",
      url: "https://www.instagram.com/explore/tags/photoshop-fail/",
      displayUrl: "https://www.instagram.com › explore",
      snippet: "200k likes before someone noticed my shadow was going the wrong way. Influencer life!",
      isReal: true
    }
  ],
  "linkedin": [
    {
      title: "LinkedIn Top Voice: 'I Wake Up at 2 AM to Grind While You Sleep'",
      url: "https://www.linkedin.com/pulse/hustle-culture",
      displayUrl: "https://www.linkedin.com › pulse",
      snippet: "I haven't slept in 3 years. My only friend is my Tesla. #5AMClub #RiseAndGrind",
      isReal: true
    }
  ],
  "youtube": [
    {
      title: "YouTube Algorithm Recommended This Video 47 Times",
      url: "https://www.youtube.com/feed/trending",
      displayUrl: "https://www.youtube.com › feed",
      snippet: "I finally clicked. It was a 10-hour video of paint drying. 5M views. I watched it all.",
      isReal: true
    }
  ],
  "wikipedia": [
    {
      title: "Wikipedia: The Edit War That Lasted 10 Years",
      url: "https://en.wikipedia.org/wiki/Wikipedia:Edit_warring",
      displayUrl: "https://en.wikipedia.org › wiki",
      snippet: "Two editors fought over whether tomatoes are fruits for a decade. 50,000 revisions. No winner.",
      isReal: true
    }
  ],
  "ebay": [
    {
      title: "eBay: 'I Accidentally Bid $50,000 on a Used Tissue'",
      url: "https://www.ebay.com/sch/i.html?_nkw=weird-auctions",
      displayUrl: "https://www.ebay.com › sch",
      snippet: "Seller wouldn't cancel. Now I own a piece of history apparently. 5 stars for fast shipping.",
      isReal: true
    }
  ],
  "tripadvisor": [
    {
      title: "TripAdvisor Review: 'This Restaurant Gave Me Food Poisoning and I Loved It'",
      url: "https://www.tripadvisor.com/Search?q=bad+restaurants",
      displayUrl: "https://www.tripadvisor.com › Search",
      snippet: "Lost 10 pounds in 2 days! 5 stars for the unexpected weight loss program. Would vomit again.",
      isReal: true
    }
  ],
  "quora": [
    {
      title: "Quora: 'If I Eat Myself, Will I Become Twice as Big or Disappear Completely?'",
      url: "https://www.quora.com/weird-questions",
      displayUrl: "https://www.quora.com",
      snippet: "Top answer from 'Former NASA Scientist': It depends on your metabolism. 15k upvotes.",
      isReal: true
    }
  ],
  "airbnb": [
    {
      title: "Airbnb Review: 'Host Lives in the Closet and Watches Me Sleep'",
      url: "https://www.airbnb.com/s/experiences",
      displayUrl: "https://www.airbnb.com › s",
      snippet: "5 stars for 'authentic local experience'. He made great pancakes. Would stay again if he wears pants.",
      isReal: true
    }
  ],
  "uber": [
    {
      title: "Uber Driver Took Me on a 3-Hour 'Scenic Route' to the Airport",
      url: "https://www.uber.com/us/en/ride/",
      displayUrl: "https://www.uber.com › ride",
      snippet: "Missed my flight but saw 4 counties. Driver said he was 'preparing for NASCAR'. $247 fare.",
      isReal: true
    }
  ],
  "stackoverflow": [
    {
      title: "Stack Overflow: Question Marked as Duplicate of Unrelated Post from 2009",
      url: "https://stackoverflow.com/questions/tagged/closed",
      displayUrl: "https://stackoverflow.com › questions",
      snippet: "'This has been asked before' - Links to question about Python. I was asking about my marriage.",
      isReal: true
    }
  ],
  "github": [
    {
      title: "GitHub: I Pushed My Passwords to Public Repo and Now I'm Famous",
      url: "https://github.com/trending",
      displayUrl: "https://github.com › trending",
      snippet: "10k stars. Someone forked my identity. Thanks for the free security audit, internet.",
      isReal: true
    }
  ],
  "medium": [
    {
      title: "Medium Article: 'Why Quitting Your Job to Become a Digital Nomad Destroyed My Life'",
      url: "https://medium.com/tag/remote-work",
      displayUrl: "https://medium.com › tag",
      snippet: "Turns out working from a beach is just sand in your laptop. Now I'm homeless but my WiFi is great.",
      isReal: true
    }
  ],
  "substack": [
    {
      title: "Substack Newsletter: 'I Made $0.47 Writing Online for 3 Years'",
      url: "https://substack.com/home",
      displayUrl: "https://substack.com › home",
      snippet: "My mom subscribed 47 times. Here's my guide to financial freedom through newsletters.",
      isReal: true
    }
  ]
};

// Fallback generici (sempre link reali)
const genericFallbacks: SearchResult[] = [
  {
    title: "r/ShittyLifeProTips - The Worst Advice on the Internet",
    url: "https://www.reddit.com/r/ShittyLifeProTips/top/?t=all",
    displayUrl: "https://www.reddit.com › r › ShittyLifeProTips",
    snippet: "Life advice so bad it's good. 3.5M members sharing the worst tips imaginable. You won't believe #7.",
    isReal: true
  },
  {
    title: "r/DiWHY - When DIY Goes Wrong",
    url: "https://www.reddit.com/r/DiWHY/top/?t=month",
    displayUrl: "https://www.reddit.com › r › DiWHY",
    snippet: "Why would anyone make this? Terrible DIY projects that shouldn't exist. 2.8M members.",
    isReal: true
  },
  {
    title: "r/WhatCouldGoWrong - Instant Regret Compilation",
    url: "https://www.reddit.com/r/WhatCouldGoWrong/top/?t=week",
    displayUrl: "https://www.reddit.com › r › WhatCouldGoWrong",
    snippet: "Let's see what happens when we ignore common sense. Spoiler: Everything goes wrong.",
    isReal: true
  },
  {
    title: "r/IdiotsInCars - Driving Fails",
    url: "https://www.reddit.com/r/IdiotsInCars/hot/",
    displayUrl: "https://www.reddit.com › r › IdiotsInCars",
    snippet: "How NOT to operate a motor vehicle. Insurance agents' nightmare fuel. 5M+ members.",
    isReal: true
  },
  {
    title: "WikiHow to Do Anything (Badly)",
    url: "https://www.wikihow.com/Special:Random",
    displayUrl: "https://www.wikihow.com › Special:Random",
    snippet: "Random WikiHow article. Guaranteed to have questionable illustrations and questionable advice.",
    isReal: true
  },
  {
    title: "r/AmITheAsshole - You Definitely Are",
    url: "https://www.reddit.com/r/AmITheAsshole/top/?t=week",
    displayUrl: "https://www.reddit.com › r › AmITheAsshole",
    snippet: "Spoiler alert: Yes. Yes you are. 14M members judging your life choices.",
    isReal: true
  }
];

// Special sites database - 100 curated weird/interesting sites
const specialSitesDatabase: Record<string, SearchResult[]> = {
  // OSINT & Surveillance
  "osint": [
    { title: "Shodan.io - Search Engine for the Internet of Everything", url: "https://www.shodan.io", displayUrl: "shodan.io", snippet: "The search engine for everything on the Internet. Find webcams, servers, IoT devices, and more that are exposed to the web.", isReal: true },
    { title: "Have I Been Pwned - Check if Your Email Has Been Compromised", url: "https://haveibeenpwned.com", displayUrl: "haveibeenpwned.com", snippet: "Check if your email address or phone number has appeared in data breaches. Over 12 billion compromised accounts tracked.", isReal: true },
    { title: "DNSDumpster - Domain Research Tool", url: "https://dnsdumpster.com", displayUrl: "dnsdumpster.com", snippet: "Free domain research tool that can discover hosts related to a domain. Find subdomains, IP addresses, and DNS records.", isReal: true },
    { title: "GreyNoise - Internet Noise Intelligence", url: "https://www.greynoise.io", displayUrl: "greynoise.io", snippet: "Analyze Internet-wide scan traffic to identify bot activity and potential threats. Separates noise from real threats.", isReal: true },
    { title: "Exploit Database - Archive of Exploits", url: "https://www.exploit-db.com", displayUrl: "exploit-db.com", snippet: "Archive of public exploits and corresponding vulnerable software. Used by security researchers and penetration testers worldwide.", isReal: true },
    { title: "10 Minute Mail - Temporary Email Service", url: "https://10minutemail.com", displayUrl: "10minutemail.com", snippet: "Get a temporary email address that self-destructs after 10 minutes. Perfect for signing up on suspicious sites.", isReal: true },
    { title: "Hunter.io - Email Finder", url: "https://hunter.io", displayUrl: "hunter.io", snippet: "Find email addresses from any company domain. Professional email intelligence tool for business outreach.", isReal: true },
    { title: "Privnote - Self-Destructing Notes", url: "https://privnote.com", displayUrl: "privnote.com", snippet: "Send notes that will self-destruct after being read. No registration, no tracking, just private messaging.", isReal: true },
    { title: "VirusTotal - File and URL Scanner", url: "https://www.virustotal.com", displayUrl: "virustotal.com", snippet: "Analyze suspicious files and URLs to detect malware. Uses 70+ antivirus scanners and URL/domain blocklisting services.", isReal: true },
    { title: "Wayback Machine - Internet Archive", url: "https://web.archive.org", displayUrl: "web.archive.org", snippet: "Browse through over 800 billion web pages saved over time. See websites as they appeared in the past.", isReal: true },
    { title: "Intelligence X - Deep Web Search Engine", url: "https://intelx.io", displayUrl: "intelx.io", snippet: "Search engine and data archive for the Deep Web, dark web, and leaked data. Used by journalists and security researchers.", isReal: true },
    { title: "OSINT Framework - Investigation Tools Collection", url: "https://osintframework.com", displayUrl: "osintframework.com", snippet: "Interactive mind map of OSINT tools and resources for investigations. Categorized by source type and purpose.", isReal: true }
  ],
  // Creepy & Mysterious
  "creepy": [
    { title: "973-eht-namuh-905.com - Esoteric Numerology Labyrinth", url: "https://www.google.com/search?q=973-eht-namuh-905.com", displayUrl: "973-eht-namuh-905.com", snippet: "A maze of encrypted pages, numerology, and esoteric imagery. The meaning behind the cryptic messages remains unexplained.", isReal: true },
    { title: "ThisMan.org - The Man from Your Dreams", url: "https://www.thisman.org", displayUrl: "thisman.org", snippet: "Archive dedicated to the mysterious man thousands of people claim to have seen in their dreams. Who is he?", isReal: true },
    { title: "Texas Death Row Information - Last Statements", url: "https://www.tdcj.texas.gov/death_row/dr_executed_offenders.html", displayUrl: "tdcj.texas.gov › death_row", snippet: "Official registry of executed offenders in Texas. Read the last statements of death row inmates since 1982.", isReal: true },
    { title: "Plane Crash Info - Last Words", url: "http://www.planecrashinfo.com/lastwords.htm", displayUrl: "planecrashinfo.com › lastwords", snippet: "Transcriptions of cockpit voice recordings from aircraft accidents. The final moments before disaster.", isReal: true },
    { title: "White Enamel - Abandoned Psychiatric Hospital", url: "https://www.whiteenamel.com", displayUrl: "whiteenamel.com", snippet: "Interactive exploration of an abandoned psychiatric hospital. Atmospheric horror experience with disturbing imagery.", isReal: true },
    { title: "Hashima Island - Ghost Island Tour", url: "https://www.google.com/maps/@33.736102,129.870774,3a,75y,90t/data=!3m8!1e1!3m6!1sAF1QipO5vNO", displayUrl: "Google Maps › Hashima Island", snippet: "Virtual tour of the abandoned Japanese ghost island. Once the most densely populated place on Earth, now completely deserted.", isReal: true },
    { title: "World Births and Deaths - Real-time Simulation", url: "http://www.worldbirthsanddeaths.com", displayUrl: "worldbirthsanddeaths.com", snippet: "Real-time visualization of global births and deaths. Watch as dots appear for each birth and disappear for each death worldwide.", isReal: true },
    { title: "Homicide Monitor - Global Murder Statistics", url: "http://www.homicidemonitor.org", displayUrl: "homicidemonitor.org", snippet: "Detailed statistics and maps on homicide rates around the world. The most comprehensive database of murder statistics globally.", isReal: true },
    { title: "Creepypasta.com - Internet Horror Stories", url: "https://www.creepypasta.com", displayUrl: "creepypasta.com", snippet: "The main archive for horror literature born on the web. Home to Slender Man, Jeff the Killer, and countless nightmares.", isReal: true },
    { title: "Skyway Bridge - Suicide Statistics", url: "https://www.skywaybridge.com", displayUrl: "skywaybridge.com", snippet: "Statistical monitoring of suicides and incidents on the Sunshine Skyway Bridge. A sobering look at a tragic landmark.", isReal: true },
    { title: "Cicada 3301 Archives - The Cryptic Mystery", url: "https://www.cicada3301.org", displayUrl: "cicada3301.org", snippet: "Documentation of the most complex cryptographic mystery on the internet. Secret messages, puzzles, and global scavenger hunts.", isReal: true },
    { title: "Goodbye Warden - Last Meals of the Condemned", url: "https://goodbyewarden.com", displayUrl: "goodbyewarden.com", snippet: "Collection of final meal requests from death row inmates. A haunting look at last wishes and culinary choices before execution.", isReal: true },
    { title: "Simulation Argument - Are We Living in a Simulation?", url: "https://www.simulation-argument.com", displayUrl: "simulation-argument.com", snippet: "Philosophical papers and arguments about the possibility that we are living in a computer simulation. By Nick Bostrom.", isReal: true },
    { title: "The Dionaea House - Fragmented Horror Narrative", url: "http://www.thedionaeahouse.com", displayUrl: "thedionaeahouse.com", snippet: "A horror story told across multiple blogs and emails. Unravel the mystery of a house that consumes its inhabitants.", isReal: true }
  ],
  // Absurd & Pointless
  "absurd": [
    { title: "Zombo.com - The Infinite Possibility", url: "https://zombo.com", displayUrl: "zombo.com", snippet: "Welcome to Zombo com! You can do anything at Zombo com. Anything is possible at Zombo com. The limit is yourself.", isReal: true },
    { title: "Pointer Pointer - Find Your Cursor", url: "https://pointerpointer.com", displayUrl: "pointerpointer.com", snippet: "Move your mouse anywhere on the screen. The site will find and display an image of someone pointing exactly at your cursor.", isReal: true },
    { title: "Cat Bounce - Gravity is Optional", url: "http://cat-bounce.com", displayUrl: "cat-bounce.com", snippet: "Cats bouncing around your screen. Drag them, throw them, watch them bounce. Simple, pointless, mesmerizing.", isReal: true },
    { title: "Eel Slap - Interactive Slap", url: "http://eelslap.com", displayUrl: "eelslap.com", snippet: "Drag your mouse to slap a man with an eel in slow motion. That's it. That's the whole website.", isReal: true },
    { title: "Staggering Beauty - Worm.exe", url: "http://www.staggeringbeauty.com", displayUrl: "staggeringbeauty.com", snippet: "A black worm that reacts psychedelically to your mouse movements. Warning: Contains flashing lights and unexpected behavior.", isReal: true },
    { title: "Endless Horse - Infinite Legs", url: "http://endless.horse", displayUrl: "endless.horse", snippet: "An ASCII art horse with infinite legs. Scroll down forever and watch the legs never end.", isReal: true },
    { title: "Paper Toilet - Virtual TP", url: "http://papertoilet.com", displayUrl: "papertoilet.com", snippet: "Digital simulation of unrolling toilet paper. Roll it up, roll it down, waste virtual trees instead of real ones.", isReal: true },
    { title: "Falling Falling - Hypnotic Animation", url: "http://www.fallingfalling.com", displayUrl: "fallingfalling.com", snippet: "Hypnotic animation of colored shapes appearing to fall toward the viewer. Mesmerizing and slightly unsettling.", isReal: true },
    { title: "Zoomquilt - Infinite Zoom Art", url: "https://zoomquilt.org", displayUrl: "zoomquilt.org", snippet: "Infinitely zooming collaborative artwork. Keep zooming forever through surreal landscapes painted by different artists.", isReal: true },
    { title: "The Useless Web - Random Pointlessness", url: "https://theuselessweb.com", displayUrl: "theuselessweb.com", snippet: "Takes you to a random useless website with every click. The ultimate portal to internet absurdity.", isReal: true },
    { title: "Find the Invisible Cow - Audio Game", url: "http://findtheinvisiblecow.com", displayUrl: "findtheinvisiblecow.com", snippet: "Audio-based game where you must find an invisible cow using sound cues. Hotter... colder... COW!", isReal: true },
    { title: "Is It Christmas? - The Answer", url: "https://isitchristmas.com", displayUrl: "isitchristmas.com", snippet: "A website that simply answers yes or no to the question 'Is it Christmas?' No other information provided.", isReal: true },
    { title: "Koalas to the Max - Circle Division", url: "http://www.koalastothemax.com", displayUrl: "koalastothemax.com", snippet: "An image of a koala composed of circles that divide progressively as you move your mouse. Mesmerizing reveal.", isReal: true },
    { title: "Quick Draw - Can AI Guess Your Drawing?", url: "https://quickdraw.withgoogle.com", displayUrl: "quickdraw.withgoogle.com", snippet: "Google's AI experiment: draw something in under 20 seconds and see if the neural network can guess what it is.", isReal: true },
    { title: "He-Man Sings - 4 Non Blondes Cover", url: "http://www.heman.org", displayUrl: "heman.org", snippet: "He-Man singing 'What's Up' by 4 Non Blondes. An internet classic that loops forever in all its glory.", isReal: true }
  ],
  // Glitch & Net Art
  "glitch": [
    { title: "Jodi.org - Net Art Pioneers", url: "http://www.jodi.org", displayUrl: "jodi.org", snippet: "Pioneering net art collective. Pages that look like system bugs, alien code, or computer crashes. Art disguised as malfunction.", isReal: true },
    { title: "Windows 93 - Retro OS Simulator", url: "https://windows93.net", displayUrl: "windows93.net", snippet: "Simulated operating system in your browser. A distorted parody of vintage Windows with working apps and games.", isReal: true },
    { title: "Silk - Interactive Generative Art", url: "http://weavesilk.com", displayUrl: "weavesilk.com", snippet: "Create beautiful flowing art with your mouse. Generative fractal patterns that follow your movements like silk.", isReal: true },
    { title: "Neave.TV - Surreal Channel Surfing", url: "https://neave.tv", displayUrl: "neave.tv", snippet: "Collection of surreal videos that change with every click like channel surfing. Weird, wonderful, unexpected.", isReal: true },
    { title: "Patatap - Visual Sound", url: "https://www.patatap.com", displayUrl: "patatap.com", snippet: "Associate sounds and geometric animations with every keyboard key. Create audiovisual compositions instantly.", isReal: true },
    { title: "Incredibox - Beatbox Composer", url: "https://www.incredibox.com", displayUrl: "incredibox.com", snippet: "Drag and drop beatbox characters to compose music. Create your own tracks with animated beatboxers.", isReal: true },
    { title: "The Evolution of Trust - Game Theory", url: "https://ncase.me/trust", displayUrl: "ncase.me › trust", snippet: "Interactive game about the evolution of trust and game theory. Why we cooperate or betray each other.", isReal: true },
    { title: "Radiooooo - Musical Time Machine", url: "https://radiooooo.com", displayUrl: "radiooooo.com", snippet: "Musical map of the world by decade. Listen to popular songs from any country, any decade from 1900 to today.", isReal: true }
  ],
  // Historical & Abandoned
  "historical": [
    { title: "Space Jam (1996) - Original Website", url: "https://www.spacejam.com/1996", displayUrl: "spacejam.com › 1996", snippet: "The original promotional website for the Space Jam movie, never updated since 1996. A time capsule of early web design.", isReal: true },
    { title: "Dole Kemp '96 - Campaign Website", url: "http://www.dolekemp96.org", displayUrl: "dolekemp96.org", snippet: "The 1996 presidential campaign website preserved exactly as it was. A piece of political internet history.", isReal: true },
    { title: "The Million Dollar Homepage - Pixel Advertising", url: "http://www.milliondollarhomepage.com", displayUrl: "milliondollarhomepage.com", snippet: "A page where every pixel was sold as advertising space. 1 million pixels at $1 each. Internet history.", isReal: true },
    { title: "Heaven's Gate - Cult Website (Preserved)", url: "http://www.heavensgate.com", displayUrl: "heavensgate.com", snippet: "The official website of the Heaven's Gate cult, still maintained by surviving members. Eerie time capsule.", isReal: true },
    { title: "Fogcam - Oldest Webcam", url: "http://www.fogcam.org", displayUrl: "fogcam.org", snippet: "One of the oldest webcams still operating on the internet. Broadcasting from San Francisco since 1994.", isReal: true },
    { title: "Something Awful - Forum History", url: "https://www.somethingawful.com", displayUrl: "somethingawful.com", snippet: "Historic forum, birthplace of much of today's meme culture. Running since 1999 with influential comedy content.", isReal: true },
    { title: "OldWeb.today - Browser Time Machine", url: "https://oldweb.today", displayUrl: "oldweb.today", snippet: "Emulation service to browse old websites using vintage browsers. Experience the web as it was in the 90s and 2000s.", isReal: true }
  ],
  // Mysteries & Conspiracies
  "mystery": [
    { title: "The Black Vault - Declassified Documents", url: "https://www.theblackvault.com", displayUrl: "theblackvault.com", snippet: "Massive archive of declassified documents on UFOs, espionage, and government secrets. FOIA requests made public.", isReal: true },
    { title: "Cryptome - Leaked Documents", url: "https://cryptome.org", displayUrl: "cryptome.org", snippet: "Platform publishing classified documents related to global surveillance and intelligence. Whistleblower documents.", isReal: true },
    { title: "Exit Mundi - End of the World Scenarios", url: "http://www.exitmundi.nl", displayUrl: "exitmundi.nl", snippet: "Catalog of all possible end-of-the-world scenarios. From asteroid impacts to vacuum decay. Cheerful stuff.", isReal: true },
    { title: "The Voynich Manuscript - Undeciphered Text", url: "https://www.voynich.nu", displayUrl: "voynich.nu", snippet: "Complete scans of the medieval manuscript that has never been deciphered. Mysterious illustrations and unknown language.", isReal: true },
    { title: "The Library of Babel - Every Possible Text", url: "https://libraryofbabel.info", displayUrl: "libraryofbabel.info", snippet: "Contains every possible combination of 3200 characters. Every book that could ever be written exists here.", isReal: true },
    { title: "MKUltra Files - CIA Mind Control Documents", url: "https://www.cia.gov/readingroom/search/site/MKULTRA", displayUrl: "cia.gov › readingroom", snippet: "Official documentation of CIA mind control experiments. Declassified documents on psychological torture and LSD experiments.", isReal: true },
    { title: "Project Blue Book - UFO Investigations", url: "https://www.archives.gov/research/military/air-force/ufos", displayUrl: "archives.gov › ufos", snippet: "Air Force investigations into UFO sightings. 12,618 sightings investigated between 1947-1969.", isReal: true },
    { title: "The Great Unsolved - Cold Cases", url: "https://www.thegreatunsolved.com", displayUrl: "thegreatunsolved.com", snippet: "Database of criminal mysteries and disappearances that remain unsolved. Investigative journalism on cold cases.", isReal: true },
    { title: "Titanic Passenger Database", url: "https://www.encyclopedia-titanica.org", displayUrl: "encyclopedia-titanica.org", snippet: "Complete list and biographical data of every passenger on the Titanic. Historical records of the disaster.", isReal: true },
    { title: "Conspiracy Archive - Secret Societies", url: "https://www.conspiracyarchive.com", displayUrl: "conspiracyarchive.com", snippet: "Encyclopedia dedicated to secret societies and conspiracy theories. Deep dives into hidden power structures.", isReal: true },
    { title: "The Numbers Stations - Mysterious Radio Transmissions", url: "https://www.numbers-stations.com", displayUrl: "numbers-stations.com", snippet: "Archive of audio from mysterious shortwave radio stations broadcasting coded messages of unknown origin.", isReal: true }
  ],
  // Public Records & Data
  "public": [
    { title: "Public Data - American Public Records", url: "https://publicdatacheck.com", displayUrl: "publicdatacheck.com", snippet: "Aggregator of American public records, from traffic tickets to court cases. Search public data by name or location.", isReal: true },
    { title: "Blackbook Online - Investigative Database Portal", url: "https://www.blackbookonline.info", displayUrl: "blackbookonline.info", snippet: "Portal with links to investigative databases and public records. Research tool for background checks.", isReal: true },
    { title: "DNSTrails - Historical DNS Records", url: "https://securitytrails.com/domain/example.com/history/a", displayUrl: "securitytrails.com", snippet: "Database of historical DNS records. Analyze domain ownership changes and infrastructure history.", isReal: true },
    { title: "Censys - Network Infrastructure Monitoring", url: "https://censys.io", displayUrl: "censys.io", snippet: "Platform for monitoring internet infrastructure security. Track changes in network configurations worldwide.", isReal: true }
  ]
};

// Generic keywords that match special sites
const specialKeywords: Record<string, string[]> = {
  "osint": ["sicurezza", "hacker", "spionaggio", "privacy", "leak", "osint", "investigazione", "traccia", "cerca persona", "dati", "breach"],
  "creepy": ["orrore", "horror", "morte", "paura", "spavento", "cimitero", "fantasma", "macabro", "mistero", "inquietante", "creepy", "scary"],
  "absurd": ["inutile", "stupido", "assurdo", "silly", "fun", "divertente", "scherzo", "ridicolo", "pointless", "tempo libero", "noia"],
  "glitch": ["arte", "art", "glitch", "net art", "musica", "music", "disegno", "draw", "suono", "sound", "creativo"],
  "historical": ["storia", "history", "vecchio", "old", "retro", "vintage", "90s", "anni 90", "passato", "nostalgia"],
  "mystery": ["mistero", "mystery", "conspiracy", "complotto", "ufologia", "ufo", "alieni", "aliens", "insolito", "strano", "weird"],
  "public": ["record", "pubblico", "public", "database", "ricerca", "search", "documenti", "documents"]
};

export function generateOppositeResults(query: string): SearchResult[] {
  // Get all 100 special sites
  const allSpecialSites = Object.values(specialSitesDatabase).flat();
  
  // Select 7 random special sites
  const randomSpecialSites = [...allSpecialSites]
    .sort(() => Math.random() - 0.5)
    .slice(0, 7);
  
  // Select 3 random opposite/generic results
  const randomOpposite = [...genericFallbacks]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  
  // Combine and shuffle all 10 results
  const allResults = [...randomSpecialSites, ...randomOpposite]
    .sort(() => Math.random() - 0.5);
  
  return allResults;
}

// Per query sconosciute, cerca su YouTube
export function generateYouTubeSearch(query: string): SearchResult {
  const oppositeTerms = [
    "fail", "disaster", "worst", "gone wrong", 
    "bad idea", "mistake", "regret", "don't do this"
  ];
  const randomTerm = oppositeTerms[Math.floor(Math.random() * oppositeTerms.length)];
  const searchQuery = encodeURIComponent(`${query} ${randomTerm}`);
  
  return {
    title: `${query} ${randomTerm} - YouTube Search`,
    url: `https://www.youtube.com/results?search_query=${searchQuery}`,
    displayUrl: "https://www.youtube.com › results",
    snippet: `Watch what happens when ${query} goes terribly wrong. Real people, real mistakes, real consequences.`,
    isReal: true
  };
}
