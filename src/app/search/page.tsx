'use client'
import { useSearchParams } from "next/navigation";


const SearchPage = () => {

    const params = useSearchParams()
    return (

        <h1>
            Search Page for: {params.get("query")}
        </h1>
    )
}


export default SearchPage;
