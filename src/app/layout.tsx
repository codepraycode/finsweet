import type { Metadata } from "next";
import "@/styles/styles.scss";
import Header from "@/components/Header";
import FooterSection from "@/components/Footer";
import { SearchContextProvider } from "@/context/SearchContext";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Donmanuel Group",
    description: "Leading the Aviation Industry with Excellence",
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
                <Suspense fallback={<h1>Loading....</h1>}>

                    <SearchContextProvider>
                        {children}
                    </SearchContextProvider>
                </Suspense>
                <FooterSection />
            </body>
        </html>
    );
}
