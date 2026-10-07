/**
 * @file home-products.ts
 * @description Product explorer content for the homepage, from the approved
 * Poble design export. Screens are the supplied Poble product images.
 */

export interface HomeProduct {
  id: string;
  tab: string;
  label: string;
  title: string;
  description: string;
  points: { title: string; body: string }[];
  image: { src: string; alt: string; width: number; height: number };
}

export const HOME_PRODUCTS: HomeProduct[] = [
  {
    id: "pos",
    tab: "Poble POS",
    label: "Poble POS",
    title: "The heart of your counter.",
    description: "Orders, payments and end-of-day reports on one uncluttered screen.",
    points: [
      { title: "Built for the rush", body: "Responsive touch controls and offline resilience." },
      { title: "Tyro & Linkly ready", body: "Amounts go straight to the terminal." },
      { title: "Live menu control", body: "Change a price and every terminal updates." },
    ],
    image: { src: "/images/pos/Poble%20POS.png", alt: "Poble POS on screen", width: 2960, height: 2290 },
  },
  {
    id: "staff-pos",
    tab: "Staff POS",
    label: "Staff POS",
    title: "Take the counter to the table.",
    description: "Take orders at the table and send them straight to the kitchen.",
    points: [
      { title: "Nothing new to learn", body: "It mirrors the main POS." },
      { title: "Straight to the pass", body: "No return trip to the counter." },
      { title: "Fewer mistakes", body: "Modifiers captured at the source." },
    ],
    image: { src: "/images/pos/Staff%20POS.png", alt: "Poble Staff POS on screen", width: 2960, height: 2290 },
  },
  {
    id: "kds",
    tab: "Kitchen Display",
    label: "Kitchen Display",
    title: "A calm pass, even at capacity.",
    description: "Every order in one queue, colour-coded by waiting time.",
    points: [
      { title: "Never miss a docket", body: "Orders stay on screen until marked complete." },
      { title: "Urgency at a glance", body: "Tickets change colour as they age." },
      { title: "Bump and recall", body: "Mark an order complete or recall it with one tap." },
    ],
    image: { src: "/images/pos/KDS.png", alt: "Kitchen Display on screen", width: 2960, height: 2290 },
  },
  {
    id: "dual-screen",
    tab: "Dual Screen",
    label: "Dual Screen",
    title: "Transparency at the counter.",
    description: "Customers see every item as it is rung up.",
    points: [
      { title: "Live order view", body: "Prices update in real time." },
      { title: "Your brand between sales", body: "Promotions and loyalty prompts." },
      { title: "Smoother handover", body: "Totals always visible." },
    ],
    image: { src: "/images/pos/Dual%20Screen.png", alt: "Dual Screen on screen", width: 2960, height: 2290 },
  },
  {
    id: "kiosk",
    tab: "Self Ordering Kiosk",
    label: "Self Ordering Kiosk",
    title: "Shorter queues. Bigger baskets.",
    description: "Let guests order for themselves and explore suggested extras.",
    points: [
      { title: "Beat the queue", body: "Customers place their own orders." },
      { title: "Consistent upsell", body: "Kiosks never forget to ask." },
      { title: "Same queue as the counter", body: "Kiosk and counter orders join the same queue." },
    ],
    image: { src: "/images/pos/Kiosk.png", alt: "Self Ordering Kiosk on screen", width: 2290, height: 2960 },
  },
  {
    id: "table-ordering",
    tab: "Table Ordering",
    label: "Table Ordering",
    title: "Order from your seat.",
    description: "Guests browse the menu and place orders at their table.",
    points: [
      { title: "One app, every table", body: "Pick a table, start ordering." },
      { title: "Always the live menu", body: "Sold-out items disappear instantly." },
      { title: "More rounds", body: "Reordering takes one tap." },
    ],
    image: { src: "/images/pos/Table%20Order.png", alt: "Table Ordering on screen", width: 2960, height: 2290 },
  },
  {
    id: "crm",
    tab: "Membership CRM",
    label: "Membership CRM",
    title: "Turn guests into regulars.",
    description: "Points, vouchers, online orders and the waitlist in one profile.",
    points: [
      { title: "Points that just work", body: "Earned and redeemed at the counter." },
      { title: "Order ahead", body: "Balances update the moment they pay." },
      { title: "Smart waitlist", body: "Join by QR code and get notified when ready." },
    ],
    image: { src: "/images/pos/CRM.png", alt: "Membership CRM on screen", width: 1857, height: 3096 },
  },
];
