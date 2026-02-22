// Additional Epstein emails data - 30+ new emails to expand the inbox
// Standalone file - no circular imports

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

// INBOX - 15 new emails received by J. Epstein
export const additionalInboxEmails: Email[] = [
  {
    id: "ep009",
    from: "MIT Development Office",
    to: "J. Epstein",
    subject: "Research Grant Acknowledgment - $2M",
    preview: "Dear Mr. Epstein, Thank you for your generous contribution to our " +
             "programming and robotics research. The Media Lab team is excited...",
    body: "Dear Mr. Epstein,\n\n" +
          "Thank you for your generous contribution of $2,000,000 to MIT's Media Lab. " +
          "Your support for our 'Advanced Networking & Youth Engagement' initiative " +
          "has been duly noted.\n\n" +
          "We have arranged the private dinner with department heads as requested. " +
          "The faculty is eager to discuss future collaborative opportunities.\n\n" +
          "Please find the tax documentation attached.\n\n" +
          "Warm regards,\n" +
          "Development Office\n" +
          "MIT Media Lab",
    time: "23 ott 2012",
    read: true,
    starred: true
  },
  {
    id: "ep010",
    from: "David Rogers",
    to: "J. Epstein",
    subject: "Flight Log - TEB to LSI (Little St. James)",
    preview: "Flight confirmed for tomorrow. Route: Teterboro to St. Thomas, then " +
             "helicopter to island. 6 passengers, N908JE fueled and ready...",
    body: "Jeffrey,\n\n" +
          "Flight plan confirmed:\n" +
          "- Departure: TEB 08:30 AM\n" +
          "- Destination: STT (St. Thomas) → helicopter to LSI\n" +
          "- Passengers: 6 confirmed\n" +
          "- Aircraft: N908JE (Lolita Express)\n" +
          "- Return: TBD per your instructions\n\n" +
          "Fuel, catering, and ground transport arranged. Weather clear.\n\n" +
          "- David",
    time: "03 ago 2006",
    read: false,
    starred: true
  },
  {
    id: "ep011",
    from: "Swiss Banking Corp",
    to: "J. Epstein",
    subject: "Wire Transfer Confirmation - $5.2M",
    preview: "Transfer executed successfully. Beneficiary: Offshore Ventures Ltd. " +
             "Reference: SCIENCE-DONATION-Q2...",
    body: "Dear Client,\n\n" +
          "We confirm the following transaction:\n\n" +
          "- Amount: $5,200,000.00 USD\n" +
          "- Beneficiary: Offshore Ventures Ltd.\n" +
          "- Account: ****8842\n" +
          "- Reference: SCIENCE-DONATION-Q2-2015\n" +
          "- Purpose: 'Research Funding'\n\n" +
          "Transaction completed: 22-OCT-2015\n\n" +
          "No further action required.\n\n" +
          "Sincerely,\n" +
          "Private Banking Division",
    time: "22 ott 2015",
    read: true,
    starred: false
  },
  {
    id: "ep012",
    from: "Les Wexner",
    to: "J. Epstein",
    subject: "FW: Financial Management - Updated POA",
    preview: "Jeffrey, I've updated the power of attorney documents. Please review " +
             "and return at your earliest convenience. The revised scope...",
    body: "Jeffrey,\n\n" +
          "I've updated the power of attorney documents per our discussion. " +
          "The revised scope of financial authority has been expanded as requested.\n\n" +
          "Please review the attached documents and return signed copies. " +
          "My attorneys have cleared everything.\n\n" +
          "Let me know if you need anything else.\n\n" +
          "Best,\n" +
          "Les",
    time: "15 mar 1991",
    read: true,
    starred: true
  },
  {
    id: "ep013",
    from: "Harvard Edge Fund",
    to: "J. Epstein",
    subject: "Donation Receipt - Program Support",
    preview: "Acknowledging receipt of $6.5M for the Edge program. Your continued " +
             "support of our research initiatives is deeply appreciated...",
    body: "Dear Jeffrey,\n\n" +
          "Harvard gratefully acknowledges your generous gift of $6,500,000 " +
          "to support the Edge research program.\n\n" +
          "Your vision for advancing science and education continues to inspire " +
          "our community. The restricted fund has been established per your " +
          "specific requirements regarding program access and participant selection.\n\n" +
          "We look forward to hosting you at the next private symposium.\n\n" +
          "With appreciation,\n" +
          "Harvard Development Office",
    time: "18 nov 2005",
    read: true,
    starred: false
  },
  {
    id: "ep014",
    from: "Virgin Islands Tax Authority",
    to: "J. Epstein",
    subject: "Tax Exemption Status - Little St. James",
    preview: "Your application for agricultural tax exemption has been approved. " +
             "Property now classified as 'private research sanctuary'...",
    body: "Mr. Epstein,\n\n" +
          "RE: Tax Exemption Application #VI-2018-0942\n\n" +
          "Your application has been APPROVED. Little St. James is now classified " +
          "as a 'Private Scientific Research Sanctuary' with full agricultural and " +
          "educational tax exemptions.\n\n" +
          "Effective date: January 1, 2018\n" +
          "Annual savings: Approximately $2.8M in property taxes\n\n" +
          "Requirements:\n" +
          "- Maintain minimum 10 'research participants' annually\n" +
          "- File annual 'scientific progress reports'\n" +
          "- Allow one government inspection per year (48hr notice)\n\n" +
          "Congratulations on your commitment to science.\n\n" +
          "VI Tax Authority",
    time: "14 feb 2018",
    read: false,
    starred: true
  },
  {
    id: "ep015",
    from: "Jean-Luc Brunel",
    to: "J. Epstein",
    subject: "Model Management - New Talent Portfolio",
    preview: "Attached are the portfolios for the new candidates. Ages 18-22, " +
             "all documentation in order. Available for immediate placement...",
    body: "Jeffrey,\n\n" +
          "New talent portfolios attached:\n" +
          "- 12 candidates, ages 18-22\n" +
          "- International passports verified\n" +
          "- All signed model release forms\n" +
          "- Available for 'modeling workshops' starting next week\n\n" +
          "These girls are very eager to learn and have been briefed on the " +
          "opportunities you're offering. Some are quite talented.\n\n" +
          "Let me know which ones interest you for the next 'casting session'.\n\n" +
          "JLB",
    time: "07 mag 2004",
    read: true,
    starred: true
  },
  {
    id: "ep016",
    from: "Zorro Ranch Security",
    to: "J. Epstein",
    subject: "Weekly Security Report - NM Property",
    preview: "Perimeter secure. New camera system installed in guest house. " +
             "Underground facility access logs attached. No unauthorized entries...",
    body: "Mr. Epstein,\n\n" +
          "WEEKLY SECURITY REPORT - Zorro Ranch\n" +
          "Period: May 1-7, 2008\n\n" +
          "INCIDENTS: None\n" +
          "PERIMETER: Secure\n" +
          "CAMERAS: New installation completed in guest quarters\n" +
          "UNDERGROUND FACILITY: Access logs attached (12 authorized entries)\n\n" +
          "SPECIAL NOTES:\n" +
          "- New facial recognition system active\n" +
          "- Secure tunnel maintenance completed\n" +
          "- Staff background checks updated\n\n" +
          "All clear.\n\n" +
          "Chief Security Officer",
    time: "08 mag 2008",
    read: true,
    starred: false
  },
  {
    id: "ep017",
    from: "Cayman National Bank",
    to: "J. Epstein",
    subject: "Account Activity Alert - Account ****9921",
    preview: "Large deposit detected: $12M from Gratitude America Ltd. Please " +
             "confirm expected transaction to avoid compliance review...",
    body: "Dear Valued Client,\n\n" +
          "ACCOUNT ACTIVITY ALERT\n" +
          "Account: ****9921 (Gratitude America Ltd.)\n\n" +
          "Transaction detected:\n" +
          "- Date: April 3, 2016\n" +
          "- Amount: +$12,000,000.00 USD\n" +
          "- Originator: Vessel Holdings LLC\n" +
          "- Reference: ISLAND-MAINTENANCE-FUND\n\n" +
          "This triggers our large transaction protocol. Please confirm this " +
          "is expected to avoid unnecessary compliance review.\n\n" +
          "Reply CONFIRM to authorize.\n\n" +
          "Cayman National Bank",
    time: "03 apr 2016",
    read: false,
    starred: true
  },
  {
    id: "ep018",
    from: "Alan Dershowitz",
    to: "J. Epstein",
    subject: "Re: Legal Strategy - Florida Matter",
    preview: "I've reviewed the case files. The NPA structure looks solid. " +
             "Acosta seems receptive. We'll need to emphasize the 'science' angle...",
    body: "Jeffrey,\n\n" +
          "I've gone through everything. Here's the strategy:\n\n" +
          "1. Non-Prosecution Agreement is our target - no federal charges\n" +
          "2. Emphasize your philanthropic work (MIT, Harvard donations)\n" +
          "3. Acosta's office seems open to negotiation\n" +
          "4. State charges only - minimal jail time, work release program\n\n" +
          "The 'science research' narrative is perfect. No one wants to be the " +
          "person who stopped scientific progress.\n\n" +
          "My fee: $1M + expenses. Worth every penny.\n\n" +
          "AD",
    time: "19 giu 2007",
    read: true,
    starred: true
  },
  {
    id: "ep019",
    from: "Island Maintenance Team",
    to: "J. Epstein",
    subject: "Temple Renovation Complete - Invoice Attached",
    preview: "The 'gymnasium' structure is complete. Soundproofing installed " +
             "as requested. Total cost: $850K. All local permits secured...",
    body: "Mr. Epstein,\n\n" +
          "PROJECT COMPLETION REPORT\n" +
          "Little St. James - 'Gymnasium' Structure\n\n" +
          "COMPLETED:\n" +
          "- Main structure: Blue and white striped temple (as requested)\n" +
          "- Interior: Soundproofed meditation/prayer rooms (3)\n" +
          "- Lower level: Secure storage as specified\n" +
          "- Special fixtures: Custom locks and access controls\n\n" +
          "INVOICE: $847,500 USD\n" +
          "- All local permits approved\n" +
          "- Zoning variances obtained\n" +
          "- Labeled as 'gym equipment storage' on official docs\n\n" +
          "Ready for use.\n\n" +
          "Construction Manager",
    time: "22 set 2013",
    read: true,
    starred: false
  },
  {
    id: "ep020",
    from: "Bill Clinton",
    to: "J. Epstein",
    subject: "Africa Trip - Itinerary Confirmation",
    preview: "Looking forward to the CGI Africa initiative trip. Please confirm " +
             "the flight schedule. Chelsea sends her best...",
    body: "Jeffrey,\n\n" +
          "Great speaking with you. The Clinton Global Initiative Africa trip " +
          "is shaping up nicely.\n\n" +
          "Please confirm:\n" +
          "- Departure: March 15 from Teterboro\n" +
          "- Stops: Morocco, Ghana, Nigeria, Rwanda\n" +
          "- Return: March 22\n\n" +
          "Chelsea is excited about the 'philanthropy education' opportunities " +
          "you mentioned. I told her about your great work with young people.\n\n" +
          "Appreciate your support of CGI. You're making a real difference.\n\n" +
          "Bill",
    time: "28 feb 2002",
    read: true,
    starred: true
  },
  {
    id: "ep021",
    from: "Sarah Kellen",
    to: "J. Epstein",
    subject: "Massage Therapist Schedule - This Week",
    preview: "Schedule confirmed: Mon-Fri appointments at NY mansion. 3 therapists " +
             "on rotation. All have signed NDAs and received cash payments...",
    body: "Jeffrey,\n\n" +
          "This week's schedule:\n\n" +
          "MONDAY:\n" +
          "- 2:00 PM - Therapist A (massage certification verified)\n" +
          "- 4:00 PM - Therapist B\n\n" +
          "TUESDAY-FRIDAY:\n" +
          "- Rotating schedule as requested\n" +
          "- All therapists: NDAs signed, cash payments prepared\n" +
          "- Mobile phones collected upon entry\n\n" +
          "SPECIAL REQUESTS:\n" +
          "- New organic oils delivered\n" +
          "- Room temperature set to 72°F\n" +
          "- Security standing by\n\n" +
          "All set.\n\n" +
          "SK",
    time: "14 apr 2005",
    read: true,
    starred: false
  },
  {
    id: "ep022",
    from: "Palm Beach Property Mgmt",
    to: "J. Epstein",
    subject: "Neighbor Complaint - Noise Ordinance",
    preview: "Received complaint about late night activity at El Brillo Way. " +
             "Suggest we address this before it escalates to city council...",
    body: "Mr. Epstein,\n\n" +
          "ISSUE: Noise Complaint - 358 El Brillo Way\n\n" +
          "The neighbors (Baker residence) have filed a complaint regarding:\n" +
          "- Late night visitors (after 11 PM)\n" +
          "- Vehicle traffic at odd hours\n" +
          "- 'Unusual activity' noted\n\n" +
          "RECOMMENDATION:\n" +
          "- Schedule high-activity nights for weekends only\n" +
          "- Use garage entrance exclusively after 10 PM\n" +
          "- Consider 'donation' to neighborhood association ($25K should suffice)\n\n" +
          "Better to handle this quietly before it reaches the city.\n\n" +
          "Property Manager",
    time: "06 lug 2006",
    read: false,
    starred: true
  },
  {
    id: "ep023",
    from: "Doug Band",
    to: "J. Epstein",
    subject: "Clinton Foundation - Donor Meeting Setup",
    preview: "Can you host the donor reception at your NY mansion next month? " +
             "VIP list includes several billionaires. Secret Service will coordinate...",
    body: "Jeffrey,\n\n" +
          "Quick ask: Can we use your NY place for a CF donor reception?\n\n" +
          "DATE: September 12\n" +
          "GUESTS: 25-30 major donors ($1M+ level)\n" +
          "FORMAT: Cocktail reception + 'intimate discussion'\n\n" +
          "The President would attend (good optics for you too). Secret Service " +
          "will do their sweep but they're familiar with your place by now.\n\n" +
          "Your support has been invaluable. This would really help close Q3 strong.\n\n" +
          "Let me know.\n\n" +
          "Doug",
    time: "20 ago 2003",
    read: true,
    starred: true
  },
  {
    id: "ep024",
    from: "Nadia Marcinkova",
    to: "J. Epstein",
    subject: "European Trip - Passport Issues Resolved",
    preview: "All travel documents ready. Czech embassy was very helpful. " +
             "Flight to Paris confirmed for next week. The girls are excited...",
    body: "Jeffrey,\n\n" +
          "PASSPORT STATUS: All resolved\n\n" +
          "The Czech embassy expedited everything. I have:\n" +
          "- My updated passport (age corrected as discussed)\n" +
          "- Travel visas for France, UK, and Monaco\n" +
          "- Documentation for 'assistant' role\n\n" +
          "FLIGHT CONFIRMED:\n" +
          "- JFK to CDG, September 3\n" +
          "- First class as always\n\n" +
          "Looking forward to the Paris apartment and meeting your friends there. " +
          "I remember Monsieur Brunel mentioned some new talent for us to evaluate.\n\n" +
          "See you soon,\n" +
          "Nadia",
    time: "28 ago 2005",
    read: true,
    starred: false
  }
];

