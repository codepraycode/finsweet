import Link from "next/link";
import Section from "../UI/Section";
import SearchItems from "./SearchItems";
import { useEffect, useState } from "react";
import { Aviation, AviationModel } from "@/lib/nobox/structures";
import { NoboxResponse } from "../../lib/nobox-client";

const SearchContent = ({ query }: any) => {
    const [data, setData] = useState<(NoboxResponse<Aviation>)[]>([]);

    useEffect(() => {
        (
            async () => {
                const data = await AviationModel.search({ searchableFields: ["name", "detail", "routes"], searchText: query });
                setData(data);
            }
        )()
    }, [query])

    return (
        <Section
            name="search-list"
            padded
        >
            <h1 className="section-header">
                <Link href={"/"} replace className="go-back">Go Back</Link>
                <br />
                <br />
                Search result for &#39;{query}&#39;
            </h1>

            <br /><br />

            {
                data === null ? <h1 className="section-h3 text-center">Loading search...</h1> : <div className="search-item-list">

                    {
                        !data ? <h3>No rresult</h3> : data.map((item, i) => (

                            <SearchItems key={i} item={item} />
                        ))
                    }
                </div>}
        </Section>
    )
}

export default SearchContent;
