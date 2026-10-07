import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ExportPage } from "@/components/site/ExportPage";
import { PageShell } from "@/components/site/PageShell";

export const metadata: Metadata = {
  title: "Customers",
  description:
    "How Australian venues like Woojeong, Kidsday and Wind & Flour run faster, calmer service on Poble.",
};

const STORIES = [
  {
    id: "woojeong",
    kicker: "Korean restaurant · Perth",
    name: "Woojeong",
    quote: "“Running a busy Korean restaurant in Perth means we need absolute reliability. Poble simplified our table service immediately.”",
    cite: "Min-ji Park",
    body: "Orders used to be written by hand and re-keyed at the counter. Now they go from the table straight to the kitchen.",
    results: ["Table service simplified from the first shift", "End-of-day reconciled in seconds"],
    products: ["Poble POS", "Kitchen Display", "Table Ordering"],
    image: { src: "/images/home/venue-woojeong.webp", alt: "Woojeong, Korean restaurant · Perth" },
  },
  {
    id: "kidsday",
    kicker: "Play café · Sydney",
    name: "Kidsday",
    quote: "“We run two terminals for ticketing and café orders. The sync is instant, and the system handles volume with ease.”",
    cite: "Sarah Lee",
    body: "One counter sells entry tickets, another runs the café. Two terminals, one kitchen queue and one end-of-day report.",
    results: ["Two terminals, always in sync", "One view of the whole day's trade"],
    products: ["Poble POS", "Dual Screen"],
    image: { src: "/images/home/venue-kidsday.webp", alt: "Kidsday, Play café · Sydney" },
  },
  {
    id: "wind-and-flour",
    kicker: "Bakery & café · Sydney",
    name: "Wind & Flour",
    quote: "“Our menu changes by the hour. Being able to update it from the counter — mid-rush — changed our mornings completely.”",
    cite: "The team at Wind & Flour",
    body: "Pastries sell out by lunch. Staff mark items sold-out at the counter and every screen follows instantly.",
    results: ["Sold-out items updated from the counter", "New staff taking orders on their first shift"],
    products: ["Poble POS", "Self Ordering Kiosk"],
    image: { src: "/images/home/venue-wind-and-flour.webp", alt: "Wind & Flour, Bakery & café · Sydney" },
  },
];

/**
 * Customer stories from the approved export (customers.html).
 */
export default function CustomersPage() {
  return (
    <PageShell>
      <ExportPage>
        <section className="phero wrap" aria-labelledby="ph">
          <p className="kicker rv">Customers</p>
          <h1 className="display rv" id="ph">Real venues. Real service.</h1>
        </section>

        {STORIES.map((story) => (
          <section key={story.id} className="pad-s wrap rule" id={story.id} aria-labelledby={`${story.id}-h`}>
            <div className="story-grid">
              <div className="story-shot rv">
                <Image src={story.image.src} alt={story.image.alt} width={987} height={423} sizes="(min-width: 1024px) 50vw, 100vw" />
              </div>
              <div>
                <p className="kicker rv">{story.kicker}</p>
                <h2 className="h3 rv" id={`${story.id}-h`}>{story.name}</h2>
                <p className="pull rv">{story.quote}</p>
                <p className="cite rv">{story.cite}</p>
                <p className="body-grey rv" style={{ marginTop: 22, maxWidth: "44ch" }}>
                  {story.body}
                </p>
                <ul className="res rv">
                  {story.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
                <div className="runs rv">
                  {story.products.map((product) => (
                    <span key={product}>{product}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="yellow-sec pad" aria-labelledby="cta-h">
          <div className="wrap cta-in">
            <h2 className="display-xl rv" id="cta-h">Your venue could be next.</h2>
            <div className="cta-actions rv">
              <Link className="btn" href="/pricing">
                View pricing <svg aria-hidden="true"><use href="#arrow" /></svg>
              </Link>
              <a className="btn btn-2" href="tel:1300966963">Talk to sales</a>
            </div>
            <ul className="ticks rv">
              <li>No lock-in</li>
              <li>No hidden fees</li>
              <li>Support 7 days a week</li>
            </ul>
          </div>
        </section>
      </ExportPage>
    </PageShell>
  );
}
