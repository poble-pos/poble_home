import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Our story and mission to simplify hospitality technology.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
