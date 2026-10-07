import Image from "next/image";

const CUSTOMERS = [
  {
    name: "Woojeong",
    venue: "Korean restaurant · Perth",
    image: "/images/home/venue-woojeong.webp",
    alt: "Woojeong Korean restaurant in Perth",
    quote: "Running a busy Korean restaurant in Perth means we need absolute reliability. Poble simplified our table service immediately.",
    author: "Min-ji Park",
    setup: ["Poble POS", "Kitchen Display", "Table Ordering"],
  },
  {
    name: "Kidsday",
    venue: "Play café · Sydney",
    image: "/images/home/venue-kidsday.webp",
    alt: "Kidsday play cafe in Sydney",
    quote: "We run two terminals for ticketing and café orders. The sync is instant, and the system handles volume with ease.",
    author: "Sarah Lee",
    setup: ["Poble POS", "Dual Screen"],
  },
  {
    name: "Wind & Flour",
    venue: "Bakery & café · Sydney",
    image: "/images/home/venue-wind-and-flour.webp",
    alt: "Wind and Flour bakery and cafe in Sydney",
    quote: "Our menu changes by the hour. Being able to update it from the counter — mid-rush — changed our mornings completely.",
    author: "The team at Wind & Flour",
    setup: ["Poble POS", "Self Ordering Kiosk"],
  },
];

/** Three venue stories from the export, with optional setup disclosures. */
export function Customers() {
  return (
    <section id="customers" className="customers-section compact-section" aria-labelledby="customers-h">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <h2 id="customers-h">At home in Australian venues.</h2>
          </div>
        </div>

        <div className="customer-grid">
          {CUSTOMERS.map((customer) => (
            <article key={customer.name} className="customer-story">
              <Image src={customer.image} alt={customer.alt} width={987} height={423} sizes="240px" />
              <div className="customer-caption">
                <div className="customer-identity">
                  <h3>{customer.name}</h3>
                  <p>{customer.venue}</p>
                </div>
                <figure className="customer-feedback">
                  <blockquote>“{customer.quote}”</blockquote>
                  <figcaption>{customer.author}</figcaption>
                </figure>
                <details>
                  <summary>
                    See their setup<span className="sr-only"> for {customer.name}</span>
                  </summary>
                  <ul className="customer-setup-features">
                    {customer.setup.map((item) => (
                      <li key={item}>
                        <svg aria-hidden="true" viewBox="0 0 16 16">
                          <path d="M3 8.4 6.2 11.6 13 4.8" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
