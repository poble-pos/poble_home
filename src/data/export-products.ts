/**
 * Product pages from the approved Poble export (product-*.html). The order is the
 * export's pager order; each page links to the next one, wrapping at the end.
 */
export interface ExportProduct {
  slug: string;
  name: string;
  kicker: string;
  title: string;
  lede: string;
  image: { src: string; alt: string; width: number; height: number };
  points: { title: string; body: string }[];
}

export const EXPORT_PRODUCTS: ExportProduct[] = [
  {
    slug: "pos",
    name: "Poble POS",
    kicker: "Point of sale",
    title: "The heart of your counter.",
    lede: "Orders, payments and end-of-day reports on one uncluttered screen.",
    image: { src: "/images/pos/Poble%20POS.png", alt: "Poble POS on screen", width: 2960, height: 2290 },
    points: [
      { title: "Built for the rush", body: "Responsive touch controls and offline resilience." },
      { title: "Tyro & Linkly ready", body: "Amounts go straight to the terminal." },
      { title: "Live menu control", body: "Change a price and every terminal updates." },
    ],
  },
  {
    slug: "staff-pos",
    name: "Staff POS",
    kicker: "Handheld",
    title: "Take the counter to the table.",
    lede: "Take orders at the table and send them straight to the kitchen.",
    image: { src: "/images/pos/Staff%20POS.png", alt: "Poble Staff POS on screen", width: 2960, height: 2290 },
    points: [
      { title: "Nothing new to learn", body: "It mirrors the main POS." },
      { title: "Straight to the pass", body: "No return trip to the counter." },
      { title: "Fewer mistakes", body: "Modifiers captured at the source." },
    ],
  },
  {
    slug: "kds",
    name: "Kitchen Display",
    kicker: "Kitchen",
    title: "A calm pass, even at capacity.",
    lede: "Every order in one queue, colour-coded by waiting time.",
    image: { src: "/images/pos/KDS.png", alt: "Kitchen Display on screen", width: 2960, height: 2290 },
    points: [
      { title: "Never miss a docket", body: "Orders stay on screen until marked complete." },
      { title: "Urgency at a glance", body: "Tickets change colour as they age." },
      { title: "Bump and recall", body: "Mark an order complete or recall it with one tap." },
    ],
  },
  {
    slug: "dual-screen",
    name: "Dual Screen",
    kicker: "Customer display",
    title: "Transparency at the counter.",
    lede: "Customers see every item as it is rung up.",
    image: { src: "/images/pos/Dual%20Screen.png", alt: "Dual Screen on screen", width: 2960, height: 2290 },
    points: [
      { title: "Live order view", body: "Prices update in real time." },
      { title: "Your brand between sales", body: "Promotions and loyalty prompts." },
      { title: "Smoother handover", body: "Totals always visible." },
    ],
  },
  {
    slug: "kiosk",
    name: "Self Ordering Kiosk",
    kicker: "Self service",
    title: "Shorter queues. Bigger baskets.",
    lede: "Let guests order for themselves and explore suggested extras.",
    image: { src: "/images/pos/Kiosk.png", alt: "Self Ordering Kiosk on screen", width: 2290, height: 2960 },
    points: [
      { title: "Beat the queue", body: "Customers place their own orders." },
      { title: "Consistent upsell", body: "Kiosks never forget to ask." },
      { title: "Same queue as the counter", body: "Kiosk and counter orders join the same queue." },
    ],
  },
  {
    slug: "table-ordering",
    name: "Table Ordering",
    kicker: "Table ordering",
    title: "Order from your seat.",
    lede: "Guests browse the menu and place orders at their table.",
    image: { src: "/images/pos/Table%20Order.png", alt: "Table Ordering on screen", width: 2960, height: 2290 },
    points: [
      { title: "One app, every table", body: "Pick a table, start ordering." },
      { title: "Always the live menu", body: "Sold-out items disappear instantly." },
      { title: "More rounds", body: "Reordering takes one tap." },
    ],
  },
  {
    slug: "crm",
    name: "Membership CRM",
    kicker: "Loyalty",
    title: "Turn guests into regulars.",
    lede: "Points, vouchers, online orders and the waitlist in one profile.",
    image: { src: "/images/pos/CRM.png", alt: "Membership CRM on screen", width: 1857, height: 3096 },
    points: [
      { title: "Points that just work", body: "Earned and redeemed at the counter." },
      { title: "Order ahead", body: "Balances update the moment they pay." },
      { title: "Smart waitlist", body: "Join by QR code and get notified when ready." },
    ],
  },
];
