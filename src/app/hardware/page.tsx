import type { Metadata } from "next";
import Image from "next/image";

import { ContactButton } from "@/components/site/ContactButton";
import { CtaTicks } from "@/components/site/CtaTicks";
import { ExportPage } from "@/components/site/ExportPage";
import { PageShell } from "@/components/site/PageShell";
import type { Messages } from "@/i18n/messages";
import { getI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { m } = await getI18n();
  return m.meta.hardware;
}

type HardwareCopy = Messages["hardwarePage"];

interface HardwareItem {
  id: keyof HardwareCopy["items"];
  /** Price in AUD, or null when the item is quoted ("Ask us"). */
  price: string | null;
  image: { src: string; width: number; height: number };
}

interface HardwareGroup {
  id: keyof HardwareCopy["groups"];
  items: HardwareItem[];
}

/** Item names and descriptions are in the dictionaries under `hardwarePage.items`. */
const GROUPS: HardwareGroup[] = [
  {
    id: "stands",
    items: [
      { id: "gemini-dual", price: "$229.95", image: { src: "/images/hardware/geminidual.png", width: 1000, height: 1000 } },
      { id: "elite-evo", price: "$229.95", image: { src: "/images/hardware/elitegemini.png", width: 1000, height: 1000 } },
      { id: "touch-evo", price: "$229.95", image: { src: "/images/hardware/touchevo_1.jpg", width: 1050, height: 1050 } },
    ],
  },
  {
    id: "printers",
    items: [
      { id: "posbank-a11", price: null, image: { src: "/images/hardware/Posbank_A11_Receipt_Printer.png", width: 1024, height: 1024 } },
      { id: "epson-m30iii", price: null, image: { src: "/images/hardware/tm-m30iii.webp", width: 480, height: 480 } },
    ],
  },
  {
    id: "accessories",
    items: [
      { id: "cash-drawer", price: null, image: { src: "/images/hardware/cashdrawer.jpg", width: 598, height: 598 } },
      { id: "thermal-paper", price: null, image: { src: "/images/hardware/paperroll.webp", width: 357, height: 316 } },
      { id: "qr-stickers", price: null, image: { src: "/images/hardware/qr-sticker.svg", width: 80, height: 80 } },
    ],
  },
];

export default async function HardwarePage() {
  const { m } = await getI18n();
  const t = m.hardwarePage;
  return (
    <PageShell>
      <ExportPage>
        <main id="top" tabIndex={-1}>
          <section className="phero wrap" aria-labelledby="ph">
            <p className="kicker rv">{t.kicker}</p>
            <h1 className="display rv" id="ph">
              {t.heading}
            </h1>
            <p className="lede rv">{t.lede}</p>
          </section>

          {GROUPS.map((group) => (
            <section key={group.id} className="pad-s wrap rule">
              <p className="kicker rv">{t.groups[group.id]}</p>
              <div className="hw">
                {group.items.map((item) => (
                  <article key={item.id} className="hwc rv">
                    <div className="hwc-shot">
                      <Image
                        src={item.image.src}
                        alt={t.items[item.id].name}
                        width={item.image.width}
                        height={item.image.height}
                        sizes="(min-width: 900px) 33vw, 90vw"
                      />
                    </div>
                    <div className="meta">
                      <h3>{t.items[item.id].name}</h3>
                      <p>{t.items[item.id].description}</p>
                      <div className="foot">
                        <b>{item.price ?? t.askUs}</b>
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
                {t.ctaHeading}
              </h2>
              <div className="cta-actions rv">
                <ContactButton className="btn">
                  {t.askSetup} <svg aria-hidden="true"><use href="#arrow" /></svg>
                </ContactButton>
                <a className="btn btn-2" href="tel:1300966963">
                  {m.common.talkToSales}
                </a>
              </div>
              <CtaTicks items={m.common.ticks} />
            </div>
          </section>
        </main>
      </ExportPage>
    </PageShell>
  );
}
