import type { Metadata } from "next";
import "@/styles/styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'aos/dist/aos.css';

import AOSWrapper from "@/components/AOSWrapper";


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
                <main>
                    <AOSWrapper>
                        {children}
                    </AOSWrapper>
                </main>
            </body>
        </html>
    );
}
