import SearchContent from "@/components/Search";
import SearchHeader from "@/components/Search/SearchHeader";
import Section from "@/components/UI/Section";


const AviationPage = () => {

    return (
        <>
            <SearchHeader />


            <Section
                name="search-list bg-light-blue"
                // padded
            >

                <br /><br />
                <SearchContent />


            </Section>
        </>
    )
}


export default AviationPage;
