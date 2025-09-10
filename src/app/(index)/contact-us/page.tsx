import ContactUsContent from "@/components/contact-us-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poble - Contact Us",
  description:
    "Get in touch with Poble for inquiries, support, or partnership opportunities. Our team is ready to help you with modern POS solutions for your business.",
  creator: "Poble",
  keywords: [
    "Poble",
    "Contact Poble",
    "POS support",
    "customer service",
    "retail software",
    "restaurant POS",
    "business inquiries",
  ],
  authors: [{ name: "Poble", url: "https://poble.com.au" }],
  openGraph: {
    title: "Contact Poble - Reach Our Team",
    description:
      "Reach out to Poble for support, questions, or partnerships. Learn how our team can help your business with POS solutions.",
    url: "https://poble.com.au/contact-us",
    siteName: "Poble",
    type: "website",
    images: [
      {
        url: "/logo.png", // Replace with a relevant Contact Us image
        width: 1200,
        height: 630,
        alt: "Contact Poble Team",
      },
    ],
    locale: "en_US",
  },
};

export default function ContactUsPage() {
  return (
    <div className={"py-20"}>
      <ContactUsContent />
    </div>
  );
}
