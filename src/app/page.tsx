<<<<<<< HEAD
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
=======
'use client'
import SlidingHero from "@/components/HeroSlider";
import aviation from "@/nobox/initialData/aviation";
import { AviationModel } from "@/nobox/structures";
import { useEffect } from "react";

export default function Home() {

    const populate = async () => {
        for (let i = 0; i < aviation.length; i++) {
            const { name } = aviation[i];
            const exist = await AviationModel.findOne({ name });

            // console.log({ exist })

            if (!exist) {
                await AviationModel.insertOne(aviation[i]);
                // console.log({ message: name + " airline inserted" })
            }
        }
    }

    useEffect(() => {
        populate().then(() => {
            // console.log({ message: "airlines populated" })
        })
    }, []);


    return (
        <main>
            <SlidingHero />
        </main>
>>>>>>> cf89b5bd57485edf2c574df7bddb24718beb4cf1
    );
}
