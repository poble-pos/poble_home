import AboutUsContent from "@/components/about-us-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poble - About Us",
  description:
    "Learn more about Poble, our mission, values, and the team behind our innovative POS solutions for businesses.",
  creator: "Poble",
  keywords: [
    "Poble",
    "About Poble",
    "POS system company",
    "retail software",
    "restaurant POS",
    "inventory management",
    "business solutions",
  ],
  authors: [{ name: "Poble", url: "https://poble.com.au" }],
  openGraph: {
    title: "About Poble - Innovative POS Solutions",
    description:
      "Discover Poble's mission, values, and team driving modern POS solutions to help businesses manage sales, inventory, and customer experiences effectively.",
    url: "https://poble.com.au/about-us",
    siteName: "Poble",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "About Poble Team and Mission",
      },
    ],
    locale: "en_US",
  },
};

export default function AboutUsPage() {
  return (
    <div className={"py-20"}>
      <AboutUsContent />
    </div>
  );
}
