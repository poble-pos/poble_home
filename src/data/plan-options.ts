/**
 * @file plan-options.ts
 * @description Pricing calculator options and totals, from the approved Poble
 * export (plan-options.js). Fees are AUD per month; `quantity` options are per device
 * and `fee: null` options are quoted on enquiry.
 */

import type { Messages } from "@/i18n/messages";

export const PLAN_BASE = 60;

export type PlanOptionId = keyof Messages["home"]["pricing"]["options"];
export type PlanGroup = keyof Messages["home"]["pricing"]["groups"];

/** Option names, notes and group headings are in the dictionaries under `home.pricing`. */
export interface PlanOption {
  id: PlanOptionId;
  fee: number | null;
  group: PlanGroup;
  quantity?: boolean;
}

export const PLAN_OPTIONS: PlanOption[] = [
  { id: "staff", fee: 10, quantity: true, group: "devices" },
  { id: "kds", fee: 10, quantity: true, group: "devices" },
  { id: "table-order", fee: null, group: "devices" },
  { id: "extra", fee: null, group: "devices" },
  { id: "crm", fee: null, group: "operations" },
  { id: "online", fee: 30, group: "operations" },
  { id: "uber", fee: 30, group: "operations" },
  { id: "management", fee: 10, group: "operations" },
  { id: "kiosk", fee: null, group: "enquiry" },
  { id: "booking", fee: null, group: "enquiry" },
  { id: "waitlist", fee: null, group: "enquiry" },
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
