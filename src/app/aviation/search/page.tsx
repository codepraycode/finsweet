'use client'
import FooterSection from "@/components/Footer";
import Header from "@/components/Header";
import SearchContent from "@/components/Search.tsx";
import { useSearchParams } from "next/navigation";


const SearchPage = () => {
    const params = useSearchParams()
    const query = params.get("query");
    return (

        <>
            <Header />
            <br /><br />{
                !query
                    ? <p>Please enter a search query</p>
                    : <SearchContent query={query} />
            }

            <FooterSection />
        </>

    )
}


export default SearchPage;
