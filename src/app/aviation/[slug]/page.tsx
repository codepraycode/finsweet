'use client';
import Section from "@/components/UI/Section";
import { Aviation, AviationModel } from "@/nobox/structures";
import { ReturnObject } from "nobox-client";
import { useEffect, useState } from "react";
import { RouteCard } from "@/components/UI/RouteCard";
import Aviation from "./page";


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
            wrapperClassName="bg-blue-accent"
            name="expertise"
            padded
        >
            {
                loading || !data
                    ? (<div
                        style={{
                            height: "100%",
                            margin: "0",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >Getting Information</div>)
                    : (<Details data={data} />)
            }
        </Section >
    )
}

const Details = (props: { data: ReturnObject<Aviation> }) => {
    const { data } = props;
    return (
        <>
            <div>
                <image href={data?.logo} width={100} length={100} />
                <h1 className="section-h1">
                    {data?.name}
                </h1>

                <div className="p-div">
                    <h2 className="section-header">
                        Details
                    </h2>

                    {data?.details}
                </div>

                <div className="p-div">
                    <h2 className="section-header">
                        Company Name
                    </h2>

                    {data?.company_name}
                </div>

                <div className="p-div">
                    <h2 className="section-header">
                        Fleet Size
                    </h2>

                    {data?.fleet_size}
                </div>

                <div className="p-div">
                    <h2 className="section-header">
                        Head Office
                    </h2>

                    {data?.headoffice}
                </div>


                <div className="p-div">
                    <h2 className="section-header">
                        Hubs
                    </h2>

                    {
                        (data?.hubs || []).map((item, i) => (
                            <div key={i}>
                                {item}
                            </div>
                        ))
                    }
                </div>

                <div className="p-div">
                    <h2 className="section-header">
                        Base
                    </h2>

                    {data?.base || "Unknown"}

                </div>


                <div className="p-div">
                    <h2 className="section-header">
                        Website
                    </h2>

                    {
                        data?.link ? <a
                            href={`https://` + data?.link}
                        >{data?.link}</a> : "None"
                    }

                </div>
            </div>
            <div className="cards" >
                <h1>Routes ({data?.routes.length})</h1>
                <div style={{
                    margin: "10px 0",
                    overflowY: "scroll",
                    height: "610px",
                    width: "100%",
                }}>
                    {
                        data?.routes.map((item, i) => (
                            <RouteCard
                                key={i}
                                title={item.destination}
                                description={item.origin}
                                icon={{
                                    "url": "/images/icons/rocket.svg",
                                    "alt": "On Time Delivery",
                                    "width": 50,
                                    "height": 50
                                }}
                            />
                        ))
                    }
                </div>

            </div>
        </>
    )
}


export default AviationService;