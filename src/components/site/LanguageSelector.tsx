"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState, type KeyboardEvent } from "react";

import { LOCALES, LOCALE_NAMES, LOCALE_SHORT, type Locale } from "@/i18n/config";
import { useI18n } from "@/i18n/I18nProvider";
import { format } from "@/i18n/messages";

/** Space kept between the open menu and the edge of the screen. */
const VIEWPORT_MARGIN = 8;

/** Moves the menu sideways just enough to stay on screen, e.g. when the button sits mid-header on a phone. */
export function keepInViewport(menu: HTMLElement) {
  menu.style.transform = "";
  const rect = menu.getBoundingClientRect();
  const width = document.documentElement.clientWidth;
  let shift = 0;
  if (rect.left < VIEWPORT_MARGIN) shift = VIEWPORT_MARGIN - rect.left;
  else if (rect.right > width - VIEWPORT_MARGIN) shift = width - VIEWPORT_MARGIN - rect.right;
  if (shift) menu.style.transform = `translateX(${Math.round(shift)}px)`;
}

/**
 * Header language menu. The button names the current language; the menu lists
 * each language in its own name with the current one checked. Arrow keys,
 * Home/End and Escape follow the menu button pattern; clicking outside, Escape,
 * Tab or a choice closes it.
 */
export function LanguageSelector() {
  const { locale, m, pending, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const [focusIndex, setFocusIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const menuRef = useRef<HTMLUListElement>(null);
  const menuId = useId();
  const currentIndex = LOCALES.indexOf(locale);

  useLayoutEffect(() => {
    if (open && menuRef.current) keepInViewport(menuRef.current);
  }, [open]);

  useEffect(() => {
    if (open) itemRefs.current[focusIndex]?.focus({ preventScroll: true });
  }, [open, focusIndex]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const openAt = (index: number) => {
    setFocusIndex(index);
    setOpen(true);
  };

  const close = (restoreFocus: boolean) => {
    setOpen(false);
    if (restoreFocus) buttonRef.current?.focus({ preventScroll: true });
  };

  const choose = (next: Locale) => {
    close(true);
    if (next !== locale) setLocale(next);
  };

  const onButtonKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      openAt(event.key === "ArrowDown" ? currentIndex : LOCALES.length - 1);
    }
  };

  const onMenuKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    const last = LOCALES.length - 1;
    switch (event.key) {
      case "ArrowDown":
        setFocusIndex((index) => (index === last ? 0 : index + 1));
        break;
      case "ArrowUp":
        setFocusIndex((index) => (index === 0 ? last : index - 1));
        break;
      case "Home":
        setFocusIndex(0);
        break;
      case "End":
        setFocusIndex(last);
        break;
      case "Escape":
        close(true);
        break;
      case "Tab":
        setOpen(false);
        return;
      default:
        return;
    }
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div className="lang-select" ref={rootRef} data-open={String(open)}>
      <button
        ref={buttonRef}
        type="button"
        className="lang-button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={format(m.language.button, { language: LOCALE_NAMES[locale] })}
        aria-busy={pending || undefined}
        onClick={() => (open ? close(false) : openAt(currentIndex))}
        onKeyDown={onButtonKeyDown}
      >
        <svg className="lang-globe" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
        </svg>
        <span className="lang-name" lang={locale}>
          {LOCALE_NAMES[locale]}
        </span>
        <span className="lang-short" lang={locale} aria-hidden="true">
          {LOCALE_SHORT[locale]}
        </span>
        <svg className="lang-chevron" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
          <path d="m3 4.5 3 3 3-3" />
        </svg>
      </button>
      <ul ref={menuRef} id={menuId} className="lang-menu" role="menu" aria-label={m.language.menu} hidden={!open} onKeyDown={onMenuKeyDown}>
        {LOCALES.map((code, index) => {
          const selected = code === locale;
          return (
            <li key={code} role="none">
              <button
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                lang={code}
                tabIndex={-1}
                onClick={() => choose(code)}
              >
                <span>{LOCALE_NAMES[code]}</span>
                <svg className="lang-check" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                  <path d="M3 8.4 6.2 11.6 13 4.8" />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
