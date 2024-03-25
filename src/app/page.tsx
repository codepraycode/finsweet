import AboutSection from "@/components/About";
import AddSection from "@/components/AddSection";
import CustomerSection from "@/components/Customers";
import ExpertiseSection from "@/components/Expertise";
import FooterSection from "@/components/Footer";
import HeroSection from "@/components/Hero";
import ProcessSection from "@/components/Process";
import ServicesSection from "@/components/Services";


export default function Home() {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <ExpertiseSection />
            <ServicesSection />
            <ProcessSection />
            <CustomerSection />
            <AddSection />
            <FooterSection />
        </main>
    );
}
