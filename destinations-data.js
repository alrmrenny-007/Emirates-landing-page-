/* Shared destination data. Keyed by slug so destinations/detail.html can
   render any city from one template via ?city=<slug>. Prices are indicative
   demo figures, not real fares. */
window.DESTINATIONS = {
  london: {
    name: "London",
    code: "LHR",
    country: "United Kingdom",
    region: "Europe",
    tagline: "Iconic skyline, world-class theatre, and Emirates' longest-served route.",
    hero: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&q=80",
    overview: "London has been an Emirates destination since 1987 and remains one of our busiest routes, connecting Dubai to Heathrow up to 98 times a week across the A380 and Boeing 777. Direct connections continue on to over 40 UK and European cities via our codeshare and interline partners.",
    highlights: [
      "Up to 6 daily A380 and 777 departures from Dubai",
      "Dedicated Emirates check-in and lounge at Heathrow Terminal 3",
      "Onward connections to Edinburgh, Manchester, and Dublin"
    ],
    flightsPerWeek: 98,
    flightTime: "7h 35m",
    aircraft: "A380 / 777-300ER",
    fares: { economy: 549, premium: 899, business: 2899, first: 5899 },
    schedule: [
      { flight: "EK001", days: "Daily", depart: "08:35 DXB", arrive: "12:55 LHR", aircraft: "A380" },
      { flight: "EK003", days: "Daily", depart: "14:15 DXB", arrive: "18:35 LHR", aircraft: "777-300ER" },
      { flight: "EK005", days: "Daily", depart: "20:15 DXB", arrive: "00:35+1 LHR", aircraft: "A380" }
    ]
  },
  sydney: {
    name: "Sydney",
    code: "SYD",
    country: "Australia",
    region: "Asia Pacific",
    tagline: "Harbour views, beaches, and Emirates' gateway to the Australian east coast.",
    hero: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1600&q=80",
    overview: "Emirates flies to Sydney up to three times daily, offering some of the fastest connections between the Gulf and Australia's east coast via our A380 flagship service. Partner links extend the network on to Melbourne, Brisbane, and Auckland.",
    highlights: [
      "One of only a few airlines offering A380 service to Sydney",
      "Onward Qantas codeshare connections across Australia and New Zealand",
      "Chauffeur-drive service included in First and Business"
    ],
    flightsPerWeek: 21,
    flightTime: "13h 55m",
    aircraft: "A380",
    fares: { economy: 899, premium: 1299, business: 3899, first: 7499 },
    schedule: [
      { flight: "EK412", days: "Daily", depart: "02:05 DXB", arrive: "23:35 SYD", aircraft: "A380" },
      { flight: "EK414", days: "Mon, Wed, Fri", depart: "09:35 DXB", arrive: "07:05+1 SYD", aircraft: "A380" }
    ]
  },
  "new-york": {
    name: "New York",
    code: "JFK",
    country: "United States",
    region: "Americas",
    tagline: "The city that never sleeps, non-stop from Dubai on the A380.",
    hero: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1600&q=80",
    overview: "Our New York JFK service has run non-stop since 2004 and remains one of the longest A380 routes in the network. Onward connections through our JetBlue partnership reach over 25 additional US cities.",
    highlights: [
      "Non-stop A380 service, no stopover required",
      "JetBlue interline connections across the US East Coast",
      "Dedicated Emirates lounge at JFK Terminal 4"
    ],
    flightsPerWeek: 21,
    flightTime: "13h 40m",
    aircraft: "A380",
    fares: { economy: 799, premium: 1199, business: 3599, first: 6999 },
    schedule: [
      { flight: "EK201", days: "Daily", depart: "08:20 DXB", arrive: "13:55 JFK", aircraft: "A380" },
      { flight: "EK203", days: "Daily", depart: "21:40 DXB", arrive: "03:20+1 JFK", aircraft: "A380" }
    ]
  },
  paris: {
    name: "Paris",
    code: "CDG",
    country: "France",
    region: "Europe",
    tagline: "Art, café culture, and a fast connection from the Gulf.",
    hero: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&q=80",
    overview: "Emirates serves Paris Charles de Gaulle twice daily with a mix of A380 and 777 aircraft, offering same-day connections onward across France and into Spain via partner airlines.",
    highlights: [
      "Twice-daily service with same-day return options",
      "Smooth transfer to Air France-KLM connections",
      "Business Class lounge access at CDG Terminal 1"
    ],
    flightsPerWeek: 14,
    flightTime: "7h 05m",
    aircraft: "777-300ER",
    fares: { economy: 599, premium: 949, business: 2999, first: 5999 },
    schedule: [
      { flight: "EK073", days: "Daily", depart: "03:15 DXB", arrive: "07:20 CDG", aircraft: "777-300ER" },
      { flight: "EK075", days: "Daily", depart: "14:35 DXB", arrive: "18:40 CDG", aircraft: "A380" }
    ]
  },
  singapore: {
    name: "Singapore",
    code: "SIN",
    country: "Singapore",
    region: "Asia Pacific",
    tagline: "A gleaming Southeast Asian hub with five weekly A380 departures.",
    hero: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1600&q=80",
    overview: "Singapore is one of Emirates' longest-standing Asian destinations, served up to five times daily and acting as a key connection point for onward travel across Southeast Asia and Australia.",
    highlights: [
      "Up to 5 daily A380 and 777 departures",
      "Fast transfer connections to Bali, Jakarta, and Bangkok",
      "Changi Terminal 1 dedicated check-in"
    ],
    flightsPerWeek: 35,
    flightTime: "7h 25m",
    aircraft: "A380 / 777-300ER",
    fares: { economy: 459, premium: 799, business: 2499, first: 4999 },
    schedule: [
      { flight: "EK354", days: "Daily", depart: "09:05 DXB", arrive: "20:30 SIN", aircraft: "A380" },
      { flight: "EK356", days: "Daily", depart: "20:50 DXB", arrive: "08:15+1 SIN", aircraft: "777-300ER" }
    ]
  },
  rome: {
    name: "Rome",
    code: "FCO",
    country: "Italy",
    region: "Europe",
    tagline: "Ancient ruins and Renaissance art, twice-daily from Dubai.",
    hero: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600&q=80",
    overview: "Emirates connects Dubai and Rome Fiumicino twice daily, linking travelers to central Italy with onward options across the Mediterranean through our partner network.",
    highlights: [
      "Twice-daily A380 and 777 rotation",
      "Convenient afternoon and late-evening departures",
      "Onward rail connections from Fiumicino into central Rome"
    ],
    flightsPerWeek: 14,
    flightTime: "6h 15m",
    aircraft: "777-300ER",
    fares: { economy: 529, premium: 869, business: 2799, first: 5599 },
    schedule: [
      { flight: "EK095", days: "Daily", depart: "09:50 DXB", arrive: "13:05 FCO", aircraft: "777-300ER" },
      { flight: "EK097", days: "Daily", depart: "21:15 DXB", arrive: "00:30+1 FCO", aircraft: "A380" }
    ]
  }
};
