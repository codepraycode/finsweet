'use client'
import AviationDetail from "../Aviation/AviationDetail";

import { useSearchContext } from "@/context/SearchContext";

const SearchContent = () => {


    const {searchResult} = useSearchContext();

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
