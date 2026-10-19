import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

import { routerPush, routerRefresh } from "./router-mock";

vi.mock("next/navigation", async () => {
  const { routerPush: push, routerRefresh: refresh } = await import("./router-mock");
  return {
    useRouter: () => ({ refresh, push, replace: vi.fn(), prefetch: vi.fn() }),
    usePathname: () => "/",
  };
});

// Browser APIs the components use that jsdom does not provide.
window.matchMedia ??= ((query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: () => {},
  removeEventListener: () => {},
  addListener: () => {},
  removeListener: () => {},
  dispatchEvent: () => false,
})) as typeof window.matchMedia;

window.IntersectionObserver ??= class {
  readonly root = null;
  readonly rootMargin = "";
  readonly thresholds = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
} as unknown as typeof IntersectionObserver;

HTMLMediaElement.prototype.pause = () => {};
HTMLMediaElement.prototype.play = () => Promise.resolve();

afterEach(() => {
  cleanup();
  routerRefresh.mockClear();
  routerPush.mockClear();
  document.cookie = "poble-locale=; path=/; max-age=0";
  document.documentElement.lang = "";
});
