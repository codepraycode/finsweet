import Input from "../UI/Input";
import Section from "../UI/Section"
import homeData from "@/data/home.json";

const {clients} = homeData;


const SearchComponent = () => {
    return (

        <Section
            wrapperClassName="bg-hero searcher"
            name="search"
            containerClassName="search_wrapper"

        >
            <h2>
                <span>{clients.mainTitle}</span>
                <br />
                {clients.subTitle}
            </h2>

            <Input
                wrapperClassname="search-input"
                type="text"
                placeholder="Search for aviation businesses"
                action="/aviation/search"
                name="query"
            />
        </Section>
    )
}

export default SearchComponent;
