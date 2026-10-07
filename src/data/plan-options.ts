/**
 * @file plan-options.ts
 * @description Pricing calculator options and totals, from the approved Poble
 * export (plan-options.js). Fees are AUD per month; `quantity` options are per device
 * and `fee: null` options are quoted on enquiry.
 */

export const PLAN_BASE = 60;

export interface PlanOption {
  id: string;
  name: string;
  fee: number | null;
  group: string;
  note?: string;
  quantity?: boolean;
}

export const PLAN_OPTIONS: PlanOption[] = [
  { id: "staff", name: "Staff POS", fee: 10, quantity: true, group: "Devices" },
  { id: "kds", name: "Kitchen Display (KDS)", fee: 10, quantity: true, note: "Tablet required", group: "Devices" },
  { id: "table-order", name: "Table Ordering", fee: 30, quantity: true, group: "Devices" },
  { id: "extra", name: "Extra POS Device", fee: 50, quantity: true, group: "Devices" },
  { id: "crm", name: "Membership & Loyalty", fee: 30, note: "CRM / Rewards", group: "Operations" },
  { id: "online", name: "Online Ordering (QR)", fee: 30, group: "Operations" },
  { id: "uber", name: "Uber Eats Integration", fee: 30, group: "Operations" },
  { id: "management", name: "Table Management", fee: 10, group: "Operations" },
  { id: "kiosk", name: "Self Ordering Kiosk", fee: null, note: "Ask us for a quote", group: "By enquiry" },
  { id: "booking", name: "Table Booking", fee: null, note: "Ask us for a quote", group: "By enquiry" },
  { id: "waitlist", name: "WaitList", fee: null, note: "Ask us for a quote", group: "By enquiry" },
];

export const PLAN_GROUPS = [...new Set(PLAN_OPTIONS.map((option) => option.group))];

export function calculatePlan(selected: Set<string>, quantities: Record<string, number>) {
  const ids = new Set([...selected].filter((id) => PLAN_OPTIONS.some((option) => option.id === id)));
  const addOns = PLAN_OPTIONS.reduce((sum, option) => {
    if (!ids.has(option.id)) return sum;
    const count = option.quantity ? Math.max(1, quantities[option.id] ?? 1) : 1;
    return sum + (option.fee ?? 0) * count;
  }, 0);
  return {
    total: PLAN_BASE + addOns,
    addOns,
    quote: PLAN_OPTIONS.some((option) => option.fee === null && ids.has(option.id)),
    ids,
  };
}
