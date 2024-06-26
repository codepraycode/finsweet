'use client';
import { Aviation, AviationModel } from '@/lib/nobox/structures';
import { ReturnObject } from 'nobox-client';
import React, { useEffect, useState } from 'react'
import { RouteCard } from '../UI/RouteCard';

const AviationDisplay = ({slug}: { slug: string }) => {
    // const { data } = props;

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


    if (loading || !data) return (
        <div
            style={{
                height: "100%",
                margin: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >Getting Information</div>
    )

    return (
        <>
            <div>
                <image href={data?.logo} width={100} height={100} />
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

                    <address>
                        {data?.headoffice}
                    </address>
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

                    <address>
                        {data?.base || "Unknown"}
                    </address>

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


            <div className="routes-cards" >
                <h1>Routes ({data?.routes.length})</h1>
                <div>
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


export default AviationDisplay;