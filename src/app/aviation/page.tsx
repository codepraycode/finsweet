import SearchContent from "@/components/Search";
import SearchHeader from "@/components/Search/SearchHeader";
import Section from "@/components/UI/Section";


const AviationPage = () => {

    return (
        <Section
            name="search-list bg-light-blue"
            padded
        >

            <SearchHeader />
            <br /><br />
            <SearchContent />


        </Section>
    )
}


export default AviationPage;
