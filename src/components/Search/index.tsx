import Link from "next/link";
import Section from "../UI/Section";
import SearchItems from "../SearchItems";
import { useEffect, useState } from "react";
import { Aviation, AviationModel } from "@/lib/nobox/structures";
import { NoboxResponse } from "../../nobox-client";
import AviationDetail from "../Aviation/AviationDetail";

const SearchContent = ({ query, airline }: any) => {
    const [data, setData] = useState<(NoboxResponse<Aviation>)[] | null>(null);

    useEffect(() => {
        (
            async () => {
                const data = await AviationModel.search({ searchableFields: ["name", "detail", "routes"], searchText: query });

                // if (!data) return;
                setData(()=> data || []);
            }
        )()
    }, [query])

    let template:React.ReactNode


    if (data === null) {
        
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


    return (
        <Section
            name="search-list bg-light-blue"
            padded
        >
            <h1 className="section-header">
                <Link href={"/"} replace className="go-back">Go Back</Link>
                <br />
                <br />
                Search result for &#39;{query}&#39;
            </h1>

            <br /><br />

            { template }
        </Section>
    )
}

export default SearchContent;
