/**
 * Shared SVG arrow symbols from the export, referenced by id (#arrow, #arrow-r,
 * #arrow-l) by buttons and links.
 */
export function OwlSymbols() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <defs>
        <symbol id="arrow" viewBox="0 0 16 16">
          <path d="M3.5 12.5 12.5 3.5M5.5 3.5h7v7" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
        </symbol>
        <symbol id="arrow-r" viewBox="0 0 16 16">
          <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
        </symbol>
        <symbol id="arrow-l" viewBox="0 0 16 16">
          <path d="M13.5 8h-11M7 3.5 2.5 8 7 12.5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
        </symbol>
      </defs>
    </svg>
  );
}
