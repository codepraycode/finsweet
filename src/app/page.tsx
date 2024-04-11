
import FooterSection from "@/components/Footer";
import Header from "@/components/Header";
import AboutSection from "@/components/Home/About";
import AdsSection from "@/components/Home/AdsSection";
import CoreValuesSection from "@/components/Home/CoreValues";
import HeroSection from "@/components/Home/Hero";
import SearchComponent from "@/components/Home/SearchComponent";
import SubsidiariesSection from "@/components/Home/Subsidiaries";

export default function Home() {

    return (
        <>
            <Header />
            <HeroSection />
            <SearchComponent />
            <AboutSection />
            <CoreValuesSection />
            <SubsidiariesSection />
            <AdsSection />
            <FooterSection />
        </>
    );
}
