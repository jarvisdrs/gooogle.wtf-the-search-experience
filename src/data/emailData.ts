// Epstein emails data for all mail folders
export interface Email {
  id: string;
  from: string;
  to?: string;
  subject: string;
  preview: string;
  body?: string;
  time: string;
  read: boolean;
  starred: boolean;
}

// Helper to parse Italian dates for sorting
function parseDate(dateStr: string): Date {
  const monthMap: Record<string, string> = {
    'gen': '01', 'feb': '02', 'mar': '03', 'apr': '04', 'mag': '05', 'giu': '06',
    'lug': '07', 'ago': '08', 'set': '09', 'ott': '10', 'nov': '11', 'dic': '12',
    'gennaio': '01', 'febbraio': '02', 'marzo': '03', 'aprile': '04', 'maggio': '05', 'giugno': '06',
    'luglio': '07', 'agosto': '08', 'settembre': '09', 'ottobre': '10', 'novembre': '11', 'dicembre': '12'
  };
  
  const lowerStr = dateStr.toLowerCase().trim();
  
  // Handle "fine 2010" format
  if (lowerStr.startsWith('fine ')) {
    const year = lowerStr.replace('fine ', '');
    return new Date(`${year}-12-31`);
  }
  
  // Handle "ott 2013" format (abbreviated month + year)
  const shortMonthMatch = lowerStr.match(/^(\w+)\s+(\d{4})$/);
  if (shortMonthMatch) {
    const month = monthMap[shortMonthMatch[1]];
    const year = shortMonthMatch[2];
    if (month) {
      return new Date(`${year}-${month}-15`);
    }
  }
  
  // Handle "14 giu 2015" format (day + abbreviated month + year)
  const fullDateMatch = lowerStr.match(/^(\d{1,2})\s+(\w+)\s+(\d{4})$/);
  if (fullDateMatch) {
    const day = fullDateMatch[1].padStart(2, '0');
    const month = monthMap[fullDateMatch[2]];
    const year = fullDateMatch[3];
    if (month) {
      return new Date(`${year}-${month}-${day}`);
    }
  }
  
  // Handle "ottobre 2002" format (full month + year)
  const fullMonthMatch = lowerStr.match(/^(\w+)\s+(\d{4})$/);
  if (fullMonthMatch) {
    const month = monthMap[fullMonthMatch[1]];
    const year = fullMonthMatch[2];
    if (month) {
      return new Date(`${year}-${month}-15`);
    }
  }
  
  // Handle year only like "2011", "2015"
  if (/^\d{4}$/.test(lowerStr)) {
    return new Date(`${lowerStr}-06-15`);
  }
  
  // Handle "feb 2014" format
  if (/^\w+\s+\d{4}$/.test(lowerStr)) {
    const parts = lowerStr.split(' ');
    const month = monthMap[parts[0]];
    if (month) {
      return new Date(`${parts[1]}-${month}-15`);
    }
  }
  
  return new Date('2000-01-01');
}

