import SearchContent from "@/components/Search";
import SearchHeader from "@/components/Search/SearchHeader";
import Section from "@/components/UI/Section";
import { Suspense } from "react";


const AviationPage = () => {

    return (

        <Suspense fallback={<h1>Loading....</h1>}>
            <SearchHeader />
            <Section
                name="search-list bg-primary"
                // padded
            >

                <br /><br />
                <SearchContent />


            </Section>
        </Suspense>
    )
}


export default AviationPage;
