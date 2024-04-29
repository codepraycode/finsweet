import type { Metadata } from "next";
// import "@/styles/styles.scss";
import { SearchContextProvider } from "@/context/SearchContext";

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
        <>
            {/* <body> */}
                {/* <Header /> */}
                <SearchContextProvider>
                    {children}
                </SearchContextProvider>
                {/* <FooterSection /> */}
            {/* </body> */}
        </>
    );
}
