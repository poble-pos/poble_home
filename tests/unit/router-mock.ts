import { vi } from "vitest";

/** Shared spy for `router.refresh()`, which the language switch calls to re-render server components. */
export const routerRefresh = vi.fn();

/** Shared spy for `router.push()`, used by links that navigate from a button. */
export const routerPush = vi.fn();
