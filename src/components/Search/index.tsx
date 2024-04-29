'use client'
import AviationDetail from "../Aviation/AviationDetail";

import { useSearchContext } from "@/context/SearchContext";

const SearchContent = () => {


    const {searchParams, searchResult} = useSearchContext();


    if (!searchParams.query) return (
        <h1 className="section-h3 text-center">Search aviation services</h1>
    )

    if (searchResult.length < 1) return (
        <h3 className="section-h3 text-center">No result for your search</h3>
    )

    return (
        <div className="search-item-list">
            {
                searchResult.map((item, i) => (
                    <AviationDetail key={item.id} data={item} />
                ))
            }
        </div>
    )
}

export default SearchContent;
