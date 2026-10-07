/** Company statement from the export. Headline statistics are not shown; see the review notes. */
export function About() {
  return (
    <section id="about" className="about-section compact-section" aria-labelledby="about-h">
      <div className="wrap about-layout" id="poble-about">
        <div className="about-content">
          <h2 id="about-h">Built beside the counter.</h2>
          <p>ECNESOFT builds Poble in Australia, for Australian hospitality. Our team has worked in POS since 2002.</p>
          <p>Poble was shaped by real service — the morning rush, the split bill, the docket that cannot go missing.</p>
        </div>
        <div className="about-signature">
          <svg viewBox="0 0 1024 1024" aria-hidden="true" focusable="false" fill="currentColor">
            <image href="/logo-transparent.svg" width={1024} height={1024} />
          </svg>
          <p>
            Australian hospitality.
            <br />
            Local Aussie support.
          </p>
          <span>Poble by ECNESOFT</span>
        </div>
      </div>
    </section>
  );
}
