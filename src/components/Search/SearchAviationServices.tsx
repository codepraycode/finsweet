'use client'
import { Aviation, AviationModel } from "@/lib/nobox/structures"
import { FormEventHandler, useEffect, useState } from "react";
import { ReturnObject } from "nobox-client";
import { slugify } from "@/utils";
import { searchAviation } from "@/utils/search";
import { NoboxResponse } from "@/lib/nobox-client";
import { SearchProps, useSearchContext } from "@/context/SearchContext";



const SearchForm = ({value, handleInput, handleSearch}: {value:any, handleInput: (e: any)=>void, handleSearch?: (e?:any)=>void}) => {
    return (
        <form action="/aviation" onSubmit={(e)=>{
            if (handleSearch) {
                e.preventDefault();

                const data = new FormData(e.target as HTMLFormElement);

                const tag = data.get('airline');
                const query = data.get("query");



                handleSearch({tag, query});
            }
        }}>
            <div className="tags">
                <label className="tag-item" >
                    <input type="radio" name="airline" id={slugify("All")} value={slugify("All")} />
                    <span>All</span>
                </label>
                <label className="tag-item" >
                    <input type="radio" name="airline" id={slugify("Local Airlines")} value={slugify("Local Airlines")}/>
                    <span>Local Airlines</span>
                </label>
                <label className="tag-item" >
                    <input type="radio" value={slugify("International Airlines")} name="airline" id={slugify("International Airlines")} />
                    <span>International Airlines</span>
                </label>
                <label className="tag-item" >
                    <input type="radio" value={slugify("Private Jets")} name="airline" id={slugify("Private Jets")} />
                    <span>Private Jets</span>
                </label>
            </div>


            <div className="form-group">
                <input
                    type="text"
                    name="query"
                    placeholder="Search for aviation services"
                    className="pr-10 input rounded-l-full pl-8"
                    onChange={(e) => handleInput(e.target.value)}
                    autoComplete="off"
                    value={value || ""}
                />

                <button type="submit" className="btn btn-transparent btn-search">
                    Search
                </button>
            </div>

        </form>
    )
}


const SearchIndicator = () => {
    const {searching, searchResult} = useSearchContext();
    if (searching) return <p><i>Searching</i></p>;

    if (searchResult.length <= 0) {
        return <p><i>No aviation service related to your search was found</i></p>
    }


    return (
        <p>
            <i>Found {searchResult.length} aviation service{searchResult.length > 1 ? 's': ''} related to your search</i>
        </p>
    )

}


interface SearchAviationServicesProps {
    headerText?: string
    indicate?: boolean,
    handleSubmit?: (searchProps: SearchProps) => void
    handleInput?: (searchProps: SearchProps) => void
}

export const SearchAviationServices = (props: SearchAviationServicesProps) => {

    const {searchParams} = useSearchContext()
    const [searchQuery, setSearchQuery] = useState<string>(()=>searchParams.query || "");


    return (
        <div className="search-wrapper">

            {props.headerText && <h2>{props.headerText}</h2>}

            <SearchForm value={searchQuery} handleInput={setSearchQuery} handleSearch={props.handleSubmit}/>

            {props.indicate && <SearchIndicator />}
        </div>
    )
}

