'use client'
import FooterSection from "@/components/Footer";
import Header from "@/components/Header";
import SearchItems from "@/components/SearchItems";
import Section from "@/components/UI/Section";
import Link from "next/link";
import { useSearchParams } from "next/navigation";


const SearchPage = () => {

    const params = useSearchParams()
    return (

        <>
            <Header />

            <br/><br/>
            <Section
                name="search-list"
                padded
            >

                <h1 className="section-header">
                    <Link href={"/"} replace className="go-back">Go Back</Link>
                    <br/>
                    <br/>
                    Search result for &#39;{params.get("query")}&#39;
                </h1>

                <br/><br/>

                <div className="search-item-list">
                    {
                        [...Array(4)].map((item, i)=>(
                            
                            <SearchItems key={i}/>
                        ))
                    }
                </div>
            </Section>

            <FooterSection />
        </>

    )
}


export default SearchPage;
