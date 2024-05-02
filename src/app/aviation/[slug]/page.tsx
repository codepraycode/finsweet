import Section from "@/components/UI/Section";
import { Aviation, AviationModel } from "@/lib/nobox/structures";
import { ReturnObject } from "nobox-client";
import { useEffect, useState } from "react";
import { RouteCard } from "@/components/UI/RouteCard";
import AviationDisplay from "@/components/Aviation/AviationDisplay";
// import AviationPage from "./page";


const AviationService = ({ params }: { params: { slug: string } }) => {
    const { slug } = params;

    return (
        <Section
            wrapperClassName="bg-blue-accent"
            name="aviation-item"
            padded
            containerClassName="aviation-item-wrapper"
        >
            <AviationDisplay slug={slug} />
        </Section >
    )
}




export default AviationService;
