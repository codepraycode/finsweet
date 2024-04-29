'use client'

import { useEffect, useState } from "react";
import { Aviation, AviationModel } from "@/lib/nobox/structures";
import { NoboxResponse } from "../../lib/nobox-client";
import AviationDetail from "../Aviation/AviationDetail";
import { useSearchParams } from "next/navigation";

const SearchContent = () => {
    const params = useSearchParams()
    const query = params.get("query");
    const airline = params.get("query");
    const [data, setData] = useState<(NoboxResponse<Aviation>)[] | null>(null);

    useEffect(() => {
        (
            async () => {
                if (!query) return;
                const data = await AviationModel.search({ searchableFields: ["name", "detail", "routes"], searchText: query });

                // if (!data) return;
                setData(()=> data || []);
            }
        )()
    }, [query, airline])

    let template:React.ReactNode;

    if (!query) {
        template = (
            <h1 className="section-h3 text-center">Search aviation services</h1>
        )
    }

    else if (data === null) {
        
        template = (
            <h1 className="section-h3 text-center">Loading search...</h1>
        )
    }else if( data.length < 1) {
        template = (
            <h3 className="section-h3 text-center">No result for your search</h3>
        )
    } else (
        template = (
            <div className="search-item-list">

                {
                    data.map((item, i) => (

                        <AviationDetail key={i} data={item} />
                    ))
                }
            </div>
        )
    )

    return template;
}

export default SearchContent;
