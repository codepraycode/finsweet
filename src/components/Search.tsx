import Input from "./UI/Input";
import Section from "./UI/Section"
import {clients} from "@/data/home.json";


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
            />
        </Section>
    )
}

export default SearchComponent;
