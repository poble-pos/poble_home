import { ContactButton } from "@/components/site/ContactButton";

/** Closing contact section from the export. The button opens the shared enquiry panel. */
export function HomeContact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-h">
      <div className="wrap contact-layout">
        <div>
          <h2 id="contact-h">Let&apos;s talk about your venue.</h2>
          <p>Book a demo, plan your setup or ask about switching.</p>
        </div>
        <div className="contact-options">
          <ContactButton className="btn">Contact us</ContactButton>
        </div>
      </div>
    </section>
  );
}
