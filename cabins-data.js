/* Shared cabin-class data, keyed by slug. cabin-detail.html renders any
   class from this via ?class=<slug>. */
window.CABINS = {
  first: {
    name: "First Class",
    tagline: "Private suites",
    slug: "first",
    gradientClass: "cabin-first",
    lead: "Floor-to-ceiling doors, a personal minibar, and a fully flat bed. Some suites feature virtual windows with HD cameras relaying real-time outside views.",
    overview: "First Class on the A380 and select 777s is built around fully enclosed private suites — sliding doors, personal climate control, and a seat that converts into an 82-inch flat bed. Suites in the centre aisle without a window get a virtual window: an HD camera feed of the view outside, so every seat feels like a window seat. Between the suites, the A380's onboard lounge and shower spa turn a long-haul sector into something closer to a hotel stay at 40,000 feet.",
    features: [
      "Fully enclosed private suite with sliding doors",
      "82-inch fully flat bed",
      "32-inch HD entertainment screen",
      "Virtual windows with real-time HD camera view",
      "Onboard shower spa (A380)",
      "Onboard lounge and bar (A380)",
      "Personal minibar and Do Not Disturb button",
      "Mercedes-Benz designed seat and ottoman for guest dining"
    ],
    specs: { screen: "32\"", bed: "82\" fully flat", width: "Up to 40\"", wifi: "Free, unlimited" },
    fareFrom: 5899,
    aircraft: "A380, select 777-300ER"
  },
  business: {
    name: "Business Class",
    tagline: "Lie-flat comfort",
    slug: "business",
    gradientClass: "cabin-business",
    lead: "Staggered 1-2-1 layout with fully flat beds up to two metres long. Personal minibar and direct aisle access on every seat.",
    overview: "Business Class spans the fleet in a staggered 1-2-1 layout, giving every passenger direct aisle access and a seat that converts to a fully flat bed up to two metres long. Newer cabins on the A350 and retrofitted 777s add a personal minibar, softer mood lighting, and a redesigned seat shell with more storage. On the A380, Business Class sits above the First Class deck with its own onboard bar just a few rows away.",
    features: [
      "Staggered 1-2-1 layout with direct aisle access",
      "Fully flat bed, up to 2 metres long",
      "23-inch HD entertainment screen",
      "Built-in massage function",
      "Personal minibar (A350, retrofitted aircraft)",
      "Access to the A380 onboard bar",
      "Privacy partition between seats",
      "Amenity kit and noise-cancelling headsets"
    ],
    specs: { screen: "23\"", bed: "Fully flat, ~2m", width: "20-22\"", wifi: "Free Wi-Fi" },
    fareFrom: 2899,
    aircraft: "A380, A350, 777-300ER"
  },
  premium: {
    name: "Premium Economy",
    tagline: "Elevated space",
    slug: "premium",
    gradientClass: "cabin-premium",
    lead: "Recaro PL3530 seats with a 40\" pitch, 8\" recline, and 19.5\" width. Exclusive leather design available on the A380 and retrofitted 777s.",
    overview: "Premium Economy uses the Recaro PL3530 seat, purpose-built for the class rather than adapted from Economy: a 40-inch pitch, 8 inches of recline, and a leg rest for long sectors. The A380 and newly retrofitted 777s carry an exclusive leather-trimmed version. It's the fastest-growing cabin in the retrofit program, expanding to more than 80 routes as new aircraft join the fleet.",
    features: [
      "40-inch seat pitch, 8-inch recline",
      "Dedicated Recaro PL3530 seat design",
      "13.3-inch HD entertainment screen",
      "Extra legroom and leg rest",
      "Priority boarding",
      "Enhanced dining, closer to Business standard",
      "Exclusive leather trim (A380, retrofitted 777s)",
      "Increased baggage allowance over Economy"
    ],
    specs: { screen: "13.3\"", bed: "8\" recline", width: "19.5\"", wifi: "Free Wi-Fi" },
    fareFrom: 899,
    aircraft: "A380, A350, retrofitted 777-300ER"
  }
};
