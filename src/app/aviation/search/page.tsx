'use client'
import FooterSection from "@/components/Footer";
import Header from "@/components/Header";
import SearchContent from "@/components/Search.tsx";
import { useSearchParams } from "next/navigation";


const SearchPage = () => {

    const params = useSearchParams()
    return (

        <>
            <Header />

            <br/><br/>
            <SearchContent />

            <FooterSection />
        </>

    )
}


export default SearchPage;
