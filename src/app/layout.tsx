import type { Metadata } from "next";
import "@/styles/styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
    title: "FinSweet",
    description: "...",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
