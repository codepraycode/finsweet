import AboutSection from "@/components/About";
import AdsSection from "@/components/AdsSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import FooterSection from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Subsidiaries from "@/components/Subsidiaries";
import Header from "@/components/Header";
import SearchComponent from "@/components/SearchComponent";

export default function Home() {
    return (
        <>
            <Header />
            <HeroSection />
            <SearchComponent />
            <AboutSection />
            <CoreValuesSection />
            <Subsidiaries />
            <AdsSection />
            <FooterSection />
        </>
    );
}