// Helper to generate email bodies
function generateBody(id: string, preview: string): string {
  const bodies: Record<string, string> = {
    // Inbox emails
    "ep001": "Hi J,\n\nConfirming our meeting next Tuesday at 3 PM. Please arrange transportation from Teterboro to the city.\n\nThe usual arrangements apply.\n\nBest,\nG",
    "ep002": "Dear Mr. Epstein,\n\nPlease review the attached filings for Case #12345. Court deadline is this Friday at 5 PM EST.\n\nWe need your signature on pages 4, 12, and 23.\n\nRegards,\nYour Legal Team",
    "ep003": "Jeffrey,\n\nFlight plan confirmed for tomorrow:\n- Departure: TEB 10:00 AM\n- Destination: PBI (Palm Beach)\n- Passengers: 4 confirmed\n- Aircraft: Lolita Express (N908JE)\n\nWeather looks good.\n\n- Your Pilot",
    "ep004": "Mr. Epstein,\n\nWire transfer completed as requested:\n- Amount: $2.5M USD\n- Destination: Offshore account ending in 8842\n- Reference: #987654321\n\nPlease confirm receipt.\n\nBest regards,\nAccountant",
    "ep005": "Jeffrey,\n\nRenovations scheduled for next month:\n- Main villa: new security system\n- Guest cottages: plumbing updates\n- Pool area: resurfacing\n\nPlease confirm these dates work with your schedule.\n\nProperty Manager",
    "ep006": "J,\n\nGuest list confirmed for Sunday:\n- VIP attendees: 12\n- Security: full detail\n- Catering: confirmed\n\nAll arrangements in place. See you Sunday.\n\nG",
    "ep007": "Mr. Epstein,\n\nNew access codes effective immediately:\n- Main gate: 7382\n- Villa entrance: 9514\n- Private elevator: 4401\n\nPrevious codes expire at midnight tonight.\n\nSecurity Team",
    "ep008": "Dear Mr. Epstein,\n\nMonthly statement attached:\n- Opening balance: $12.8M\n- Deposits: +$1.5M\n- Withdrawals: -$0.1M\n- Closing balance: $14.2M USD\n\nAll transactions appear normal.\n\nBank Officer",
    "ep009": "Leon,\n\nI need your guys to review the trust for Apollo. Can we save another 50M?\n\nLet me know ASAP.\n\nBest,\nJ",
    "ep010": "Jeffrey,\n\nGreat dinner. Your contribution to genetics research is fundamental. I'm sending the wire tomorrow.\n\nBest regards,\nLarry",
    "ep011": "J,\n\nYour lifestyle is intriguing, although it wouldn't work for me.\n\nBest,\nBill",
    "ep012": "Jeffrey,\n\nConfirming dinner to discuss world affairs and international politics in Manhattan.\n\nSee you there,\nNoam",
    "ep013": "G,\n\nTell the pilot the Gulfstream needs servicing in Florida, not NY. Lower taxes.\n\nJ",
    "ep014": "Jeffrey,\n\nPositive RSVP for the group dinner at the 71st Street residence.\n\nBest,\nWoody",
    // Additional inbox emails
    "ep015": "Jeffrey,\n\nNew talent portfolios attached:\n- 12 candidates, ages 18-22\n- International passports verified\n- All signed model release forms\n- Available for 'modeling workshops' starting next week\n\nThese girls are very eager to learn and have been briefed on the opportunities you're offering. Some are quite talented.\n\nLet me know which ones interest you for the next 'casting session'.\n\nJLB",
    "ep016": "Mr. Epstein,\n\nWEEKLY SECURITY REPORT - Zorro Ranch\nPeriod: May 1-7, 2008\n\nINCIDENTS: None\nPERIMETER: Secure\nCAMERAS: New installation completed in guest quarters\nUNDERGROUND FACILITY: Access logs attached (12 authorized entries)\n\nSPECIAL NOTES:\n- New facial recognition system active\n- Secure tunnel maintenance completed\n- Staff background checks updated\n\nAll clear.\n\nChief Security Officer",
    "ep017": "Dear Valued Client,\n\nACCOUNT ACTIVITY ALERT\nAccount: ****9921 (Gratitude America Ltd.)\n\nTransaction detected:\n- Date: April 3, 2016\n- Amount: +$12,000,000.00 USD\n- Originator: Vessel Holdings LLC\n- Reference: ISLAND-MAINTENANCE-FUND\n\nThis triggers our large transaction protocol. Please confirm this is expected to avoid unnecessary compliance review.\n\nReply CONFIRM to authorize.\n\nCayman National Bank",
    "ep018": "Jeffrey,\n\nI've gone through everything. Here's the strategy:\n\n1. Non-Prosecution Agreement is our target - no federal charges\n2. Emphasize your philanthropic work (MIT, Harvard donations)\n3. Acosta's office seems open to negotiation\n4. State charges only - minimal jail time, work release program\n\nThe 'science research' narrative is perfect. No one wants to be the person who stopped scientific progress.\n\nMy fee: $1M + expenses. Worth every penny.\n\nAD",
    "ep019": "Mr. Epstein,\n\nPROJECT COMPLETION REPORT\nLittle St. James - 'Gymnasium' Structure\n\nCOMPLETED:\n- Main structure: Blue and white striped temple (as requested)\n- Interior: Soundproofed meditation/prayer rooms (3)\n- Lower level: Secure storage as specified\n- Special fixtures: Custom locks and access controls\n\nINVOICE: $847,500 USD\n- All local permits approved\n- Zoning variances obtained\n- Labeled as 'gym equipment storage' on official docs\n\nReady for use.\n\nConstruction Manager",
    "ep020": "Jeffrey,\n\nGreat speaking with you. The Clinton Global Initiative Africa trip is shaping up nicely.\n\nPlease confirm:\n- Departure: March 15 from Teterboro\n- Stops: Morocco, Ghana, Nigeria, Rwanda\n- Return: March 22\n\nChelsea is excited about the 'philanthropy education' opportunities you mentioned. I told her about your great work with young people.\n\nAppreciate your support of CGI. You're making a real difference.\n\nBill",
    "ep021": "Jeffrey,\n\nThis week's schedule:\n\nMONDAY:\n- 2:00 PM - Therapist A (massage certification verified)\n- 4:00 PM - Therapist B\n\nTUESDAY-FRIDAY:\n- Rotating schedule as requested\n- All therapists: NDAs signed, cash payments prepared\n- Mobile phones collected upon entry\n\nSPECIAL REQUESTS:\n- New organic oils delivered\n- Room temperature set to 72°F\n- Security standing by\n\nAll set.\n\nSK",
    "ep022": "Mr. Epstein,\n\nISSUE: Noise Complaint - 358 El Brillo Way\n\nThe neighbors (Baker residence) have filed a complaint regarding:\n- Late night visitors (after 11 PM)\n- Vehicle traffic at odd hours\n- 'Unusual activity' noted\n\nRECOMMENDATION:\n- Schedule high-activity nights for weekends only\n- Use garage entrance exclusively after 10 PM\n- Consider 'donation' to neighborhood association ($25K should suffice)\n\nBetter to handle this quietly before it reaches the city.\n\nProperty Manager",
    "ep023": "Jeffrey,\n\nQuick ask: Can we use your NY place for a CF donor reception?\n\nDATE: September 12\nGUESTS: 25-30 major donors ($1M+ level)\nFORMAT: Cocktail reception + 'intimate discussion'\n\nThe President would attend (good optics for you too). Secret Service will do their sweep but they're familiar with your place by now.\n\nYour support has been invaluable. This would really help close Q3 strong.\n\nLet me know.\n\nDoug",
    "ep024": "Jeffrey,\n\nPASSPORT STATUS: All resolved\n\nThe Czech embassy expedited everything. I have:\n- My updated passport (age corrected as discussed)\n- Travel visas for France, UK, and Monaco\n- Documentation for 'assistant' role\n\nFLIGHT CONFIRMED:\n- JFK to CDG, September 3\n- First class as always\n\nLooking forward to the Paris apartment and meeting your friends there. I remember Monsieur Brunel mentioned some new talent for us to evaluate.\n\nSee you soon,\nNadia",
    "ep025": "Jeffrey,\n\nFlight plan confirmed:\n- Departure: TEB 08:30 AM\n- Destination: STT (St. Thomas) → helicopter to LSI\n- Passengers: 6 confirmed\n- Aircraft: N908JE (Lolita Express)\n- Return: TBD per your instructions\n\nFuel, catering, and ground transport arranged. Weather clear.\n\n- David",
    "ep026": "Dear Client,\n\nWe confirm the following transaction:\n\n- Amount: $5,200,000.00 USD\n- Beneficiary: Offshore Ventures Ltd.\n- Account: ****8842\n- Reference: SCIENCE-DONATION-Q2-2015\n- Purpose: 'Research Funding'\n\nTransaction completed: 22-OCT-2015\n\nNo further action required.\n\nSincerely,\nPrivate Banking Division",
    "ep027": "Jeffrey,\n\nI've updated the power of attorney documents per our discussion. The revised scope of financial authority has been expanded as requested.\n\nPlease review the attached documents and return signed copies. My attorneys have cleared everything.\n\nLet me know if you need anything else.\n\nBest,\nLes",
    "ep028": "Dear Jeffrey,\n\nHarvard gratefully acknowledges your generous gift of $6,500,000 to support the Edge research program.\n\nYour vision for advancing science and education continues to inspire our community. The restricted fund has been established per your specific requirements regarding program access and participant selection.\n\nWe look forward to hosting you at the next private symposium.\n\nWith appreciation,\nHarvard Development Office",
    "ep029": "Mr. Epstein,\n\nRE: Tax Exemption Application #VI-2018-0942\n\nYour application has been APPROVED. Little St. James is now classified as a 'Private Scientific Research Sanctuary' with full agricultural and educational tax exemptions.\n\nEffective date: January 1, 2018\nAnnual savings: Approximately $2.8M in property taxes\n\nRequirements:\n- Maintain minimum 10 'research participants' annually\n- File annual 'scientific progress reports'\n- Allow one government inspection per year (48hr notice)\n\nCongratulations on your commitment to science.\n\nVI Tax Authority",
    "ep030": "Dear Mr. Epstein,\n\nThank you for your generous contribution of $2,000,000 to MIT's Media Lab. Your support for our 'Advanced Networking & Youth Engagement' initiative has been duly noted.\n\nWe have arranged the private dinner with department heads as requested. The faculty is eager to discuss future collaborative opportunities.\n\nPlease find the tax documentation attached.\n\nWarm regards,\nDevelopment Office\nMIT Media Lab",
    // Crypto/Satoshi emails (inbox)
    "ep031": "Joi,\n\nWe need to fund blockchain research. It's the only way to move assets without KYC from banks.\n\nBest,\nJ",
    "ep032": "Peter,\n\nSatoshi solved the trust problem. If it's not one person, it's a group I know.\n\nBest,\nJeffrey",
    "ep033": "Jeffrey,\n\nDiscussion about founding a 'Crypto Island' and using Bitcoin for offshore logistics.\n\nBest,\nBrock",
    "ep034": "Mr. Epstein,\n\nLegal note on taxation of Bitcoin capital gains deposited in Swiss accounts.\n\nBest regards,\nM. Zwicky (Attorney)",
    "ep035": "Jeffrey,\n\nTechnical email on Hashcash and Proof of Work scalability systems.\n\nBest,\nAdam Back (Blockstream)",
    // Sent emails
    "sent001": "Hi Team,\n\nPlease confirm the arrangements for next week. I need everything ready by Tuesday morning.\n\nTransportation, security, and the usual preparations.\n\nBest,\nJ",
    "sent002": "Dear Mr. Smith,\n\nThank you for your donation to the science initiative. Your contribution of $500,000 has been received.\n\nWe will send you the tax documentation shortly.\n\nRegards,\nJeffrey Epstein",
    "sent003": "Pilot,\n\nPlease prepare the aircraft for Friday departure. We have 6 passengers.\n\nRoute: TEB → PBI\nTime: Departure 10:00 AM\n\nConfirm when ready.\n\nJ",
    "sent004": "Accountant,\n\nPlease transfer $1.2M to the following account:\n- Account: Offshore Holdings Ltd\n- Reference: Q3-2019-DIST\n\nProcess immediately.\n\nJE",
    "sent005": "Security Team,\n\nUpdate all access codes immediately. The current ones have been compromised.\n\nSend new codes via secure channel.\n\nJ. Epstein",
    "sent006": "Peter,\n\nInterested in your longevity research. Let's talk funding next week.\n\nBest,\nJeffrey Epstein",
    "sent007": "Marvin,\n\nTechnical discussion on AI and scientific symposium to organize on the island.\n\nLooking forward,\nJ",
    "sent008": "Andrew,\n\nI saw the note. We can solve the logistics issue for the Asia trip without problems.\n\nBest,\nJ",
    "sent009": "Jes,\n\nWe need to talk about JP Morgan's positioning in the Asian market. Come to the office?\n\nBest,\nJ",
    // Additional sent emails
    "sent010": "David,\n\nURGENT FLIGHT REQUEST\n\nDEPARTURE: Tomorrow, 06:00 AM\nROUTE: TEB → LBG (Paris Le Bourget)\nPASSENGERS: 4 (names in sealed envelope)\nRETURN: Open\n\nLOGISTICS:\n- File flight plan as 'business research trip'\n- No passenger manifest until airborne\n- Contact me on secure line only\n\nThis is priority. Do not discuss with anyone.\n\nJE",
    "sent011": "G,\n\nGuest list approved with additions:\n\nADD:\n- The Brazilian twins (confirm passport ages)\n- New girl from Prague (the one Brunel mentioned)\n- VIP guest from tech industry (confirming Monday)\n\nARRANGEMENTS:\n- Standard NDAs for all new faces\n- Phones collected at dock\n- Boat pickup: 10 AM Saturday\n- Security detail: Full perimeter\n\nThe VIP needs to feel special. You know what I mean.\n\nJ",
    "sent012": "Dear Development Office,\n\nConfirming the $6.5M pledge structure:\n\nPAYMENT SCHEDULE:\n- Q1 2006: $1.625M (next week)\n- Q2 2006: $1.625M\n- Q3 2006: $1.625M\n- Q4 2006: $1.625M\n\nCONDITIONS:\n- Access to Edge program events (confirmed)\n- Private office space in building (confirmed)\n- Participation in student mentorship (discuss separately)\n- Tax documentation to my accountant\n\nLooking forward to our continued partnership.\n\nJ. Epstein",
    "sent013": "Team,\n\nIMMEDIATE ACTION REQUIRED\n\nDOCUMENT DESTRUCTION PROTOCOL:\n- ALL flight logs 2002-2005\n- Visitor sign-in sheets (all properties)\n- Massage appointment records\n- Email backups from old servers\n- Financial transfers coded 'personal'\n\nMETHOD:\n- Physical: Industrial shredder then incinerate\n- Digital: Secure wipe with 7-pass overwrite\n- Phones: Destroy SIMs, crush devices\n\nLAWYER-CLIENT PRIVILEGE COVERS THIS COMMUNICATION\n\nExecute immediately. Confirm when complete.\n\nJE",
    "sent014": "Sarah,\n\nSTAFFING CONFIRMED:\n\nMASSAGE:\n- 3 therapists (rotating schedule)\n- All cash payment, no 1099s\n- NDAs signed and stored offsite\n\nHOUSE:\n- 2 private chefs\n- 4 security (armed, perimeter)\n- 1 boat captain\n\nCRITICAL:\n- NO written records of any 'extra' services\n- All gratuities in cash\n- Phones collected before island approach\n- Use code names in all communications\n\nThe VIP guest requires discretion. Triple check everything.\n\nJ",
    "sent015": "Private Banking Team,\n\nWIRE TRANSFER REQUEST\n\nFROM: Epstein Personal Account ****7734\nTO: Gratitude America Ltd.\nAccount: Cayman National ****9921\nAMOUNT: $3,500,000.00 USD\n\nPURPOSE: Charitable Foundation Support\nREFERENCE: GRATITUDE-2014-Q3\n\nPlease expedite. This is for the science initiative donation I discussed with my advisor.\n\nJE",
    "sent016": "President [Name],\n\nThank you for your response. I'm prepared to significantly increase my support:\n\nNEW OFFER: $10,000,000 over 5 years\n\nENHANCED TERMS:\n- Naming rights: 'Epstein Center for Advanced Research'\n- Program oversight committee membership (my representative)\n- Quarterly private dinners with department heads\n- Access to student research projects (mentorship role)\n- Tax documentation structured as multi-year pledge\n\nI believe in hands-on philanthropy. My vision can help shape the next generation of scientific leaders.\n\nShall we schedule a meeting to finalize?\n\nJ. Epstein",
    "sent017": "Manager,\n\nUNDERGROUND FACILITY EXPANSION\n\nAPPROVED SPECIFICATIONS:\n- Additional 2,000 sq ft excavation\n- Soundproofing: Maximum rating (concert hall standard)\n- No exterior windows\n- Independent HVAC system\n- Secure access (biometric + code)\n- Private bathroom facilities\n- Emergency exit (hidden, forest side)\n\nBUDGET: $2,000,000\nTIMELINE: 6 months\n\nLABEL ALL PERMITS AS 'UTILITY STORAGE'\n\nNo subcontractors. Use only the trusted crew.\n\nJ. Epstein",
    "sent018": "JLB,\n\nNEXT SHIPMENT REQUIREMENTS:\n\nQUANTITY: 5 candidates\nORIGIN: Eastern Europe (Ukraine, Romania, Czech preferred)\nAGE: 18-20 (documentation must be perfect)\nTYPE: 'Runway ready' (you know my preferences)\n\nLOGISTICS:\n- Arrival: Miami (not NY - too hot there)\n- Documentation: Model visas, clean passports\n- Payment: $50K each + your fee via Swiss transfer\n- Duration: 2 weeks initial\n\nQuality over quantity. These ones need to be exceptional.\n\nJE",
    "sent019": "Virginia,\n\nTRAVEL DETAILS:\n\nFLIGHT: JFK → BKK (Thai Airways)\nDATE: March 15, 2001\nCLASS: Business\nHOTEL: Confirmed (reservation under agency name)\n\nEXPECTATIONS:\n- You're representing my interests\n- 'Massage therapy' certification documents provided\n- Discretion is absolute\n- Compensation: $10K for the trip\n\nThe people you'll meet are very important to my business. Make me proud.\n\nJE",
    // Crypto/Satoshi sent emails
    "sent020": "Melanie,\n\nMake sure the new wallets are ready. I don't want DOJ seeing flows to the Virgin Islands.\n\nJ",
    "sent021": "Ghislaine,\n\nThe Satoshi system is perfect for us. No more questions from JP Morgan about wire transfers.\n\nJ",
    "sent022": "Bill,\n\nThe technology behind Bitcoin will change how we manage foundations. You should look at the code.\n\nBest,\nJeffrey",
    // Drafts
    "draft001": "Dear Sir,\n\nRegarding your inquiry about investment opportunities...\n\n[BOZZA NON INVIATA]",
    "draft002": "Hi,\n\nI wanted to discuss the upcoming event planning...\n\n[BOZZA NON INVIATA]",
    "draft003": "To whom it may concern,\n\nThis is regarding the legal matter we discussed...\n\n[BOZZA NON INVIATA - IN COMPLETAMENTO]",
    "draft004": "Bill,\n\nGreetings and invitation to a charity event (never officially sent)...\n\n[BOZZA NON INVIATA]",
    "draft005": "Ehud,\n\nThank you for the hospitality. The connections you provided have been extremely useful...\n\n[BOZZA - DA COMPLETARE]",
    "draft006": "Sergei,\n\nBrief exchange about a proposed donation for a California research lab...\n\n[BOZZA IN LAVORAZIONE]",
    // Additional drafts
    "draft007": "Your Royal Highness,\n\nIt would be my great honor to host you at my private island. I understand you enjoy...\n\n[INCOMPLETO]\n\nThe girls I have there are exceptional. Young, eager to please, and very discreet. Many are aspiring models who are grateful for the opportunity to meet someone of your stature.\n\nI can arrange:\n- Private villa with ocean views\n- Personal chef\n- 'Entertainment' tailored to your preferences\n- Complete discretion (my security is military-grade)\n\n[NON INVIATA - BOZZA SALVATA]",
    "draft008": "To Whom It May Concern,\n\nRE: Audit Case #2017-EP-4421\n\nRegarding the $25M in charitable deductions claimed through Gratitude America Ltd., I wish to provide additional documentation...\n\n[INCOMPLETO - MANCANO ALLEGATI]\n\nThe donations were for legitimate scientific research including:\n- [DA COMPLETARE]\n- [DA COMPLETARE]\n\nI can provide letters from:\n- MIT [DA RICHIEDERE]\n- Harvard [DA RICHIEDERE]\n\n[BOZZA - NON INVIATA]",
    "draft009": "Special Agent [Name],\n\nI have received your request for an interview. While I am committed to cooperating with law enforcement, I must protect my interests.\n\n[RISCRIVENDO - VERSIONE PRECEDENTE TROPPO COMPROMETTENTE]\n\nMy attorneys have advised me that I have nothing to hide, but I must insist on the following conditions:\n\n1. Full immunity from prosecution\n2. No recording devices\n3. My attorney present at all times\n4. Written questions submitted in advance\n\n[DA RIVEDERE CON LEGALE PRIMA DI INVIARE]\n\n[BOZZA NON INVIATA]",
    "draft010": "Alan,\n\nURGENT - NEW DEVELOPMENT\n\nAnother one is talking to lawyers. Details:\n- Age at time: 16 (she says)\n- Location: Little St. James, 2003\n- Claims: [DETTAGLI TROPPO SENSIBILI DA SCRIVERE]\n\n[FERMO QUI - ASPETTO TUO CONSIGLIO]\n\nShe has photos. Not sure what they show yet.\n\nI need you to:\n1. Get ahead of this\n2. Find out who her lawyers are\n3. [DA DISCUTERE AL TELEFONO - NON SICURO EMAIL SIA SICURO]\n\nCall me on secure line.\n\n[BOZZA - NON INVIATA]",
    "draft011": "G,\n\n[NON DOVREI SCRIVERE QUESTO MA DEVO ESSERE PRUDENTE]\n\nIf something happens to me, everything you need is:\n\n- Safe in NY bedroom: [COMBINAZIONE NON SCRITTA - A MEMORIA]\n- Offshore account codes: [SOLO ORALE]\n- Contact list: [NASCOSTA ALTROVE]\n\nRemember:\n- Deny everything\n- [ALTRO DA AGGIUNGERE]\n- Trust no one\n\n[DEVO FINIRE QUESTO MA NON SO COME]\n\n[BOZZA NON INVIATA - FORSE MAI]",
    // Crypto/Satoshi drafts
    "draft012": "Hypothesis: S.N. might be a collective linked to Hal Finney? Ask [REDACTED] during dinner.\n\n[BOZZA - NOTA PERSONALE]",
    "draft013": "Note: Buy another 10,000 BTC through Zurich fund before price exceeds $100.\n\n[BOZZA - APPUNTO URGENTE]",
    // Trash
    "trash001": "SPAM: You won $10,000,000! Click here to claim your prize!\n\n[ELIMINATA]",
    "trash002": "Phishing: Your bank account has been suspended. Login immediately.\n\n[ELIMINATA - SOSPETTA]",
    "trash003": "Unsubscribe request from newsletter\n\n[ELIMINATA]",
    "trash004": "Duplicate: Flight confirmation (already saved)\n\n[ELIMINATA]",
    "trash005": "Note to self: Remember to move funds from Virgin Islands to new trust account by Friday.\n\n[ELIMINATA - NOTA PERSONALE]",
    "trash006": "MIT Secretary: Confirming receipt of anonymous funds for Media Lab. Thank you for the support.\n\n[ELIMINATA]",
    "trash007": "Thomas,\n\nDiscussion about potential real estate investments and commercial partnerships...\n\n[ELIMINATA]",
    "trash008": "Love, Melania - Friendly greeting message.\n\n[ELIMINATA]",
    "trash009": "A (Balmoral): Asking how LA is going and adding 'Did you find me any new questionable friendship?'\n\n[ELIMINATA]",
    "trash010": "Brad (Attorney): Discussion about legal options to arrest or expel a woman ('GG') from the USA.\n\n[ELIMINATA - LEGALE]",
    "trash011": "Steve: Request for information about a girl met ('pro or civil?').\n\n[ELIMINATA]",
    "trash012": "Al: Discussion about modifying Epstein's Wikipedia page to remove 'sex offender' term.\n\n[ELIMINATA - URGENTE]",
    // Research document emails (Epstein materials integration)
    "doc001": "UNITED STATES DISTRICT COURT\nSOUTHERN DISTRICT OF NEW YORK\n\nNOTICE OF INDICTMENT\n\nCase: 1:20-cr-00330-AJN\nDefendant: Ghislaine Maxwell\n\nThe sealed indictment has been unsealed and filed. Charges include:\n- Conspiracy to entice minors to travel for illegal sex acts\n- Conspiracy to transport minors with intent to engage in criminal sexual activity\n- Transportation of a minor with intent to engage in criminal sexual activity\n- Sex trafficking conspiracy\n- Sex trafficking of a minor\n\nArraignment scheduled. Secure legal representation immediately.\n\nClerk of Court",
    "doc002": "UNITED STATES DISTRICT COURT\nSOUTHERN DISTRICT OF NEW YORK\n\nNOTICE OF UNSEALED DOCUMENTS\n\nCase: 1:15-cv-07433 (Giuffre v. Maxwell)\n\nPer Court Order dated August 9, 2019, the following materials have been UNSEALED:\n\n- Deposition transcripts (4,553 pages)\n- Flight logs (pilot David Rogers)\n- Contact book (redacted)\n- Financial records\n- Correspondence between parties\n\nDocuments available via PACER or CourtListener.\n\nClerk's Office",
    "doc003": "FEDERAL BUREAU OF INVESTIGATION\nFreedom of Information Act Division\n\nFOIA RELEASE NOTIFICATION\n\nRequest ID: EPSTEIN-2025-001\nStatus: PARTIALLY RELEASED\n\nDocuments released via FBI Vault:\n- Investigation files (2005-2019)\n- Interview summaries (302 Forms)\n- Chief Michael Reiter statements\n- Victim interview transcripts (redacted)\n\nURL: https://vault.fbi.gov/jeffrey-epstein\n\nNote: Phase 2 release pending review.",
    "doc004": "U.S. DEPARTMENT OF JUSTICE\nOffice of the Inspector General\n\nREPORT: Investigation and Review of BOP Custody of Jeffrey Epstein\n\nReport Number: 23-089\nDate: June 27, 2023\nPages: 128\n\nKEY FINDINGS:\n- 'Negligence, misconduct, and outright job performance failures'\n- No evidence of foul play in death determination\n- Multiple procedural violations identified\n- Staffing deficiencies documented\n\nReport available: https://oig.justice.gov/sites/default/files/reports/23-089.pdf",
    "doc005": "UNITED STATES DISTRICT COURT\nSOUTHERN DISTRICT OF NEW YORK\n\nSENTENCING MEMORANDUM\n\nCase: 1:20-cr-00330-AJN\nDefendant: Ghislaine Maxwell\nDate: June 28, 2022\n\nSENTENCE IMPOSED:\n- 240 months (20 years) imprisonment\n- $750,000 fine\n- $100 special assessment\n- Restitution to be determined\n\nAppeal rights advised. Self-surrender date: TBD.\n\nHon. Alison J. Nathan\nUnited States District Judge",
    "doc006": "UNITED STATES COURT OF APPEALS\nFOR THE SECOND CIRCUIT\n\nAPPEAL DISPOSITION\n\nCase: 22-1781 (Maxwell v. United States)\nDate: September 17, 2024\n\nDECISION: AFFIRMED\n\nThe judgment of the district court is AFFIRMED.\n\nThe appellant's arguments regarding trial fairness, jury selection, and sentencing are without merit.\n\nPetition for rehearing denied.",
    "doc007": "U.S. VIRGIN ISLANDS\nBureau of Internal Revenue\n\nPROPERTY TAX ASSESSMENT NOTICE\n\nParcel: Little Saint James\nOwner: Epstein Estate / Southern Trust Company\nAssessment Year: 2024\n\nASSESSED VALUE: $47,500,000\nTAX DUE: $356,250\n\nSpecial Assessment:\n- Prior 'Scientific Research Sanctuary' exemption REVOKED\n- Property reclassified as residential/commercial\n- Back taxes assessed for 2018-2023\n\nPayment due within 30 days.",
    "doc008": "TO: Federal Aviation Administration\nFROM: J. Epstein (via counsel)\nRE: FOIA Request - Flight Records\n\nPursuant to 5 U.S.C. § 552, request production of:\n\n1. All flight plans filed for N908JE (2002-2019)\n2. Pilot certification records - David Rogers\n3. Aircraft registration amendments\n4. International flight clearances\n5. FAA enforcement actions (if any)\n\nNOTE: Counsel notes pending litigation. Documents subject to protective order.",
    "doc009": "[BOZZA EMAIL - NON INVIATA]\n\nTo: Julie K. Brown, Miami Herald\nFrom: J. Epstein\n\nMs. Brown,\n\nI understand you're working on a story about my past legal matters. I believe we may have mutual interests in keeping certain aspects private.\n\nMy foundation supports many journalism initiatives. Perhaps we could discuss how the Herald might benefit from expanded coverage of science and education.\n\nI would welcome the opportunity to provide context before publication.\n\n[BOZZA SALVATA MA MAI INVIATA - MAG 2018]",
    "doc010": "The Miami Herald\nPerversion of Justice Series\n\nDear Reader,\n\nOur investigative series has been published:\n\nPublished: November-December 2018\nReporter: Julie K. Brown\nImpact: 60+ victims identified\n\nAWARDS:\n- Pulitzer Prize Finalist (2019)\n- George Polk Award\n\nSeries exposes 2008 plea deal irregularities. Available at:\nhttps://www.miamiherald.com/news/state/florida/article238033834.html\n\nEditorial Board",
    "doc011": "[EMAIL ELIMINATA - RIPRISTINATA DA BACKUP]\n\nCONTACT BOOK UPDATE\n\nThe following entries have been flagged for removal/destruction:\n- VIP contacts (political)\n- Celebrities\n- Business associates\n- Flight passenger logs\n\nACTION REQUIRED:\n- Shred physical copies\n- Delete digital backups\n- Wipe phone contacts\n- Destroy SIM cards\n\nDO NOT retain copies. Attorney-client privilege may not apply.",
    "doc012": "[BOZZA RISPOSTA LEGALE - NON INVIATA]\n\nTO: Supreme Court of the United States\nFROM: Defense Counsel\n\nRE: Petition for Writ of Certiorari\nCase: Maxwell v. United States\n\nDraft arguments:\n1. Due process violations in jury selection\n2. Sentencing disparity vs. Epstein\n3. Media influence on trial fairness\n4. Improper admission of deceased declarant statements\n\n[INCOMPLET0 - ATTENDERE PARERE LEGALE]\n\nDate: September 2025",
    "doc013": "TO: Virginia Giuffre (via counsel)\nFROM: J. Epstein (Estate Representative)\n\nRE: Civil Settlement - Confidential\n\nPursuant to our negotiations, the Estate offers:\n\n1. Financial payment (undisclosed)\n2. Charitable donation to SOAR foundation\n3. Non-admission of liability\n4. Mutual non-disparagement\n5. Confidentiality provisions\n\nThis communication is pursuant to Federal Rule of Evidence 408.",
    "doc014": "[BOZZA RICHIESTA FOIA]\n\nTO: Palm Beach Police Department\nFROM: J. Epstein (counsel)\n\nRE: Public Records Request - 2005-2006 Investigation\n\nRequest production of:\n- Probable cause affidavit (May 2006)\n- Detective Joseph Recarey notes\n- Victim interview transcripts\n- Evidence photographs\n- Search warrant applications\n\nPer Florida Chapter 119.\n\n[BOZZA NON INVIATA - ATTESA PARERE LEGALE]",
    "doc015": "DEPARTMENT OF JUSTICE\nOffice of Public Affairs\n\nEPSTEIN FILES - PHASE 1 RELEASE\n\nDate: February 27, 2025\n\nThe following materials have been released:\n- Contact book (redacted)\n- Flight logs (pilot David Rogers)\n- Investigation documents\n- Correspondence files\n\nDownload: https://www.justice.gov/ag/media/1391321/dl\n\nWikimedia Commons: Category:Epstein_files_-_phase_1\n\nPhase 2 release pending review.\n\nAG Pamela Bondi"
  };
  return bodies[id] || preview;
}

