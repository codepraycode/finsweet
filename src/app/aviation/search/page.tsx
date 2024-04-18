'use client'
import FooterSection from "@/components/Footer";
import Header from "@/components/Header";
import SearchContent from "@/components/Search";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";



const SearchPageContent = () => {
    const params = useSearchParams()
    const query = params.get("query");

    if (!query) return <p>Please enter a search query</p>;


    return <SearchContent query={query} />
}

const SearchPage = () => {
    
    return (

        <>
            <Header />
            <br /><br />
            
            <Suspense fallback={<h3 className="text-center text-center w-full">Loading...</h3>}>
                <SearchPageContent />
            </Suspense>

            <FooterSection />
        </>

    )
}


export default SearchPage;