// SENT - 10 new emails sent by J. Epstein
export const additionalSentEmails: Email[] = [
  {
    id: "sent006",
    from: "J. Epstein",
    to: "Pilot (David Rogers)",
    subject: "Flight Request - Emergency Trip to Paris",
    preview: "Need the plane ready by 6 AM tomorrow. Route: TEB to LBG. " +
             "4 passengers. Discretion essential. File as 'business travel'...",
    body: "David,\n\n" +
          "URGENT FLIGHT REQUEST\n\n" +
          "DEPARTURE: Tomorrow, 06:00 AM\n" +
          "ROUTE: TEB → LBG (Paris Le Bourget)\n" +
          "PASSENGERS: 4 (names in sealed envelope)\n" +
          "RETURN: Open\n\n" +
          "LOGISTICS:\n" +
          "- File flight plan as 'business research trip'\n" +
          "- No passenger manifest until airborne\n" +
          "- Contact me on secure line only\n\n" +
          "This is priority. Do not discuss with anyone.\n\n" +
          "JE",
    time: "12 set 2006",
    read: true,
    starred: true
  },
  {
    id: "sent007",
    from: "J. Epstein",
    to: "Ghislaine Maxwell",
    subject: "RE: Guest List for Weekend",
    preview: "The list looks good. Add the two models from Brazil. Make sure " +
             "their paperwork is clean. I want the new girl from Prague there too...",
    body: "G,\n\n" +
          "Guest list approved with additions:\n\n" +
          "ADD:\n" +
          "- The Brazilian twins (confirm passport ages)\n" +
          "- New girl from Prague (the one Brunel mentioned)\n" +
          "- VIP guest from tech industry (confirming Monday)\n\n" +
          "ARRANGEMENTS:\n" +
          "- Standard NDAs for all new faces\n" +
          "- Phones collected at dock\n" +
          "- Boat pickup: 10 AM Saturday\n" +
          "- Security detail: Full perimeter\n\n" +
          "The VIP needs to feel special. You know what I mean.\n\n" +
          "J",
    time: "03 giu 2004",
    read: true,
    starred: true
  },
  {
    id: "sent008",
    from: "J. Epstein",
    to: "Harvard Development",
    subject: "Re: $6.5M Pledge - Payment Schedule",
    preview: "Payment will be wired in quarterly installments. First transfer " +
             "next week. Please ensure my access to the 'special programs' is confirmed...",
    body: "Dear Development Office,\n\n" +
          "Confirming the $6.5M pledge structure:\n\n" +
          "PAYMENT SCHEDULE:\n" +
          "- Q1 2006: $1.625M (next week)\n" +
          "- Q2 2006: $1.625M\n" +
          "- Q3 2006: $1.625M\n" +
          "- Q4 2006: $1.625M\n\n" +
          "CONDITIONS:\n" +
          "- Access to Edge program events (confirmed)\n" +
          "- Private office space in building (confirmed)\n" +
          "- Participation in student mentorship (discuss separately)\n" +
          "- Tax documentation to my accountant\n\n" +
          "Looking forward to our continued partnership.\n\n" +
          "J. Epstein",
    time: "08 gen 2006",
    read: true,
    starred: false
  },
  {
    id: "sent009",
    from: "J. Epstein",
    to: "Criminal Defense Team",
    subject: "URGENT: Document Retention Policy",
    preview: "Implement immediate document destruction protocol. All flight logs, " +
             "visitor records, and financial transfers from 2002-2005. Use shredder...",
    body: "Team,\n\n" +
          "IMMEDIATE ACTION REQUIRED\n\n" +
          "DOCUMENT DESTRUCTION PROTOCOL:\n" +
          "- ALL flight logs 2002-2005\n" +
          "- Visitor sign-in sheets (all properties)\n" +
          "- Massage appointment records\n" +
          "- Email backups from old servers\n" +
          "- Financial transfers coded 'personal'\n\n" +
          "METHOD:\n" +
          "- Physical: Industrial shredder then incinerate\n" +
          "- Digital: Secure wipe with 7-pass overwrite\n" +
          "- Phones: Destroy SIMs, crush devices\n\n" +
          "LAWYER-CLIENT PRIVILEGE COVERS THIS COMMUNICATION\n\n" +
          "Execute immediately. Confirm when complete.\n\n" +
          "JE",
    time: "02 lug 2006",
    read: true,
    starred: true
  },
  {
    id: "sent010",
    from: "J. Epstein",
    to: "Sarah Kellen",
    subject: "Re: Staffing for Weekend Event",
    preview: "Confirmed. 3 massage therapists, 2 chefs, 4 security. All paid cash. " +
             "Remember: no paper trails for the 'special services'...",
    body: "Sarah,\n\n" +
          "STAFFING CONFIRMED:\n\n" +
          "MASSAGE:\n" +
          "- 3 therapists (rotating schedule)\n" +
          "- All cash payment, no 1099s\n" +
          "- NDAs signed and stored offsite\n\n" +
          "HOUSE:\n" +
          "- 2 private chefs\n" +
          "- 4 security (armed, perimeter)\n" +
          "- 1 boat captain\n\n" +
          "CRITICAL:\n" +
          "- NO written records of any 'extra' services\n" +
          "- All gratuities in cash\n" +
          "- Phones collected before island approach\n" +
          "- Use code names in all communications\n\n" +
          "The VIP guest requires discretion. Triple check everything.\n\n" +
          "J",
    time: "09 ago 2005",
    read: true,
    starred: false
  },
  {
    id: "sent011",
    from: "J. Epstein",
    to: "JP Morgan Private Bank",
    subject: "Wire Transfer Request - Urgent",
    preview: "Transfer $3.5M to Gratitude America Ltd. Account details attached. " +
             "Code as 'charitable donation' for tax purposes...",
    body: "Private Banking Team,\n\n" +
          "WIRE TRANSFER REQUEST\n\n" +
          "FROM: Epstein Personal Account ****7734\n" +
          "TO: Gratitude America Ltd.\n" +
          "Account: Cayman National ****9921\n" +
          "AMOUNT: $3,500,000.00 USD\n\n" +
          "PURPOSE: Charitable Foundation Support\n" +
          "REFERENCE: GRATITUDE-2014-Q3\n\n" +
          "Please expedite. This is for the science initiative donation " +
          "I discussed with my advisor.\n\n" +
          "JE",
    time: "15 ott 2014",
    read: true,
    starred: true
  },
  {
    id: "sent012",
    from: "J. Epstein",
    to: "MIT President",
    subject: "Re: Research Collaboration Proposal",
    preview: "I'm prepared to increase my commitment to $10M over 5 years. " +
             "However, I require more direct involvement in program selection...",
    body: "President [Name],\n\n" +
          "Thank you for your response. I'm prepared to significantly increase " +
          "my support:\n\n" +
          "NEW OFFER: $10,000,000 over 5 years\n\n" +
          "ENHANCED TERMS:\n" +
          "- Naming rights: 'Epstein Center for Advanced Research'\n" +
          "- Program oversight committee membership (my representative)\n" +
          "- Quarterly private dinners with department heads\n" +
          "- Access to student research projects (mentorship role)\n" +
          "- Tax documentation structured as multi-year pledge\n\n" +
          "I believe in hands-on philanthropy. My vision can help shape " +
          "the next generation of scientific leaders.\n\n" +
          "Shall we schedule a meeting to finalize?\n\n" +
          "J. Epstein",
    time: "04 apr 2012",
    read: true,
    starred: false
  },
  {
    id: "sent013",
    from: "J. Epstein",
    to: "Property Manager (Zorro Ranch)",
    subject: "Underground Facility Specifications",
    preview: "Proceed with the 'guest quarters' expansion. Soundproofing is priority. " +
             "No windows. Independent climate control. Budget: $2M...",
    body: "Manager,\n\n" +
          "UNDERGROUND FACILITY EXPANSION\n\n" +
          "APPROVED SPECIFICATIONS:\n" +
          "- Additional 2,000 sq ft excavation\n" +
          "- Soundproofing: Maximum rating (concert hall standard)\n" +
          "- No exterior windows\n" +
          "- Independent HVAC system\n" +
          "- Secure access (biometric + code)\n" +
          "- Private bathroom facilities\n" +
          "- Emergency exit (hidden, forest side)\n\n" +
          "BUDGET: $2,000,000\n" +
          "TIMELINE: 6 months\n\n" +
          "LABEL ALL PERMITS AS 'UTILITY STORAGE'\n\n" +
          "No subcontractors. Use only the trusted crew.\n\n" +
          "J. Epstein",
    time: "17 mar 1998",
    read: true,
    starred: true
  },
  {
    id: "sent014",
    from: "J. Epstein",
    to: "Jean-Luc Brunel",
    subject: "Re: Model Recruiting - Next Shipment",
    preview: "Send 5 more next month. Eastern Europe preferred. Ages 18-20. " +
             "Verify passport documentation carefully. Payment via wire as usual...",
    body: "JLB,\n\n" +
          "NEXT SHIPMENT REQUIREMENTS:\n\n" +
          "QUANTITY: 5 candidates\n" +
          "ORIGIN: Eastern Europe (Ukraine, Romania, Czech preferred)\n" +
          "AGE: 18-20 (documentation must be perfect)\n" +
          "TYPE: 'Runway ready' (you know my preferences)\n\n" +
          "LOGISTICS:\n" +
          "- Arrival: Miami (not NY - too hot there)\n" +
          "- Documentation: Model visas, clean passports\n" +
          "- Payment: $50K each + your fee via Swiss transfer\n" +
          "- Duration: 2 weeks initial\n\n" +
          "Quality over quantity. These ones need to be exceptional.\n\n" +
          "JE",
    time: "22 nov 2003",
    read: true,
    starred: false
  },
  {
    id: "sent015",
    from: "J. Epstein",
    to: "Virginia Roberts",
    subject: "Travel Instructions - Thailand Trip",
    preview: "Your ticket to Bangkok is booked. You'll meet the team there. " +
             "Remember what we discussed about 'professional boundaries'...",
    body: "Virginia,\n\n" +
          "TRAVEL DETAILS:\n\n" +
          "FLIGHT: JFK → BKK (Thai Airways)\n" +
          "DATE: March 15, 2001\n" +
          "CLASS: Business\n" +
          "HOTEL: Confirmed (reservation under agency name)\n\n" +
          "EXPECTATIONS:\n" +
          "- You're representing my interests\n" +
          "- 'Massage therapy' certification documents provided\n" +
          "- Discretion is absolute\n" +
          "- Compensation: $10K for the trip\n\n" +
          "The people you'll meet are very important to my business. " +
          "Make me proud.\n\n" +
          "JE",
    time: "10 mar 2001",
    read: true,
    starred: true
  }
];