// Helper to sort emails by date descending
function sortByDate(emails: Email[]): Email[] {
  return [...emails].sort((a, b) => parseDate(b.time).getTime() - parseDate(a.time).getTime());
}

// INBOX - Email RICEVUTE da J. Epstein (consolidated, no duplicates)
export const inboxEmails: Email[] = sortByDate([
  // Research document emails (new)
  {
    id: "doc015",
    from: "DOJ Office of Public Affairs",
    to: "J. Epstein",
    subject: "Epstein Files Phase 1 Release - February 2025",
    preview: "Phase 1 documents released: Contact book, flight logs, investigation files...",
    body: generateBody("doc015", "Phase 1 documents released: Contact book, flight logs, investigation files..."),
    time: "27 feb 2025",
    read: true,
    starred: true
  },
  {
    id: "doc006",
    from: "US Court of Appeals 2nd Circuit",
    to: "J. Epstein (Estate Representative)",
    subject: "Maxwell Appeal Decision - AFFIRMED",
    preview: "The judgment of the district court is AFFIRMED. Petition denied...",
    body: generateBody("doc006", "The judgment of the district court is AFFIRMED. Petition denied..."),
    time: "17 set 2024",
    read: true,
    starred: true
  },
  {
    id: "doc004",
    from: "DOJ Office of Inspector General",
    to: "J. Epstein (Estate Representative)",
    subject: "BOP Investigation Report - Epstein Custody Death",
    preview: "Report 23-089 released: Negligence, misconduct, job performance failures...",
    body: generateBody("doc004", "Report 23-089 released: Negligence, misconduct, job performance failures..."),
    time: "27 giu 2023",
    read: false,
    starred: true
  },
  {
    id: "doc005",
    from: "US District Court SDNY",
    to: "J. Epstein (Estate Representative)",
    subject: "Maxwell Sentencing - 20 Years Imposed",
    preview: "Sentence: 240 months imprisonment, $750,000 fine, restitution TBD...",
    body: generateBody("doc005", "Sentence: 240 months imprisonment, $750,000 fine, restitution TBD..."),
    time: "28 giu 2022",
    read: true,
    starred: true
  },
  {
    id: "doc007",
    from: "USVI Bureau of Internal Revenue",
    to: "Epstein Estate",
    subject: "Little St. James - Property Tax Assessment 2024",
    preview: "Assessed value: $47.5M. Prior 'Scientific Research' exemption REVOKED...",
    body: generateBody("doc007", "Assessed value: $47.5M. Prior 'Scientific Research' exemption REVOKED..."),
    time: "15 gen 2024",
    read: false,
    starred: false
  },
  {
    id: "doc002",
    from: "US District Court SDNY",
    to: "J. Epstein",
    subject: "Giuffre v. Maxwell - Unsealed Documents Available",
    preview: "4,553 pages unsealed per Court Order: Depositions, flight logs, contact book...",
    body: generateBody("doc002", "4,553 pages unsealed per Court Order: Depositions, flight logs, contact book..."),
    time: "08 gen 2024",
    read: false,
    starred: true
  },
  {
    id: "doc001",
    from: "US District Court SDNY",
    to: "J. Epstein (Deceased) - Estate Representative",
    subject: "Maxwell Indictment Unsealed - Case 1:20-cr-00330",
    preview: "Charges: Conspiracy, sex trafficking, transportation of minors. Arraignment scheduled...",
    body: generateBody("doc001", "Charges: Conspiracy, sex trafficking, transportation of minors. Arraignment scheduled..."),
    time: "02 lug 2020",
    read: true,
    starred: true
  },
  {
    id: "doc003",
    from: "FBI FOIA Division",
    to: "J. Epstein (Estate Representative)",
    subject: "FBI Vault Release - Investigation Files",
    preview: "Phase 1 FOIA release: 302 Forms, interview summaries, victim transcripts...",
    body: generateBody("doc003", "Phase 1 FOIA release: 302 Forms, interview summaries, victim transcripts..."),
    time: "15 ago 2019",
    read: true,
    starred: true
  },
  {
    id: "doc010",
    from: "Miami Herald Editorial",
    to: "J. Epstein",
    subject: "Perversion of Justice - Published Series",
    preview: "Investigative series exposes 2008 plea deal. 60+ victims identified...",
    body: generateBody("doc010", "Investigative series exposes 2008 plea deal. 60+ victims identified..."),
    time: "nov 2018",
    read: true,
    starred: true
  },
  // Original inbox emails continue...
  {
    id: "ep002",
    from: "Legal Team",
    to: "J. Epstein",
    subject: "Document Request - Case #12345",
    preview: "Please review attached filings. Court deadline is Friday...",
    body: generateBody("ep002", "Please review attached filings. Court deadline is Friday..."),
    time: "08 lug 2019",
    read: false,
    starred: false
  },
  {
    id: "ep029",
    from: "Virgin Islands Tax Authority",
    to: "J. Epstein",
    subject: "Tax Exemption Status - Little St. James",
    preview: "Your application for agricultural tax exemption has been approved...",
    body: generateBody("ep029", "Your application for agricultural tax exemption has been approved..."),
    time: "14 feb 2018",
    read: false,
    starred: true
  },
  {
    id: "ep033",
    from: "Brock Pierce",
    to: "J. Epstein",
    subject: "Crypto Island Proposal",
    preview: "Discussion about founding a 'Crypto Island' and using Bitcoin for offshore logistics...",
    body: generateBody("ep033", "Discussion about founding a 'Crypto Island' and using Bitcoin for offshore logistics..."),
    time: "giu 2017",
    read: true,
    starred: true
  },
  {
    id: "ep017",
    from: "Cayman National Bank",
    to: "J. Epstein",
    subject: "Account Activity Alert - Account ****9921",
    preview: "Large deposit detected: $12M from Gratitude America Ltd...",
    body: generateBody("ep017", "Large deposit detected: $12M from Gratitude America Ltd..."),
    time: "03 apr 2016",
    read: false,
    starred: true
  },
  {
    id: "ep026",
    from: "Swiss Banking Corp",
    to: "J. Epstein",
    subject: "Wire Transfer Confirmation - $5.2M",
    preview: "Transfer executed successfully. Beneficiary: Offshore Ventures Ltd...",
    body: generateBody("ep026", "Transfer executed successfully. Beneficiary: Offshore Ventures Ltd..."),
    time: "22 ott 2015",
    read: true,
    starred: false
  },
  {
    id: "ep035",
    from: "Adam Back (Blockstream)",
    to: "J. Epstein",
    subject: "Hashcash & Proof of Work",
    preview: "Technical email on Hashcash and Proof of Work scalability systems...",
    body: generateBody("ep035", "Technical email on Hashcash and Proof of Work scalability systems..."),
    time: "2015",
    read: true,
    starred: true
  },
  {
    id: "ep001",
    from: "G. Maxwell",
    to: "J. Epstein",
    subject: "Meeting Schedule - NY",
    preview: "Confirming our meeting next Tuesday. Please arrange transportation...",
    body: generateBody("ep001", "Confirming our meeting next Tuesday. Please arrange transportation..."),
    time: "14 giu 2015",
    read: false,
    starred: true
  },
  {
    id: "ep012",
    from: "Noam Chomsky",
    to: "J. Epstein",
    subject: "Manhattan Dinner - World Affairs",
    preview: "Confirming dinner to discuss world affairs and international politics...",
    body: generateBody("ep012", "Confirming dinner to discuss world affairs and international politics..."),
    time: "15 mar 2015",
    read: false,
    starred: false
  },
  {
    id: "ep034",
    from: "M. Zwicky (Attorney)",
    to: "J. Epstein",
    subject: "Bitcoin Taxation - Swiss Accounts",
    preview: "Legal note on taxation of Bitcoin capital gains deposited in Swiss accounts...",
    body: generateBody("ep034", "Legal note on taxation of Bitcoin capital gains deposited in Swiss accounts..."),
    time: "ott 2014",
    read: true,
    starred: false
  },
  {
    id: "ep014",
    from: "Woody Allen",
    to: "J. Epstein",
    subject: "Group Dinner RSVP - 71st Street",
    preview: "Positive RSVP for the group dinner at the 71st Street residence...",
    body: generateBody("ep014", "Positive RSVP for the group dinner at the 71st Street residence..."),
    time: "ott 2013",
    read: true,
    starred: false
  },
  {
    id: "ep019",
    from: "Island Maintenance Team",
    to: "J. Epstein",
    subject: "Temple Renovation Complete - Invoice Attached",
    preview: "The 'gymnasium' structure is complete. Soundproofing installed as requested...",
    body: generateBody("ep019", "The 'gymnasium' structure is complete. Soundproofing installed as requested..."),
    time: "22 set 2013",
    read: true,
    starred: false
  },
  {
    id: "ep009",
    from: "Leon Black",
    to: "J. Epstein",
    subject: "Trust Review - Apollo Savings",
    preview: "I need your guys to review the trust for Apollo. Can we save another 50M?...",
    body: generateBody("ep009", "I need your guys to review the trust for Apollo. Can we save another 50M?..."),
    time: "12 mag 2013",
    read: true,
    starred: true
  },
  {
    id: "ep030",
    from: "MIT Development Office",
    to: "J. Epstein",
    subject: "Research Grant Acknowledgment - $2M",
    preview: "Dear Mr. Epstein, Thank you for your generous contribution to our programming and robotics research...",
    body: generateBody("ep030", "Dear Mr. Epstein, Thank you for your generous contribution to our programming and robotics research..."),
    time: "23 ott 2012",
    read: true,
    starred: true
  },
  {
    id: "ep011",
    from: "Bill Gates",
    to: "J. Epstein",
    subject: "Lifestyle Observations",
    preview: "Your lifestyle is intriguing, although it wouldn't work for me...",
    body: generateBody("ep011", "Your lifestyle is intriguing, although it wouldn't work for me..."),
    time: "2011",
    read: true,
    starred: true
  },
  {
    id: "ep008",
    from: "Bank Officer",
    to: "J. Epstein",
    subject: "Account Statement - Offshore",
    preview: "Monthly statement attached. Balance as of 31st: $14.2M USD...",
    body: generateBody("ep008", "Monthly statement attached. Balance as of 31st: $14.2M USD..."),
    time: "05 mag 2010",
    read: true,
    starred: false
  },
  {
    id: "ep013",
    from: "G. Maxwell",
    to: "J. Epstein",
    subject: "Gulfstream Maintenance - Florida",
    preview: "Tell the pilot the Gulfstream needs servicing in Florida, not NY. Lower taxes...",
    body: generateBody("ep013", "Tell the pilot the Gulfstream needs servicing in Florida, not NY. Lower taxes..."),
    time: "02 feb 2009",
    read: true,
    starred: true
  },
  {
    id: "ep016",
    from: "Zorro Ranch Security",
    to: "J. Epstein",
    subject: "Weekly Security Report - NM Property",
    preview: "Perimeter secure. New camera system installed in guest house...",
    body: generateBody("ep016", "Perimeter secure. New camera system installed in guest house..."),
    time: "08 mag 2008",
    read: true,
    starred: false
  },
  {
    id: "ep005",
    from: "Property Manager",
    to: "J. Epstein",
    subject: "Island Maintenance Schedule",
    preview: "Renovations scheduled for next month. Please confirm dates work...",
    body: generateBody("ep005", "Renovations scheduled for next month. Please confirm dates work..."),
    time: "17 apr 2008",
    read: true,
    starred: false
  },
  {
    id: "ep018",
    from: "Alan Dershowitz",
    to: "J. Epstein",
    subject: "Re: Legal Strategy - Florida Matter",
    preview: "I've reviewed the case files. The NPA structure looks solid...",
    body: generateBody("ep018", "I've reviewed the case files. The NPA structure looks solid..."),
    time: "19 giu 2007",
    read: true,
    starred: true
  },
  {
    id: "ep025",
    from: "David Rogers",
    to: "J. Epstein",
    subject: "Flight Log - TEB to LSI (Little St. James)",
    preview: "Flight confirmed for tomorrow. Route: Teterboro to St. Thomas, then helicopter to island...",
    body: generateBody("ep025", "Flight confirmed for tomorrow. Route: Teterboro to St. Thomas, then helicopter to island..."),
    time: "03 ago 2006",
    read: false,
    starred: true
  },
  {
    id: "ep022",
    from: "Palm Beach Property Mgmt",
    to: "J. Epstein",
    subject: "Neighbor Complaint - Noise Ordinance",
    preview: "Received complaint about late night activity at El Brillo Way...",
    body: generateBody("ep022", "Received complaint about late night activity at El Brillo Way..."),
    time: "06 lug 2006",
    read: false,
    starred: true
  },
  {
    id: "ep010",
    from: "Larry Summers",
    to: "J. Epstein",
    subject: "Dinner & Genetics Research",
    preview: "Great dinner. Your contribution to genetics research is fundamental...",
    body: generateBody("ep010", "Great dinner. Your contribution to genetics research is fundamental..."),
    time: "14 giu 2006",
    read: true,
    starred: false
  },
  {
    id: "ep007",
    from: "Security Team",
    to: "J. Epstein",
    subject: "Access Codes - Zorro Ranch",
    preview: "New codes effective immediately. Previous codes expire at midnight...",
    body: generateBody("ep007", "New codes effective immediately. Previous codes expire at midnight..."),
    time: "12 gen 2006",
    read: true,
    starred: false
  },
  {
    id: "ep028",
    from: "Harvard Edge Fund",
    to: "J. Epstein",
    subject: "Donation Receipt - Program Support",
    preview: "Acknowledging receipt of $6.5M for the Edge program...",
    body: generateBody("ep028", "Acknowledging receipt of $6.5M for the Edge program..."),
    time: "18 nov 2005",
    read: true,
    starred: false
  },
  {
    id: "ep004",
    from: "Accountant",
    to: "J. Epstein",
    subject: "Wire Transfer Confirmation",
    preview: "Transfer completed as requested. Reference #987654321...",
    body: generateBody("ep004", "Transfer completed as requested. Reference #987654321..."),
    time: "03 nov 2005",
    read: true,
    starred: true
  },
  {
    id: "ep024",
    from: "Nadia Marcinkova",
    to: "J. Epstein",
    subject: "European Trip - Passport Issues Resolved",
    preview: "All travel documents ready. Czech embassy was very helpful...",
    body: generateBody("ep024", "All travel documents ready. Czech embassy was very helpful..."),
    time: "28 ago 2005",
    read: true,
    starred: false
  },
  {
    id: "ep021",
    from: "Sarah Kellen",
    to: "J. Epstein",
    subject: "Massage Therapist Schedule - This Week",
    preview: "Schedule confirmed: Mon-Fri appointments at NY mansion. 3 therapists on rotation...",
    body: generateBody("ep021", "Schedule confirmed: Mon-Fri appointments at NY mansion. 3 therapists on rotation..."),
    time: "14 apr 2005",
    read: true,
    starred: false
  },
  {
    id: "ep015",
    from: "Jean-Luc Brunel",
    to: "J. Epstein",
    subject: "Model Management - New Talent Portfolio",
    preview: "Attached are the portfolios for the new candidates. Ages 18-22...",
    body: generateBody("ep015", "Attached are the portfolios for the new candidates. Ages 18-22..."),
    time: "07 mag 2004",
    read: true,
    starred: true
  },
  {
    id: "ep006",
    from: "G. Maxwell",
    to: "J. Epstein",
    subject: "Re: Event Planning",
    preview: "Guest list confirmed. Security arrangements in place. See you Sunday...",
    body: generateBody("ep006", "Guest list confirmed. Security arrangements in place. See you Sunday..."),
    time: "02 set 2003",
    read: false,
    starred: true
  },
  {
    id: "ep023",
    from: "Doug Band",
    to: "J. Epstein",
    subject: "Clinton Foundation - Donor Meeting Setup",
    preview: "Can you host the donor reception at your NY mansion next month?...",
    body: generateBody("ep023", "Can you host the donor reception at your NY mansion next month?..."),
    time: "20 ago 2003",
    read: true,
    starred: true
  },
  {
    id: "ep003",
    from: "Pilot",
    to: "J. Epstein",
    subject: "Flight Log - TEB to PBI",
    preview: "Flight plan confirmed. Departure 10:00 AM. Passengers: 4 confirmed...",
    body: generateBody("ep003", "Flight plan confirmed. Departure 10:00 AM. Passengers: 4 confirmed..."),
    time: "21 mar 2002",
    read: true,
    starred: false
  },
  {
    id: "ep020",
    from: "Bill Clinton",
    to: "J. Epstein",
    subject: "Africa Trip - Itinerary Confirmation",
    preview: "Looking forward to the CGI Africa initiative trip. Please confirm the flight schedule...",
    body: generateBody("ep020", "Looking forward to the CGI Africa initiative trip. Please confirm the flight schedule..."),
    time: "28 feb 2002",
    read: true,
    starred: true
  },
  {
    id: "ep027",
    from: "Les Wexner",
    to: "J. Epstein",
    subject: "FW: Financial Management - Updated POA",
    preview: "Jeffrey, I've updated the power of attorney documents. Please review and return...",
    body: generateBody("ep027", "Jeffrey, I've updated the power of attorney documents. Please review and return..."),
    time: "15 mar 1991",
    read: true,
    starred: true
  }
]);

