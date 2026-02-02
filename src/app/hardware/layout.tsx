import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hardware",
    description: "Curated hardware marketplace for your Poble POS setup.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