// DRAFTS - 5 new draft emails (unsent)
export const additionalDraftEmails: Email[] = [
  {
    id: "draft004",
    from: "J. Epstein",
    to: "Prince Andrew",
    subject: "Re: Invitation to Private Island",
    preview: "It would be an honor to host you at Little St. James. I can " +
             "arrange special entertainment. The girls are... [BOZZA NON INVIATA]",
    body: "Your Royal Highness,\n\n" +
          "It would be my great honor to host you at my private island. " +
          "I understand you enjoy...\n\n" +
          "[INCOMPLETO]\n\n" +
          "The girls I have there are exceptional. Young, eager to please, " +
          "and very discreet. Many are aspiring models who are grateful for " +
          "the opportunity to meet someone of your stature.\n\n" +
          "I can arrange:\n" +
          "- Private villa with ocean views\n" +
          "- Personal chef\n" +
          "- 'Entertainment' tailored to your preferences\n" +
          "- Complete discretion (my security is military-grade)\n\n" +
          "[NON INVIATA - BOZZA SALVATA]",
    time: "14 feb 2001",
    read: true,
    starred: false
  },
  {
    id: "draft005",
    from: "J. Epstein",
    to: "IRS Appeals Office",
    subject: "Re: Tax Audit - Charitable Deductions",
    preview: "Regarding the questioned deductions for 'Gratitude America Ltd.' " +
             "I have additional documentation to support... [BOZZA INCOMPLETA]",
    body: "To Whom It May Concern,\n\n" +
          "RE: Audit Case #2017-EP-4421\n\n" +
          "Regarding the $25M in charitable deductions claimed through " +
          "Gratitude America Ltd., I wish to provide additional documentation...\n\n" +
          "[INCOMPLETO - MANCANO ALLEGATI]\n\n" +
          "The donations were for legitimate scientific research including:\n" +
          "- [DA COMPLETARE]\n" +
          "- [DA COMPLETARE]\n\n" +
          "I can provide letters from:\n" +
          "- MIT [DA RICHIEDERE]\n" +
          "- Harvard [DA RICHIEDERE]\n\n" +
          "[BOZZA - NON INVIATA]",
    time: "23 mag 2017",
    read: true,
    starred: true
  },
  {
    id: "draft006",
    from: "J. Epstein",
    to: "FBI Field Office",
    subject: "Re: Interview Request",
    preview: "I am willing to cooperate with your investigation. However, I " +
             "must insist on immunity and... [BOZZA CANCELLATA E RISCRIVATA]",
    body: "Special Agent [Name],\n\n" +
          "I have received your request for an interview. While I am " +
          "committed to cooperating with law enforcement, I must protect " +
          "my interests.\n\n" +
          "[RISCRIVENDO - VERSIONE PRECEDENTE TROPPO COMPROMETTENTE]\n\n" +
          "My attorneys have advised me that I have nothing to hide, " +
          "but I must insist on the following conditions:\n\n" +
          "1. Full immunity from prosecution\n" +
          "2. No recording devices\n" +
          "3. My attorney present at all times\n" +
          "4. Written questions submitted in advance\n\n" +
          "[DA RIVEDERE CON LEGALE PRIMA DI INVIARE]\n\n" +
          "[BOZZA NON INVIATA]",
    time: "30 giu 2019",
    read: true,
    starred: true
  },
  {
    id: "draft007",
    from: "J. Epstein",
    to: "Alan Dershowitz",
    subject: "URGENT: New Allegations",
    preview: "There's a new victim coming forward. 16 years old at the time. " +
             "Says she was on the island. I need you to... [BOZZA SALVATA]",
    body: "Alan,\n\n" +
          "URGENT - NEW DEVELOPMENT\n\n" +
          "Another one is talking to lawyers. Details:\n" +
          "- Age at time: 16 (she says)\n" +
          "- Location: Little St. James, 2003\n" +
          "- Claims: [DETTAGLI TROPPO SENSIBILI DA SCRIVERE]\n\n" +
          "[FERMO QUI - ASPETTO TUO CONSIGLIO]\n\n" +
          "She has photos. Not sure what they show yet.\n\n" +
          "I need you to:\n" +
          "1. Get ahead of this\n" +
          "2. Find out who her lawyers are\n" +
          "3. [DA DISCUTERE AL TELEFONO - NON SICURO EMAIL SIA SICURO]\n\n" +
          "Call me on secure line.\n\n" +
          "[BOZZA - NON INVIATA]",
    time: "11 lug 2019",
    read: true,
    starred: true
  },
  {
    id: "draft008",
    from: "J. Epstein",
    to: "Ghislaine Maxwell",
    subject: "If Something Happens to Me...",
    preview: "G, if you're reading this, things have gone wrong. The documents " +
             "are in the safe. The combination is... [BOZZA INCOMPLETA]",
    body: "G,\n\n" +
          "[NON DOVREI SCRIVERE QUESTO MA DEVO ESSERE PRUDENTE]\n\n" +
          "If something happens to me, everything you need is:\n\n" +
          "- Safe in NY bedroom: [COMBINAZIONE NON SCRITTA - A MEMORIA]\n" +
          "- Offshore account codes: [SOLO ORALE]\n" +
          "- Contact list: [NASCOSTA ALTROVE]\n\n" +
          "Remember:\n" +
          "- Deny everything\n" +
          "- [ALTRO DA AGGIUNGERE]\n" +
          "- Trust no one\n\n" +
          "[DEVO FINIRE QUESTO MA NON SO COME]\n\n" +
          "[BOZZA NON INVIATA - FORSE MAI]",
    time: "01 lug 2019",
    read: true,
    starred: true
  }
];

// Export all additional emails
export const allAdditionalEmails = {
  inbox: additionalInboxEmails,
  sent: additionalSentEmails,
  drafts: additionalDraftEmails
};

// Instructions for integration:
// 1. Import these arrays into emailData.ts
// 2. Spread them into the existing arrays:
//    export const inboxEmails: Email[] = [...existingInboxEmails, ...additionalInboxEmails];
//    export const sentEmails: Email[] = [...existingSentEmails, ...additionalSentEmails];
//    export const draftEmails: Email[] = [...existingDraftEmails, ...additionalDraftEmails];