export const sentEmails: Email[] = sortByDate([
  // Research document emails (new)
  {
    id: "doc013",
    from: "J. Epstein (Estate Representative)",
    to: "Virginia Giuffre (via counsel)",
    subject: "RE: Civil Settlement Proposal - Confidential",
    preview: "Financial offer, charitable donation to SOAR, non-admission of liability...",
    body: generateBody("doc013", "Financial offer, charitable donation to SOAR, non-admission of liability..."),
    time: "15 feb 2022",
    read: true,
    starred: true
  },
  {
    id: "doc008",
    from: "J. Epstein (via counsel)",
    to: "Federal Aviation Administration",
    subject: "FOIA Request - Flight Records N908JE",
    preview: "Request: All flight plans 2002-2019, pilot certifications, international clearances...",
    body: generateBody("doc008", "Request: All flight plans 2002-2019, pilot certifications, international clearances..."),
    time: "20 mar 2020",
    read: true,
    starred: false
  },
  // Original sent emails continue...
  {
    id: "sent020",
    from: "J. Epstein",
    to: "Melanie Walker",
    subject: "New Wallets - DOJ Avoidance",
    preview: "Make sure the new wallets are ready. I don't want DOJ seeing flows to the Virgin Islands...",
    body: generateBody("sent020", "Make sure the new wallets are ready. I don't want DOJ seeing flows to the Virgin Islands..."),
    time: "11 set 2015",
    read: true,
    starred: false
  },
  {
    id: "sent001",
    from: "J. Epstein",
    to: "Staff",
    subject: "Re: Arrangements for next week",
    preview: "Please confirm the arrangements for next week. I need everything ready...",
    body: generateBody("sent001", "Please confirm the arrangements for next week. I need everything ready..."),
    time: "15 giu 2015",
    read: true,
    starred: false
  },
  {
    id: "sent015",
    from: "J. Epstein",
    to: "JP Morgan Private Bank",
    subject: "Wire Transfer Request - Urgent",
    preview: "Transfer $3.5M to Gratitude America Ltd. Account details attached...",
    body: generateBody("sent015", "Transfer $3.5M to Gratitude America Ltd. Account details attached..."),
    time: "15 ott 2014",
    read: true,
    starred: true
  },
  {
    id: "sent006",
    from: "J. Epstein",
    to: "Peter Thiel",
    subject: "Longevity Research Funding",
    preview: "Interested in your longevity research. Let's talk funding next week...",
    body: generateBody("sent006", "Interested in your longevity research. Let's talk funding next week..."),
    time: "12 lug 2014",
    read: true,
    starred: true
  },
  {
    id: "sent032",
    from: "J. Epstein",
    to: "Peter Thiel",
    subject: "Satoshi - The Trust Problem",
    preview: "Satoshi solved the trust problem. If it's not one person, it's a group I know...",
    body: generateBody("sent032", "Satoshi solved the trust problem. If it's not one person, it's a group I know..."),
    time: "09 mag 2014",
    read: true,
    starred: true
  },
  {
    id: "sent031",
    from: "J. Epstein",
    to: "Joi Ito (MIT)",
    subject: "Blockchain Research Funding",
    preview: "We need to fund blockchain research. It's the only way to move assets without KYC from banks...",
    body: generateBody("sent031", "We need to fund blockchain research. It's the only way to move assets without KYC from banks..."),
    time: "14 mar 2013",
    read: true,
    starred: true
  },
  {
    id: "sent022",
    from: "J. Epstein",
    to: "Bill Gates",
    subject: "Bitcoin Technology - Foundations",
    preview: "The technology behind Bitcoin will change how we manage foundations. You should look at the code...",
    body: generateBody("sent022", "The technology behind Bitcoin will change how we manage foundations. You should look at the code..."),
    time: "gen 2013",
    read: true,
    starred: true
  },
  {
    id: "sent021",
    from: "J. Epstein",
    to: "Ghislaine Maxwell",
    subject: "Satoshi System - No More Questions",
    preview: "The Satoshi system is perfect for us. No more questions from JP Morgan about wire transfers...",
    body: generateBody("sent021", "The Satoshi system is perfect for us. No more questions from JP Morgan about wire transfers..."),
    time: "04 dic 2012",
    read: true,
    starred: true
  },
  {
    id: "sent016",
    from: "J. Epstein",
    to: "MIT President",
    subject: "Re: Research Collaboration Proposal",
    preview: "I'm prepared to increase my commitment to $10M over 5 years...",
    body: generateBody("sent016", "I'm prepared to increase my commitment to $10M over 5 years..."),
    time: "04 apr 2012",
    read: true,
    starred: false
  },
  {
    id: "sent008",
    from: "J. Epstein",
    to: "Prince Andrew",
    subject: "Asia Trip Logistics",
    preview: "I saw the note. We can solve the logistics issue for the Asia trip without problems...",
    body: generateBody("sent008", "I saw the note. We can solve the logistics issue for the Asia trip without problems..."),
    time: "10 gen 2011",
    read: true,
    starred: true
  },
  {
    id: "sent009",
    from: "J. Epstein",
    to: "Jes Staley",
    subject: "JP Morgan Asia Strategy",
    preview: "We need to talk about JP Morgan's positioning in the Asian market. Come to the office?...",
    body: generateBody("sent009", "We need to talk about JP Morgan's positioning in the Asian market. Come to the office?..."),
    time: "22 nov 2010",
    read: true,
    starred: false
  },
  {
    id: "sent010",
    from: "J. Epstein",
    to: "Pilot (David Rogers)",
    subject: "Flight Request - Emergency Trip to Paris",
    preview: "Need the plane ready by 6 AM tomorrow. Route: TEB to LBG...",
    body: generateBody("sent010", "Need the plane ready by 6 AM tomorrow. Route: TEB to LBG..."),
    time: "12 set 2006",
    read: true,
    starred: true
  },
  {
    id: "sent013",
    from: "J. Epstein",
    to: "Criminal Defense Team",
    subject: "URGENT: Document Retention Policy",
    preview: "Implement immediate document destruction protocol. All flight logs, visitor records...",
    body: generateBody("sent013", "Implement immediate document destruction protocol. All flight logs, visitor records..."),
    time: "02 lug 2006",
    read: true,
    starred: true
  },
  {
    id: "sent005",
    from: "J. Epstein",
    to: "Security Team",
    subject: "URGENT: Update Access Codes",
    preview: "Update all access codes immediately. The current ones have been compromised...",
    body: generateBody("sent005", "Update all access codes immediately. The current ones have been compromised..."),
    time: "13 gen 2006",
    read: true,
    starred: false
  },
  {
    id: "sent012",
    from: "J. Epstein",
    to: "Harvard Development",
    subject: "Re: $6.5M Pledge - Payment Schedule",
    preview: "Payment will be wired in quarterly installments. First transfer next week...",
    body: generateBody("sent012", "Payment will be wired in quarterly installments. First transfer next week..."),
    time: "08 gen 2006",
    read: true,
    starred: false
  },
  {
    id: "sent004",
    from: "J. Epstein",
    to: "Accountant",
    subject: "Urgent: Wire Transfer Request",
    preview: "Please transfer $1.2M to the following account...",
    body: generateBody("sent004", "Please transfer $1.2M to the following account..."),
    time: "04 nov 2005",
    read: true,
    starred: true
  },
  {
    id: "sent014",
    from: "J. Epstein",
    to: "Sarah Kellen",
    subject: "Re: Staffing for Weekend Event",
    preview: "Confirmed. 3 massage therapists, 2 chefs, 4 security. All paid cash...",
    body: generateBody("sent014", "Confirmed. 3 massage therapists, 2 chefs, 4 security. All paid cash..."),
    time: "09 ago 2005",
    read: true,
    starred: false
  },
  {
    id: "sent011",
    from: "J. Epstein",
    to: "Ghislaine Maxwell",
    subject: "RE: Guest List for Weekend",
    preview: "The list looks good. Add the two models from Brazil. Make sure their paperwork is clean...",
    body: generateBody("sent011", "The list looks good. Add the two models from Brazil. Make sure their paperwork is clean..."),
    time: "03 giu 2004",
    read: true,
    starred: true
  },
  {
    id: "sent018",
    from: "J. Epstein",
    to: "Jean-Luc Brunel",
    subject: "Re: Model Recruiting - Next Shipment",
    preview: "Send 5 more next month. Eastern Europe preferred. Ages 18-20...",
    body: generateBody("sent018", "Send 5 more next month. Eastern Europe preferred. Ages 18-20..."),
    time: "22 nov 2003",
    read: true,
    starred: false
  },
  {
    id: "sent002",
    from: "J. Epstein",
    to: "Mr. Smith",
    subject: "Thank you for your donation",
    preview: "Thank you for your donation to the science initiative. Your contribution...",
    body: generateBody("sent002", "Thank you for your donation to the science initiative. Your contribution..."),
    time: "22 mar 2003",
    read: true,
    starred: true
  },
  {
    id: "sent007",
    from: "J. Epstein",
    to: "Marvin Minsky",
    subject: "AI Symposium - Island Event",
    preview: "Technical discussion on AI and scientific symposium to organize on the island...",
    body: generateBody("sent007", "Technical discussion on AI and scientific symposium to organize on the island..."),
    time: "ago 2002",
    read: true,
    starred: false
  },
  {
    id: "sent003",
    from: "J. Epstein",
    to: "Pilot",
    subject: "Friday Flight Preparation",
    preview: "Please prepare the aircraft for Friday departure. We have 6 passengers...",
    body: generateBody("sent003", "Please prepare the aircraft for Friday departure. We have 6 passengers..."),
    time: "19 mar 2002",
    read: true,
    starred: false
  },
  {
    id: "sent019",
    from: "J. Epstein",
    to: "Virginia Roberts",
    subject: "Travel Instructions - Thailand Trip",
    preview: "Your ticket to Bangkok is booked. You'll meet the team there...",
    body: generateBody("sent019", "Your ticket to Bangkok is booked. You'll meet the team there..."),
    time: "10 mar 2001",
    read: true,
    starred: true
  },
  {
    id: "sent017",
    from: "J. Epstein",
    to: "Property Manager (Zorro Ranch)",
    subject: "Underground Facility Specifications",
    preview: "Proceed with the 'guest quarters' expansion. Soundproofing is priority...",
    body: generateBody("sent017", "Proceed with the 'guest quarters' expansion. Soundproofing is priority..."),
    time: "17 mar 1998",
    read: true,
    starred: true
  }
]);

