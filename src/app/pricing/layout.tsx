import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing",
    description: "Simple, transparent pricing for your cafe POS system.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
