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
    );
}
