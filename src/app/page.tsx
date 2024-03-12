import AboutSection from "@/components/About";
import BlogSection from "@/components/BlogSection";
import CustomerSection from "@/components/Customers";
import ExpertiseSection from "@/components/Expertise";
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
            <BlogSection />
        </main>
    );
}
