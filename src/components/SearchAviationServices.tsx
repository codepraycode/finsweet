'use client'
import { Aviation, AviationModel } from "@/nobox/structures"
import { useEffect, useState } from "react";
import { ReturnObject } from "nobox-client";
import { LargeCard } from "./UI/LargeCard";

export const SearchAviationServices = () => {

    const [data, setData] = useState<ReturnObject<Aviation>[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const aviation = async () => {
        const result = await AviationModel.search({
            searchableFields: ["name", "company_name", "details", "hubs", "headoffice", "routes"],
            searchText: searchQuery,
        });

        setData(result);
    }

    useEffect(() => {
        if (searchQuery) {
            aviation();
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
            <div className="x-cards" style={{
                margin: "10px 0",
                overflowY: "scroll",
                height: "600px",
                width: "100%",
            }}>
                {!data ? <div style={{
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff"
                }}>No Results found</div> :
                    (data).map((d, i) => {
                        return (
                            <LargeCard
                                key={i}
                                icon={{
                                    url: d.logo || "/images/icons/cog.svg",
                                    alt: d.company_name,
                                    width: 200,
                                    height: 100
                                }}
                                title={d.company_name}
                                description={d.details}
                                cta={{
                                    link: d.link,
                                    label: d.link,
                                    className: "btn-transparent btn-with-arrow arrow-dark nav-cta"
                                }}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
