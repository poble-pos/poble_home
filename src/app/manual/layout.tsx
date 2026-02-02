import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "User Manual",
    description: "Comprehensive guide and documentation for Poble POS.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
