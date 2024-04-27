'use client';
import Section from "@/components/UI/Section";
import { Aviation, AviationModel } from "@/nobox/structures";
import { ReturnObject } from "nobox-client";
import { useEffect, useState } from "react";
import { RouteCard } from "@/components/UI/RouteCard";
import Image from "next/image";
import { Card } from "@/components/UI/Card";


const AviationService = ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    const [data, setData] = useState<ReturnObject<Aviation>>();
    const [loading, setLoading] = useState(false);

    const getAviation = async (slug: string) => await AviationModel.findOne({ slug });


    useEffect(() => {
        setLoading(true);
        getAviation(slug).then((aviation) => {
            setData(aviation);
            setLoading(false);

        })
    }, [slug])

    return (
        <Section
            wrapperClassName="bg-primary"
            name="expertise"
            padded
        >
            <Details />
        </Section >
    )
}

const Details = () => {
    return (
        <>
            <div>
                <h1 className="section-h1">
                    About DonManuel Group
                </h1>

                <div className="p-div">
                    <h2 className="section-header">
                        Company Structure [RC1093505]
                    </h2>
                    DonManuel Group is a holding company with the following subsidiaries:
                    <ul>
                        <li>DonManuel Concept Ltd</li>
                        <li>DonBryan Logistics Ltd</li>
                    </ul>
                </div>

                <div className="p-div">
                    <h2 className="section-header">
                        Motto
                    </h2>
                    Service without Boundary

                </div>

                <div className="p-div">
                    <h2 className="section-header">
                        Vision
                    </h2>
                    To be the Hub in aviation  Services and the craving of the customers that will patronise us based on the feedback they have gotten from the customers we have served well and are still serving. Above all,to be the timely Solution to the problems of our Customers.
                </div>

                <div className="p-div">
                    <h2 className="section-header">
                        Mission
                    </h2>
                    To Develop  lasting client relationships by providing exceptional value in the aviation industry with Smart work,Respect and Trust.
                </div>
                <div className="p-div">
                    <h2 className="section-header">CORE VALUES</h2>
                    <ul className="p-ul">
                        <li>Trust</li>
                        <li>Sincerity</li>
                        <li>Hard/Smart Work</li>
                        <li>Integrity</li>
                        <li>Time Consciousness</li>
                        <li>Pro-solution</li>
                        <li>Results</li>
                    </ul>
                </div>



            </div>
            {/* <div className="cards" >
                <h1>Routes</h1>

                <Card
                    title={""}
                    description={""}
                    icon={{
                        "url": "/images/icons/rocket.svg",
                        "alt": "On Time Delivery",
                        "width": 50,
                        "height": 50
                    }}
                />
            </div > */}
        </>
    )
}



export default AviationService;