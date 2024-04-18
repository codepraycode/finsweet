'use client'
import { Aviation, AviationModel } from "@/nobox/structures"
import { useEffect, useState } from "react";
import { ReturnObject } from "nobox-client";
import { XLargeCard } from "./UI/XLargeCard";

export const SearchAviationServices = () => {

    const [data, setData] = useState<ReturnObject<Aviation>[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const aviation = async () => {
        const result = await AviationModel.search({
            searchableFields: ["name", "company_name", "details", "hubs", "headoffice", "routes", "searchDump"],
            searchText: searchQuery,
        });

        setData(result);
    };

    const getAll = async () => {
        const result = await AviationModel.find();
        setData(result);
    };


    useEffect(() => {
        if (searchQuery) {
            aviation();
        } else {
            getAll()
        }
    }, [searchQuery]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search for Aviation Services"
                className="pr-10 input rounded-l-full pl-8"
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <ResultsView data={data} />
        </div>
    )
}


export const ResultsView = ({ data, singleData }: { data: ReturnObject<Aviation>[]; singleData?: ReturnObject<Aviation> }) => {


    return (
        <div
            className="x-cards"
            style={{
                margin: "10px 0",
                overflowY: "scroll",
                height: "610px",
                width: "100%",
            }}>
            <ListView data={data} />
        </div >
    )
}

export const ListView = ({ data }: { data: any[] }) => {

    if (!data) {
        return <div style={{
            display: "flex",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff"
        }}>No Results found</div>
    }

    return (data).map((d, i) => {

        const onClick = () => {
            window.open("aviation/" + d.slug, '_blank');
        }

        return (
            <XLargeCard
                onClick={onClick}
                key={i}
                icon={{
                    url: d.logo || "/images/icons/cog.svg",
                    alt: d.company_name,
                    width: 200,
                    height: 100
                }}
                title={d.name}
                description={d.details}
                pills={[
                    {
                        label: "Fleet Size",
                        value: String(d.fleet_size || "Unknown"),
                    },
                    {
                        label: "Routes",
                        value: String(d.routes.length || ""),
                    },
                    {
                        label: "Website",
                        value: d.link,
                        clickable: true
                    },
                ]}
                cta={{
                    link: d.link,
                    label: d.link,
                    className: "btn-transparent btn-with-arrow arrow-dark nav-cta"
                }}
            />

        )
    })
}
