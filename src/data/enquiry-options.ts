/**
 * @file enquiry-options.ts
 * @description Questions and canonical answer values for the /enquiry form, from the
 * approved enquiry form export. The browser sends these ids; /api/inquiry checks them
 * and writes the English labels (dictionary `enquiry`) into the sales email, so the
 * report never depends on the visitor's language.
 */

export const VENUE_TYPES = ["cafe", "restaurant", "takeaway", "bar", "food-truck", "other"] as const;
export const REASONS = ["new-venue", "replace-pos", "add-tools", "exploring"] as const;
export const FEATURES = [
  "poble-pos",
  "staff-pos",
  "table-ordering",
  "kds",
  "membership",
  "online-qr",
  "kiosk",
  "uber-eats",
  "booking",
  "waitlist",
  "stock",
  "staff-management",
  "other",
] as const;
export const VENUE_COUNTS = ["one", "two-three", "four-plus", "planning"] as const;
export const TIMINGS = ["asap", "one-month", "one-three-months", "researching"] as const;

export type VenueType = (typeof VENUE_TYPES)[number];
export type Reason = (typeof REASONS)[number];
export type Feature = (typeof FEATURES)[number];
export type VenueCount = (typeof VENUE_COUNTS)[number];
export type Timing = (typeof TIMINGS)[number];

/** POBLE POS is the starting point: always selected and cannot be removed. */
export const BASE_FEATURE: Feature = "poble-pos";

/** Tools shown first for a venue type, in this order. Other venue types see one "Optional tools" group. */
export const POPULAR_FEATURES: Partial<Record<VenueType, Feature[]>> = {
  restaurant: ["table-ordering", "kds", "online-qr", "uber-eats", "membership"],
  cafe: ["membership", "kiosk", "uber-eats"],
  takeaway: ["membership", "kiosk", "uber-eats"],
};

/** Single-choice questions, in form order around the features and detail steps. */
export const CHOICE_STEPS = {
  venue: VENUE_TYPES,
  reason: REASONS,
  venues: VENUE_COUNTS,
  timing: TIMINGS,
} as const;

export type ChoiceStep = keyof typeof CHOICE_STEPS;
export type FieldKey = "company" | "postcode" | "name" | "email" | "phone";

export type EnquiryStep =
  | { kind: "choice"; key: ChoiceStep }
  | { kind: "features" }
  | { kind: "fields"; key: "business" | "contact"; fields: FieldKey[] };

export const ENQUIRY_STEPS: EnquiryStep[] = [
  { kind: "choice", key: "venue" },
  { kind: "choice", key: "reason" },
  { kind: "features" },
  { kind: "choice", key: "venues" },
  { kind: "choice", key: "timing" },
  { kind: "fields", key: "business", fields: ["company", "postcode"] },
  { kind: "fields", key: "contact", fields: ["name", "email", "phone"] },
];

export const POSTCODE_RE = /^\d{4}$/;
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** 8–15 digits, allowing spaces, brackets, dashes and a leading +. */
export function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "").length;
  return /^[+\d\s()-]+$/.test(value) && digits >= 8 && digits <= 15;
}

export function featureGroups(venue: VenueType | undefined) {
  const popular = (venue && POPULAR_FEATURES[venue]) || [];
  const rest = FEATURES.filter((id) => id !== BASE_FEATURE && !popular.includes(id));
  return [
    { id: "starting" as const, items: [BASE_FEATURE] },
    ...(popular.length ? [{ id: "popular" as const, items: popular }] : []),
    { id: popular.length ? ("more" as const) : ("optional" as const), items: rest },
  ];
}
