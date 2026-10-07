import type { Metadata } from "next";
import Image from "next/image";

import { ContactButton } from "@/components/site/ContactButton";
import { ExportPage } from "@/components/site/ExportPage";
import { PageShell } from "@/components/site/PageShell";

export const metadata: Metadata = {
  title: "Hardware",
  description: "Verified for Poble POS and sold at cost. Stands, printers and accessories for your venue.",
};

interface HardwareItem {
  name: string;
  description: string;
  /** Shown as the price, or "Ask us" when the item is quoted. */
  price: string;
  image: { src: string; alt: string; width: number; height: number };
}

interface HardwareGroup {
  title: string;
  items: HardwareItem[];
}

const GROUPS: HardwareGroup[] = [
  {
    title: "Stands",
    items: [
      {
        name: "Gemini Dual Stand",
        description: "Dual-screen mount, 360° swivel.",
        price: "$229.95",
        image: { src: "/images/hardware/geminidual.png", alt: "Gemini Dual Stand", width: 1000, height: 1000 },
      },
      {
        name: "Elite Evo Stand",
        description: "Low profile, tamper resistant.",
        price: "$229.95",
        image: { src: "/images/hardware/elitegemini.png", alt: "Elite Evo Stand", width: 1000, height: 1000 },
      },
      {
        name: "Touch Evo Stand",
        description: "Freestanding, tilt adjustable.",
        price: "$229.95",
        image: { src: "/images/hardware/touchevo_1.jpg", alt: "Touch Evo Stand", width: 1050, height: 1050 },
      },
    ],
  },
  {
    title: "Printers",
    items: [
      {
        name: "POSBANK A11",
        description: "250mm/s, Ethernet, auto cutter.",
        price: "Ask us",
        image: {
          src: "/images/hardware/Posbank_A11_Receipt_Printer.png",
          alt: "POSBANK A11",
          width: 1024,
          height: 1024,
        },
      },
      {
        name: "Epson TM-m30III",
        description: "Compact, Bluetooth and Wi-Fi.",
        price: "Ask us",
        image: { src: "/images/hardware/tm-m30iii.webp", alt: "Epson TM-m30III", width: 480, height: 480 },
      },
    ],
  },
  {
    title: "Accessories",
    items: [
      {
        name: "Cash Drawer",
        description: "Steel, 5 note / 8 coin, key lock.",
        price: "Ask us",
        image: { src: "/images/hardware/cashdrawer.jpg", alt: "Cash Drawer", width: 598, height: 598 },
      },
      {
        name: "Thermal Paper",
        description: "80 × 80 mm rolls, BPA free. Box of 24.",
        price: "Ask us",
        image: { src: "/images/hardware/paperroll.webp", alt: "Thermal Paper", width: 357, height: 316 },
      },
      {
        name: "QR Table Stickers",
        description: "Waterproof, for table ordering.",
        price: "Ask us",
        image: { src: "/images/hardware/qr-sticker.svg", alt: "QR Table Stickers", width: 80, height: 80 },
      },
    ],
  },
];

export default function HardwarePage() {
  return (
    <PageShell>
      <ExportPage>
        <main id="top" tabIndex={-1}>
          <section className="phero wrap" aria-labelledby="ph">
            <p className="kicker rv">Hardware</p>
            <h1 className="display rv" id="ph">
              Ready for service.
            </h1>
            <p className="lede rv">Verified for Poble POS and sold at cost.</p>
          </section>

          {GROUPS.map((group) => (
            <section key={group.title} className="pad-s wrap rule">
              <p className="kicker rv">{group.title}</p>
              <div className="hw">
                {group.items.map((item) => (
                  <article key={item.name} className="hwc rv">
                    <div className="hwc-shot">
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        width={item.image.width}
                        height={item.image.height}
                        sizes="(min-width: 900px) 33vw, 90vw"
                      />
                    </div>
                    <div className="meta">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <div className="foot">
                        <b>{item.price}</b>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}

          <section className="yellow-sec pad" aria-labelledby="cta-h">
            <div className="wrap cta-in">
              <h2 className="display-xl rv" id="cta-h">
                Need a full venue setup?
              </h2>
              <div className="cta-actions rv">
                <ContactButton className="btn">
                  Ask about setup <svg aria-hidden="true"><use href="#arrow" /></svg>
                </ContactButton>
                <a className="btn btn-2" href="tel:1300966963">
                  Talk to sales
                </a>
              </div>
              <ul className="ticks rv">
                <li>No lock-in</li>
                <li>No hidden fees</li>
                <li>Support 7 days a week</li>
              </ul>
            </div>
          </section>
        </main>
      </ExportPage>
    </PageShell>
  );
}
