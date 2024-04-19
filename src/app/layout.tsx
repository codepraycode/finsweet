import type { Metadata } from "next";
import "@/styles/styles.scss";
<<<<<<< HEAD
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
import AOSWrapper from "@/components/AOSWrapper";

export const metadata: Metadata = {
    title: "DonManuel Group",
=======
import Header from "@/components/Header";
import FooterSection from "@/components/Footer";

export const metadata: Metadata = {
    title: "donmanuel",
>>>>>>> cf89b5bd57485edf2c574df7bddb24718beb4cf1
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
<<<<<<< HEAD
                <main>
                    <AOSWrapper>
                        {children}
                    </AOSWrapper>
                </main>
=======
                <Header />
                {children}
                <FooterSection />
>>>>>>> cf89b5bd57485edf2c574df7bddb24718beb4cf1
            </body>
        </html>
    );
}