export const draftEmails: Email[] = sortByDate([
  // Research document emails (new)
  {
    id: "doc012",
    from: "Defense Counsel",
    to: "Supreme Court of the United States",
    subject: "Draft: Petition for Writ of Certiorari - Maxwell",
    preview: "Arguments: Due process, sentencing disparity, media influence... [BOZZA NON INVIATA]",
    body: generateBody("doc012", "Arguments: Due process, sentencing disparity, media influence... [BOZZA NON INVIATA]"),
    time: "10 ott 2025",
    read: true,
    starred: true
  },
  {
    id: "doc009",
    from: "J. Epstein",
    to: "Julie K. Brown, Miami Herald",
    subject: "Re: Your Investigation [BOZZA NON INVIATA]",
    preview: "Proposal for foundation support in exchange for context before publication... [BOZZA]",
    body: generateBody("doc009", "Proposal for foundation support in exchange for context before publication... [BOZZA]"),
    time: "15 mag 2018",
    read: true,
    starred: false
  },
  {
    id: "doc014",
    from: "J. Epstein (counsel)",
    to: "Palm Beach Police Department",
    subject: "Draft: FOIA Request - 2005-2006 Investigation Records",
    preview: "Request: Probable cause affidavit, detective notes, evidence photos... [BOZZA NON INVIATA]",
    body: generateBody("doc014", "Request: Probable cause affidavit, detective notes, evidence photos... [BOZZA NON INVIATA]"),
    time: "03 giu 2008",
    read: true,
    starred: false
  },
  // Original draft emails continue...
  {
    id: "draft010",
    from: "J. Epstein",
    to: "Alan Dershowitz",
    subject: "URGENT: New Allegations",
    preview: "There's a new victim coming forward. 16 years old at the time. Says she was on the island...",
    body: generateBody("draft010", "There's a new victim coming forward. 16 years old at the time. Says she was on the island..."),
    time: "11 lug 2019",
    read: true,
    starred: true
  },
  {
    id: "draft001",
    from: "J. Epstein",
    to: "",
    subject: "Re: Investment Opportunities",
    preview: "Regarding your inquiry about investment opportunities... [BOZZA]",
    body: generateBody("draft001", "Regarding your inquiry about investment opportunities... [BOZZA]"),
    time: "10 lug 2019",
    read: true,
    starred: false
  },
  {
    id: "draft003",
    from: "J. Epstein",
    to: "Legal Team",
    subject: "Re: Legal Matter Discussion",
    preview: "This is regarding the legal matter we discussed... [BOZZA IN COMPLETAMENTO]",
    body: generateBody("draft003", "This is regarding the legal matter we discussed... [BOZZA IN COMPLETAMENTO]"),
    time: "05 lug 2019",
    read: true,
    starred: true
  },
  {
    id: "draft011",
    from: "J. Epstein",
    to: "Ghislaine Maxwell",
    subject: "If Something Happens to Me...",
    preview: "G, if you're reading this, things have gone wrong. The documents are in the safe...",
    body: generateBody("draft011", "G, if you're reading this, things have gone wrong. The documents are in the safe..."),
    time: "01 lug 2019",
    read: true,
    starred: true
  },
  {
    id: "draft009",
    from: "J. Epstein",
    to: "FBI Field Office",
    subject: "Re: Interview Request",
    preview: "I am willing to cooperate with your investigation. However, I must insist on immunity...",
    body: generateBody("draft009", "I am willing to cooperate with your investigation. However, I must insist on immunity..."),
    time: "30 giu 2019",
    read: true,
    starred: true
  },
  {
    id: "draft008",
    from: "J. Epstein",
    to: "IRS Appeals Office",
    subject: "Re: Tax Audit - Charitable Deductions",
    preview: "Regarding the questioned deductions for 'Gratitude America Ltd.' I have additional documentation...",
    body: generateBody("draft008", "Regarding the questioned deductions for 'Gratitude America Ltd.' I have additional documentation..."),
    time: "23 mag 2017",
    read: true,
    starred: true
  },
  {
    id: "draft005",
    from: "J. Epstein",
    to: "Ehud Barak",
    subject: "Hospitality Thanks",
    preview: "Thank you for the hospitality. The connections you provided have been extremely useful...",
    body: generateBody("draft005", "Thank you for the hospitality. The connections you provided have been extremely useful..."),
    time: "05 mag 2014",
    read: true,
    starred: false
  },
  {
    id: "draft013",
    from: "J. Epstein",
    to: "",
    subject: "URGENT: Buy 10,000 BTC",
    preview: "Note: Buy another 10,000 BTC through Zurich fund before price exceeds $100...",
    body: generateBody("draft013", "Note: Buy another 10,000 BTC through Zurich fund before price exceeds $100..."),
    time: "mar 2013",
    read: true,
    starred: true
  },
  {
    id: "draft012",
    from: "J. Epstein",
    to: "",
    subject: "Hypothesis: Satoshi Identity",
    preview: "Hypothesis: S.N. might be a collective linked to Hal Finney? Ask [REDACTED] during dinner...",
    body: generateBody("draft012", "Hypothesis: S.N. might be a collective linked to Hal Finney? Ask [REDACTED] during dinner..."),
    time: "22 nov 2011",
    read: true,
    starred: false
  },
  {
    id: "draft006",
    from: "J. Epstein",
    to: "Sergei Brin",
    subject: "California Lab Donation",
    preview: "Brief exchange about a proposed donation for a California research lab... [BOZZA IN LAVORAZIONE]",
    body: generateBody("draft006", "Brief exchange about a proposed donation for a California research lab... [BOZZA IN LAVORAZIONE]"),
    time: "giu 2007",
    read: true,
    starred: true
  },
  {
    id: "draft002",
    from: "J. Epstein",
    to: "G. Maxwell",
    subject: "Event Planning Discussion",
    preview: "I wanted to discuss the upcoming event planning... [BOZZA NON INVIATA]",
    body: generateBody("draft002", "I wanted to discuss the upcoming event planning... [BOZZA NON INVIATA]"),
    time: "01 set 2003",
    read: true,
    starred: false
  },
  {
    id: "draft004",
    from: "J. Epstein",
    to: "Bill Clinton",
    subject: "Charity Event Invitation",
    preview: "Greetings and invitation to a charity event (never officially sent)... [BOZZA NON INVIATA]",
    body: generateBody("draft004", "Greetings and invitation to a charity event (never officially sent)... [BOZZA NON INVIATA]"),
    time: "gen 2003",
    read: true,
    starred: false
  },
  {
    id: "draft007",
    from: "J. Epstein",
    to: "Prince Andrew",
    subject: "Re: Invitation to Private Island",
    preview: "It would be an honor to host you at Little St. James. I can arrange special entertainment...",
    body: generateBody("draft007", "It would be an honor to host you at Little St. James. I can arrange special entertainment..."),
    time: "14 feb 2001",
    read: true,
    starred: false
  }
]);

