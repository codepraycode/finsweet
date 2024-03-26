import AboutSection from "@/components/About";
import AdsSection from "@/components/AdsSection";
import CustomerSection from "@/components/Customers";
import ExpertiseSection from "@/components/Expertise";
import FooterSection from "@/components/Footer";
import HeroSection from "@/components/Hero";
import ProcessSection from "@/components/Process";
import ServicesSection from "@/components/Services";


export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ExpertiseSection />
            <ServicesSection />
            <ProcessSection />
            <CustomerSection />
            <AdsSection />
            <FooterSection />
        </>
    );
}
