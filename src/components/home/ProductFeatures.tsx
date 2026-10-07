"use client";

import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent } from "react";

import { ContactButton } from "@/components/site/ContactButton";
import { HOME_PRODUCTS } from "@/data/home-products";

/**
 * Seven products from the export. Desktop uses the vertical tablist with
 * arrow/Home/End keys; mobile uses the native select. Switching products never
 * changes the page or scrolls it.
 */
export function ProductFeatures() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const product = HOME_PRODUCTS[active];
  const lastIndex = HOME_PRODUCTS.length - 1;

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        next = index === lastIndex ? 0 : index + 1;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        next = index === 0 ? lastIndex : index - 1;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = lastIndex;
        break;
      default:
        return;
    }
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <section id="features" className="feature-section compact-section" aria-labelledby="sol-h">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <h2 id="sol-h">
              One system.
              <br /> Every part of your venue.
            </h2>
          </div>
          <a className="link" href="#pricing">
            View pricing &amp; add-ons
          </a>
        </div>

        <div className="product-workbench">
          <div className="product-tabs" role="tablist" aria-label="Poble products" aria-orientation="vertical">
            {HOME_PRODUCTS.map((item, index) => {
              const selected = index === active;
              return (
                <button
                  key={item.id}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${item.id}`}
                  aria-controls={`${baseId}-panel-${item.id}`}
                  aria-selected={selected}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => onTabKeyDown(event, index)}
                >
                  {item.tab}
                </button>
              );
            })}
          </div>

          <label className="product-picker">
            Explore a product
            <select value={active} onChange={(event) => setActive(Number(event.target.value))}>
              {HOME_PRODUCTS.map((item, index) => (
                <option key={item.id} value={index}>
                  {item.tab}
                </option>
              ))}
            </select>
          </label>

          <div className="product-panels">
            <section
              key={product.id}
              className="product-panel"
              role="tabpanel"
              id={`${baseId}-panel-${product.id}`}
              aria-labelledby={`${baseId}-tab-${product.id}`}
              tabIndex={0}
            >
              <div className="product-copy">
                <p className="product-label">{product.label}</p>
                <h3>{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <ul className="product-points">
                  {product.points.map((point) => (
                    <li key={point.title}>
                      <strong>{point.title}</strong>
                      <span>{point.body}</span>
                    </li>
                  ))}
                </ul>
                <ContactButton className="link">Talk about your setup</ContactButton>
              </div>
              <div className="product-screen">
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  width={product.image.width}
                  height={product.image.height}
                  sizes="(min-width: 1100px) 40vw, 90vw"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
