/**
 * English copy for the whole public site. This is the source of truth: the other
 * languages must provide the same keys (checked by the `Messages` type and by the
 * dictionary tests), and anything missing at runtime falls back to this text.
 *
 * Placeholders use `{name}` and are filled by `format()`.
 */
export const en = {
  meta: {
    siteDescription: "Experience the fastest, most reliable iPad POS tailored for modern Australian venues.",
    home: {
      title: "Poble — The lightweight POS built for Australian hospitality",
      description:
        "The iPad POS for Australian cafés and restaurants. Bring your counter, kitchen and back office into one flow.",
    },
    pricing: {
      title: "Pricing",
      description: "Poble Basic is $60 per month. Optional features have additional monthly fees.",
    },
    features: {
      title: "Features",
      description:
        "Poble POS, Staff POS, Kitchen Display System, Dual Screen, Self Ordering Kiosk, Table Ordering and Membership CRM — one connected system for your whole venue.",
    },
    customers: {
      title: "Customers",
      description: "How Australian venues like Woojeong, Kidsday and Wind & Flour run faster, calmer service on Poble.",
    },
    hardware: {
      title: "Hardware",
      description: "Verified for Poble POS and sold at cost. Stands, printers and accessories for your venue.",
    },
    enquiry: {
      title: "Send an enquiry",
      description: "Tell us about your venue and the tools you need. A Poble specialist will get back to you with a setup and quote.",
    },
  },

  common: {
    skipToContent: "Skip to content",
    contactUs: "Contact us",
    viewPricing: "View pricing",
    talkToSales: "Talk to sales",
    explore: "Explore",
    done: "Done",
    sending: "Sending…",
    opensInNewTab: "{label} — opens in a new tab",
    ticks: ["No lock-in", "No hidden fees", "Support 7 days a week"],
  },

  nav: {
    homeLabel: "Poble, home",
    mainLabel: "Main",
    moreLabel: "More navigation",
    mobileLabel: "Mobile navigation",
    products: "Products",
    pricing: "Pricing",
    customers: "Customers",
    about: "About",
    signIn: "Sign in",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  language: {
    label: "Language",
    button: "Language: {language}",
    menu: "Choose a language",
  },

  footer: {
    copyright: "© 2026 Poble. Management solution by ECNESOFT.",
    navLabel: "Support and legal",
    manual: "Manual",
    terms: "Terms",
    privacy: "Privacy",
    cookies: "Cookies",
  },

  /** Product copy shared by the homepage explorer, /features and /features/[product]. */
  products: {
    pos: {
      name: "Poble POS",
      kicker: "Point of sale",
      title: "The heart of your counter.",
      lede: "Orders, payments and end-of-day reports on one uncluttered screen.",
      imageAlt: "Poble POS on screen",
      points: [
        { title: "Built for the rush", body: "Responsive touch controls and offline resilience." },
        { title: "Tyro & Linkly ready", body: "Amounts go straight to the terminal." },
        { title: "Live menu control", body: "Change a price and every terminal updates." },
      ],
    },
    "staff-pos": {
      name: "Staff POS",
      kicker: "Handheld",
      title: "Take the counter to the table.",
      lede: "Take orders at the table and send them straight to the kitchen.",
      imageAlt: "Poble Staff POS on screen",
      points: [
        { title: "Nothing new to learn", body: "It mirrors the main POS." },
        { title: "Straight to the pass", body: "No return trip to the counter." },
        { title: "Fewer mistakes", body: "Modifiers captured at the source." },
      ],
    },
    kds: {
      name: "Kitchen Display",
      kicker: "Kitchen",
      title: "A calm pass, even at capacity.",
      lede: "Every order in one queue, colour-coded by waiting time.",
      imageAlt: "Kitchen Display on screen",
      points: [
        { title: "Never miss a docket", body: "Orders stay on screen until marked complete." },
        { title: "Urgency at a glance", body: "Tickets change colour as they age." },
        { title: "Bump and recall", body: "Mark an order complete or recall it with one tap." },
      ],
    },
    "dual-screen": {
      name: "Dual Screen",
      kicker: "Customer display",
      title: "Transparency at the counter.",
      lede: "Customers see every item as it is rung up.",
      imageAlt: "Dual Screen on screen",
      points: [
        { title: "Live order view", body: "Prices update in real time." },
        { title: "Your brand between sales", body: "Promotions and loyalty prompts." },
        { title: "Smoother handover", body: "Totals always visible." },
      ],
    },
    kiosk: {
      name: "Self Ordering Kiosk",
      kicker: "Self service",
      title: "Shorter queues. Bigger baskets.",
      lede: "Let guests order for themselves and explore suggested extras.",
      imageAlt: "Self Ordering Kiosk on screen",
      points: [
        { title: "Beat the queue", body: "Customers place their own orders." },
        { title: "Consistent upsell", body: "Kiosks never forget to ask." },
        { title: "Same queue as the counter", body: "Kiosk and counter orders join the same queue." },
      ],
    },
    "table-ordering": {
      name: "Table Ordering",
      kicker: "Table ordering",
      title: "Order from your seat.",
      lede: "Guests browse the menu and place orders at their table.",
      imageAlt: "Table Ordering on screen",
      points: [
        { title: "One app, every table", body: "Pick a table, start ordering." },
        { title: "Always the live menu", body: "Sold-out items disappear instantly." },
        { title: "More rounds", body: "Reordering takes one tap." },
      ],
    },
    crm: {
      name: "Membership CRM",
      kicker: "Loyalty",
      title: "Turn guests into regulars.",
      lede: "Points, vouchers, online orders and the waitlist in one profile.",
      imageAlt: "Membership CRM on screen",
      points: [
        { title: "Points that just work", body: "Earned and redeemed at the counter." },
        { title: "Order ahead", body: "Balances update the moment they pay." },
        { title: "Smart waitlist", body: "Join by QR code and get notified when ready." },
      ],
    },
  },

  /** Venue stories shared by the homepage and /customers. Venue and person names are not translated. */
  stories: {
    woojeong: {
      venue: "Korean restaurant · Perth",
      imageAlt: "Woojeong Korean restaurant in Perth",
      quote:
        "Running a busy Korean restaurant in Perth means we need absolute reliability. Poble simplified our table service immediately.",
      author: "Min-ji Park",
      body: "Orders used to be written by hand and re-keyed at the counter. Now they go from the table straight to the kitchen.",
      results: ["Table service simplified from the first shift", "End-of-day reconciled in seconds"],
    },
    kidsday: {
      venue: "Play café · Sydney",
      imageAlt: "Kidsday play cafe in Sydney",
      quote: "We run two terminals for ticketing and café orders. The sync is instant, and the system handles volume with ease.",
      author: "Sarah Lee",
      body: "One counter sells entry tickets, another runs the café. Two terminals, one kitchen queue and one end-of-day report.",
      results: ["Two terminals, always in sync", "One view of the whole day's trade"],
    },
    "wind-and-flour": {
      venue: "Bakery & café · Sydney",
      imageAlt: "Wind and Flour bakery and cafe in Sydney",
      quote: "Our menu changes by the hour. Being able to update it from the counter — mid-rush — changed our mornings completely.",
      author: "The team at Wind & Flour",
      body: "Pastries sell out by lunch. Staff mark items sold-out at the counter and every screen follows instantly.",
      results: ["Sold-out items updated from the counter", "New staff taking orders on their first shift"],
    },
  },

  home: {
    hero: {
      line1: "A calmer counter.",
      line2: "A connected venue.",
      description:
        "The iPad POS for Australian cafés and restaurants. Bring your counter, kitchen and back office into one flow.",
      explore: "Explore Poble",
      filmLabel:
        "Poble POS, self ordering and Kitchen Display come together around the Poble logo. Product screens from the Poble range; optional features are billed separately.",
      photoAlt: "Poble at a café counter",
      posAlt: "Poble POS product screen",
      orderAlt: "Poble self ordering screen",
      kitchenAlt: "Poble Kitchen Display screen",
    },
    features: {
      line1: "One system.",
      line2: "Every part of your venue.",
      viewPricing: "View pricing & add-ons",
      tabsLabel: "Poble products",
      picker: "Explore a product",
      talkSetup: "Talk about your setup",
    },
    payments: {
      heading: "Payments, connected.",
      intro: "Explore payment options for your Poble setup.",
      explorePartner: "Explore {label}",
      partnerHeading: "Let’s build the next connection.",
      partnerBody: "Have a payment or technology partnership in mind? We’d like to hear from you.",
    },
    uber: {
      line1: "Your counter.",
      line2: "Connected to delivery.",
      body: "Bring Uber Eats into your Poble setup.",
    },
    pricing: {
      line1: "Your venue.",
      line2: "Your setup.",
      labelQuote: "Your tailored setup",
      labelEstimate: "Your monthly estimate",
      labelBasic: "Poble Basic Plan",
      perMonth: "/month",
      meta: "AUD per venue · Month-to-month",
      breakdownQuote: "Your selected tools require a quote. Your other selections are saved.",
      breakdown: "Poble Basic ${base} + selected options ${addOns}",
      trial: "1-month free trial",
      mobileEstimate: "Monthly estimate",
      addHeading: "Add the tools your venue needs.",
      addIntro:
        "Start with Poble Basic at ${base}/month. Select your options to see your monthly estimate. All prices are in AUD.",
      legend: "Choose your monthly options",
      devices: "Devices",
      decrease: "Decrease {name} devices",
      increase: "Increase {name} devices",
      quantity: "{name} device quantity",
      addNote:
        "Extra POS, Table Ordering, Membership & Loyalty, Kiosk, Table Booking and WaitList are quoted to suit your venue. Your other selections stay on this page while you enquire.",
      faqHeading: "Before you get started",
      groups: {
        devices: "Devices",
        operations: "Operations",
        enquiry: "By enquiry",
      },
      options: {
        staff: { name: "Staff Order", note: "" },
        kds: { name: "Kitchen Display (KDS)", note: "Tablet required" },
        "table-order": { name: "Table Ordering", note: "Ask us for a quote" },
        extra: { name: "Extra POS Device", note: "Ask us for a quote" },
        crm: { name: "Membership & Loyalty", note: "CRM / Rewards · Ask us for a quote" },
        online: { name: "Online Ordering (QR)", note: "" },
        uber: { name: "Uber Eats Integration", note: "" },
        management: { name: "Table Management", note: "" },
        kiosk: { name: "Self Ordering Kiosk", note: "Ask us for a quote" },
        booking: { name: "Table Booking", note: "Ask us for a quote" },
        waitlist: { name: "WaitList", note: "Ask us for a quote" },
      },
      faqs: [
        {
          q: "Are all features included in $60?",
          a: "The $60 Basic plan is the starting price. Staff Order and Kitchen Display are charged per device. Other selected options update your monthly estimate; Extra POS, Table Ordering, Membership & Loyalty, Kiosk, Table Booking and WaitList require a quote.",
        },
        {
          q: "How does the free month work?",
          a: "The trial gives you one month on the Basic Plan. Your venue profile is verified before you begin. Contact our team for setup and billing details.",
        },
        {
          q: "Can I use my own iPad?",
          a: "Yes. Poble supports iPad 8th generation and later. Our team can help with printers, stands and payment terminals.",
        },
        {
          q: "Is there a lock-in contract?",
          a: "The software plan runs month-to-month. You can cancel at any time.",
        },
      ],
    },
    customers: {
      heading: "At home in Australian venues.",
      seeSetup: "See their setup",
      setupFor: " for {name}",
    },
    about: {
      heading: "Built beside the counter.",
      body1: "ECNESOFT builds Poble in Australia, for Australian hospitality. Our team has worked in POS since 2002.",
      body2: "Poble was shaped by real service — the morning rush, the split bill, the docket that cannot go missing.",
      signature1: "Australian hospitality.",
      signature2: "Local Aussie support.",
      byline: "Poble by ECNESOFT",
    },
    contact: {
      heading: "Let's talk about your venue.",
      body: "Book a demo, plan your setup or ask about switching.",
      cta: "Send Enquiry",
    },
  },

  inquiry: {
    title: "Contact us",
    close: "Close enquiry",
    intro: "Tell us about your venue and a sales specialist will get back to you. Prefer to call?",
    name: "Your name",
    namePlaceholder: "Your name",
    phone: "Phone number",
    email: "Email address",
    shop: "Venue name & address",
    shopPlaceholder: "Your venue's name & address",
    suburb: "Suburb",
    suburbPlaceholder: "Suburb",
    message: "Your enquiry (optional)",
    messagePlaceholder: "Tell us what you need",
    error: "We could not confirm your enquiry was sent. Your details are still here. Please try again, or email",
    submit: "Send a message",
    consent: "By submitting, you agree to be contacted about your enquiry.",
    help: "You can also email",
    successTitle: "Thanks for getting in touch.",
    successBody: "Your enquiry has been submitted to Poble. Our team will be in touch.",
  },

  enquiry: {
    back: "Back to home",
    heading1: "Your venue.",
    heading2: "Your Poble setup.",
    intro: "POS, ordering and loyalty. Tell us what works for you.",
    footnote: "A few quick questions to help us understand your business.",
    progressLabel: "Form progress",
    step: "Step {current} of {total}",
    reviewStep: "Review your Poble enquiry",
    percent: "{percent}% complete",
    previous: "Previous question",
    next: "Next question",
    continue: "Continue",
    review: "Review my enquiry",
    edit: "Edit answers",
    reviewHeading: "Your Poble setup, at a glance.",
    reviewHint: "Check your answers, then send your enquiry. You can still edit anything before you send it.",
    priceNote:
      "Additional fees apply to optional features. After completing your enquiry, speak with a Poble specialist to receive a full quote for your setup.",
    empty: "—",
    questions: {
      venue: "What kind of venue do you run?",
      reason: "What brings you to Poble?",
      features: "What would you like Poble to help with?",
      venues: "How many venues need Poble?",
      timing: "When would you like to get started?",
      business: "Tell us about your venue.",
      contact: "How can the Poble team reach you?",
    },
    hints: {
      features: "POBLE POS is included as your starting point. Select as many optional tools as you need. Tap ? to explore each feature.",
      contact: "Leave your details to discuss a suitable setup or arrange a demo.",
    },
    options: {
      venue: {
        cafe: "Cafe or bakery",
        restaurant: "Restaurant",
        takeaway: "Takeaway or quick service",
        bar: "Bar or pub",
        "food-truck": "Food truck",
        other: "Other hospitality venue",
      },
      reason: {
        "new-venue": "Opening a new venue",
        "replace-pos": "Replacing my current POS",
        "add-tools": "Adding tools to my existing setup",
        exploring: "Exploring my options",
      },
      venues: {
        one: "1 venue",
        "two-three": "2–3 venues",
        "four-plus": "4 or more venues",
        planning: "Still planning",
      },
      timing: {
        asap: "As soon as possible",
        "one-month": "Within 1 month",
        "one-three-months": "In 1–3 months",
        researching: "Just researching",
      },
    },
    features: {
      "poble-pos": "POBLE POS",
      "staff-pos": "Staff POS",
      "table-ordering": "Table Ordering",
      kds: "KDS",
      membership: "Membership & Loyalty",
      "online-qr": "Online & QR Ordering",
      kiosk: "Self-ordering Kiosk",
      "uber-eats": "Uber Eats Integration",
      booking: "Booking",
      waitlist: "Waitlist",
      stock: "Stock Management",
      "staff-management": "Staff Management",
      other: "Other requirements",
    },
    groups: {
      starting: "Your starting point",
      popular: "Popular for your venue",
      more: "More tools for your venue",
      optional: "Optional tools",
    },
    defaultTag: "Default · always selected",
    about: "About {name}",
    closeDetails: "Close feature details",
    otherLabel: "Tell us what else you need.",
    otherPlaceholder: "Describe the features or support you need.",
    details: {
      "poble-pos": {
        title: "Built for takeaway. Ready for your busy counter.",
        body: "POBLE POS supports takeaway-based operations with easy, fast payments and accurate reports that make performance easy to analyse visually.",
        points: [
          { title: "Fast, simple payments", body: "Keep your counter moving with an easy payment workflow." },
          { title: "Clear reporting", body: "Understand your business through accurate, visual reports." },
        ],
      },
      "staff-pos": {
        title: "Take the counter to the table.",
        body: "Take orders at the table and send them straight to the kitchen.",
        points: [
          { title: "Nothing new to learn", body: "It mirrors the main POS." },
          { title: "Straight to the pass", body: "No return trip to the counter." },
          { title: "Fewer mistakes", body: "Modifiers captured at the source." },
        ],
      },
      "table-ordering": {
        title: "Order from your seat.",
        body: "Guests browse the menu and place orders at their table.",
        points: [
          { title: "One app, every table", body: "Pick a table, start ordering." },
          { title: "Always the live menu", body: "Sold-out items disappear instantly." },
          { title: "More rounds", body: "Reordering takes one tap." },
        ],
      },
      kds: {
        title: "A calm pass, even at capacity.",
        body: "Every order in one queue, colour-coded by waiting time.",
        points: [
          { title: "Never miss a docket", body: "Orders stay on screen until marked complete." },
          { title: "Urgency at a glance", body: "Tickets change colour as they age." },
          { title: "Bump and recall", body: "Mark an order complete or recall it with one tap." },
        ],
      },
      membership: {
        title: "Turn guests into regulars.",
        body: "Membership CRM brings points, vouchers, online orders and the waitlist together in one profile.",
        points: [
          { title: "Points that just work", body: "Earned and redeemed at the counter." },
          { title: "Order ahead", body: "Balances update the moment they pay." },
          { title: "Smart waitlist", body: "Join by QR code and get notified when ready." },
        ],
      },
      "online-qr": {
        title: "Scan. Order. Keep service moving.",
        body: "Make ordering simple and accurate with QR codes, reducing order mistakes between the floor and the kitchen.",
        points: [
          { title: "Easy QR ordering", body: "Guests scan a code to browse and place their order." },
          { title: "Clearer orders", body: "Capture customer selections accurately and reduce manual order entry." },
          { title: "Online convenience", body: "Support pickup and delivery orders." },
        ],
      },
      kiosk: {
        title: "Shorter queues. Bigger baskets.",
        body: "Let guests order for themselves and explore suggested extras.",
        points: [
          { title: "Beat the queue", body: "Customers place their own orders." },
          { title: "Consistent upsell", body: "Kiosks never forget to ask." },
          { title: "Same queue as the counter", body: "Kiosk and counter orders join the same queue." },
        ],
      },
      "uber-eats": {
        title: "From Uber Eats to your kitchen.",
        body: "Connect Uber Eats and send orders to the kitchen with one button.",
        points: [
          { title: "Connected ordering", body: "Bring Uber Eats into your Poble workflow." },
          { title: "One-button handoff", body: "Send the order through to your kitchen." },
        ],
      },
      booking: {
        title: "Booking",
        body: "Manage guest reservations and plan your upcoming service.",
        points: [] as { title: string; body: string }[],
      },
      waitlist: {
        title: "Waitlist",
        body: "Manage waiting guests and let them know when their table is ready.",
        points: [] as { title: string; body: string }[],
      },
      stock: {
        title: "Stock Management",
        body: "Keep track of stock levels and manage inventory for your venue.",
        points: [] as { title: string; body: string }[],
      },
      "staff-management": {
        title: "Staff Management",
        body: "Manage staff accounts and access permissions in one place.",
        points: [] as { title: string; body: string }[],
      },
      other: {
        title: "Tell us what else you need.",
        body: "Select this option and describe any additional features or requirements for your venue.",
        points: [] as { title: string; body: string }[],
      },
    },
    fields: {
      company: { label: "Venue or business name", placeholder: "e.g. Corner Street Cafe", required: "Please enter your venue or business name." },
      postcode: { label: "Australian postcode", placeholder: "e.g. 2000", required: "Please enter your Australian postcode." },
      name: { label: "Full name", placeholder: "Your name", required: "Please enter your full name." },
      email: { label: "Email address", placeholder: "you@company.com", required: "Please enter your email address." },
      phone: { label: "Phone number", placeholder: "e.g. 0412 345 678", required: "Please enter your phone number." },
    },
    otherReviewLabel: "Other requirements",
    errors: {
      selectOne: "Please select an option to continue.",
      selectAtLeastOne: "Please select at least one option.",
      postcode: "Please enter a 4-digit postcode.",
      email: "Please enter a valid email address.",
      phone: "Please enter a valid phone number.",
      other: "Please describe your other requirements.",
    },
  },

  partnership: {
    open: "Partner with Poble",
    title: "Partner with Poble",
    close: "Close partnership enquiry",
    successTitle: "Thank you for your proposal.",
    successBody: "Your partnership enquiry has been submitted. For follow-up, contact {email}.",
    intro: "Tell us about your company and how we could work together.",
    name: "Your name",
    phone: "Phone number",
    email: "Email address",
    company: "Company name",
    proposal: "Your partnership proposal",
    proposalPlaceholder: "Tell us about the partnership you have in mind",
    error: "We could not confirm your proposal was sent. Your details are still here. Please try again or email {email}.",
    submit: "Send inquiry",
    consent: "Your details will be sent to {email} via FormSubmit to respond to your proposal.",
    preferEmail: "Prefer email?",
  },

  pricingPage: {
    kicker: "Pricing",
    heading: "Poble Basic. Add what you need.",
    badge: "Poble Basic Plan",
    perMonth: "/month",
    perVenue: "Per venue, in AUD. Cancel anytime.",
    askFreeMonth: "Ask about your free month",
    addHeading: "Additional features, separate monthly fees.",
    addBody:
      "The $60 monthly price covers Poble Basic. Optional features are billed on top of the Basic plan. Contact us to confirm your add-ons and total monthly cost.",
    buildPlan: "Build your plan",
    builderNote: "Choose options and see your monthly estimate in our plan builder.",
    paymentsHeading: "Payments & delivery",
    paymentsBody: "Tyro and Linkly card integrations. Uber Eats integration is available for +$30/month.",
    venuesHeading: "More than one venue?",
    venuesBody: "One back office across every location.",
    contactSales: "Contact sales",
    faqHeading: "Frequently asked.",
    faqs: [
      { q: "Is switching complicated?", a: "We rebuild your menu, train your staff and stand beside you on the first service." },
      {
        q: "What hardware do I need?",
        a: "An iPad (8th generation or later). Explore compatible printers, stands and payment terminals on our hardware page.",
      },
      { q: "Is there a lock-in contract?", a: "No. Month-to-month, cancel any time, and your data is yours to export." },
      {
        q: "What happens after the free month?",
        a: "Unless you cancel before the trial ends, your account automatically converts to a paid subscription. Contact us for plan and billing details.",
      },
    ],
    ctaHeading: "Start your free month.",
  },

  featuresPage: {
    kicker: "Product",
    heading: "One system. Every corner of your venue.",
    lede: "Seven products that behave like one.",
    ctaHeading: "One system. Your choice of tools.",
  },

  productPage: {
    allProducts: "All products",
    pagerLabel: "Product",
    ctaHeading: "Try it on your counter.",
  },

  customersPage: {
    kicker: "Customers",
    heading: "Real venues. Real service.",
    ctaHeading: "Your venue could be next.",
  },

  hardwarePage: {
    kicker: "Hardware",
    heading: "Ready for service.",
    lede: "Verified for Poble POS and sold at cost.",
    askUs: "Ask us",
    ctaHeading: "Need a full venue setup?",
    askSetup: "Ask about setup",
    groups: {
      stands: "Stands",
      printers: "Printers",
      accessories: "Accessories",
    },
    items: {
      "gemini-dual": { name: "Gemini Dual Stand", description: "Dual-screen mount, 360° swivel." },
      "elite-evo": { name: "Elite Evo Stand", description: "Low profile, tamper resistant." },
      "touch-evo": { name: "Touch Evo Stand", description: "Freestanding, tilt adjustable." },
      "posbank-a11": { name: "POSBANK A11", description: "250mm/s, Ethernet, auto cutter." },
      "epson-m30iii": { name: "Epson TM-m30III", description: "Compact, Bluetooth and Wi-Fi." },
      "cash-drawer": { name: "Cash Drawer", description: "Steel, 5 note / 8 coin, key lock." },
      "thermal-paper": { name: "Thermal Paper", description: "80 × 80 mm rolls, BPA free. Box of 24." },
      "qr-stickers": { name: "QR Table Stickers", description: "Waterproof, for table ordering." },
    },
  },
};

/** Recursively widens string literals so other languages can supply their own text. */
type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : { [K in keyof T]: Widen<T[K]> };

export type Messages = Widen<typeof en>;