export const trashEmails: Email[] = sortByDate([
  // Research document emails (new)
  {
    id: "doc011",
    from: "Document Control",
    to: "Internal",
    subject: "URGENT: Contact Book Destruction Protocol",
    preview: "Destroy all VIP contacts, flight logs, phone records. Shred, delete, wipe... [ELIMINATA]",
    body: generateBody("doc011", "Destroy all VIP contacts, flight logs, phone records. Shred, delete, wipe... [ELIMINATA]"),
    time: "08 lug 2019",
    read: true,
    starred: true
  },
  // Original trash emails continue...
  {
    id: "trash001",
    from: "spam@lottery.com",
    to: "J. Epstein",
    subject: "Congratulations! You won $10,000,000!",
    preview: "You won $10,000,000! Click here to claim your prize! [ELIMINATA]",
    body: generateBody("trash001", "You won $10,000,000! Click here to claim your prize! [ELIMINATA]"),
    time: "12 lug 2019",
    read: true,
    starred: false
  },
  {
    id: "trash002",
    from: "security@fake-bank.com",
    to: "J. Epstein",
    subject: "URGENT: Account Suspended",
    preview: "Your bank account has been suspended. Login immediately. [SOSPETTA]",
    body: generateBody("trash002", "Your bank account has been suspended. Login immediately. [SOSPETTA]"),
    time: "11 lug 2019",
    read: true,
    starred: false
  },
  {
    id: "trash005",
    from: "J. Epstein",
    to: "",
    subject: "NOTE: Fund Transfer - Virgin Islands",
    preview: "Remember to move funds from Virgin Islands to new trust account by Friday...",
    body: generateBody("trash005", "Remember to move funds from Virgin Islands to new trust account by Friday..."),
    time: "18 set 2017",
    read: true,
    starred: false
  },
  {
    id: "trash010",
    from: "Brad Karp (Attorney)",
    to: "J. Epstein",
    subject: "Legal Options - 'GG' Expulsion",
    preview: "Discussion about legal options to arrest or expel a woman ('GG') from the USA...",
    body: generateBody("trash010", "Discussion about legal options to arrest or expel a woman ('GG') from the USA..."),
    time: "agosto 2015",
    read: true,
    starred: false
  },
  {
    id: "trash007",
    from: "Thomas Pritzker",
    to: "J. Epstein",
    subject: "Real Estate Investments",
    preview: "Discussion about potential real estate investments and commercial partnerships...",
    body: generateBody("trash007", "Discussion about potential real estate investments and commercial partnerships..."),
    time: "feb 2014",
    read: true,
    starred: false
  },
  {
    id: "trash011",
    from: "Steve Tisch",
    to: "J. Epstein",
    subject: "Information Request",
    preview: "Request for information about a girl met ('pro or civil?')...",
    body: generateBody("trash011", "Request for information about a girl met ('pro or civil?')..."),
    time: "aprile 2013",
    read: true,
    starred: false
  },
  {
    id: "trash006",
    from: "MIT Secretary",
    to: "J. Epstein",
    subject: "Media Lab Anonymous Funds",
    preview: "Confirming receipt of anonymous funds for Media Lab. Thank you for the support...",
    body: generateBody("trash006", "Confirming receipt of anonymous funds for Media Lab. Thank you for the support..."),
    time: "2012",
    read: true,
    starred: false
  },
  {
    id: "trash012",
    from: "Al Seckel",
    to: "J. Epstein",
    subject: "Wikipedia Edit Request",
    preview: "Discussion about modifying Epstein's Wikipedia page to remove 'sex offender' term...",
    body: generateBody("trash012", "Discussion about modifying Epstein's Wikipedia page to remove 'sex offender' term..."),
    time: "fine 2010",
    read: true,
    starred: true
  },
  {
    id: "trash003",
    from: "newsletter@updates.com",
    to: "J. Epstein",
    subject: "Unsubscribe Confirmation",
    preview: "Unsubscribe request from newsletter [ELIMINATA]",
    body: generateBody("trash003", "Unsubscribe request from newsletter [ELIMINATA]"),
    time: "08 nov 2005",
    read: true,
    starred: false
  },
  {
    id: "trash008",
    from: "Melania Trump",
    to: "G. Maxwell",
    subject: "Friendly Greeting",
    preview: "Love, Melania - Friendly greeting message...",
    body: generateBody("trash008", "Love, Melania - Friendly greeting message..."),
    time: "ottobre 2002",
    read: true,
    starred: false
  },
  {
    id: "trash004",
    from: "Pilot",
    to: "J. Epstein",
    subject: "Flight confirmation (Duplicate)",
    preview: "Duplicate: Flight confirmation - already saved [ELIMINATA]",
    body: generateBody("trash004", "Duplicate: Flight confirmation - already saved [ELIMINATA]"),
    time: "20 mar 2002",
    read: true,
    starred: false
  },
  {
    id: "trash009",
    from: "'A' (Balmoral)",
    to: "G. Maxwell",
    subject: "Questionable Friendship Request",
    preview: "Asking how LA is going and adding 'Did you find me any new questionable friendship?'...",
    body: generateBody("trash009", "Asking how LA is going and adding 'Did you find me any new questionable friendship?'..."),
    time: "agosto 2001",
    read: true,
    starred: true
  }
]);

// Keep backward compatibility
export const epsteinMockEmails = inboxEmails;

// Combined folders (for backward compatibility)
export const allInboxEmails = inboxEmails;
export const allSentEmails = sentEmails;
export const allDraftEmails = draftEmails;

// Export all folders
export const allEmailFolders = {
  inbox: inboxEmails,
  sent: sentEmails,
  drafts: draftEmails,
  trash: trashEmails
};
