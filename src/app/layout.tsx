import type { Metadata } from "next";
import "@/styles/styles.scss";
import Header from "@/components/Header";
import FooterSection from "@/components/Footer";

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
            <body>
                <Header />
                {children}
                <FooterSection />
            </body>
        </html>
    );
}
