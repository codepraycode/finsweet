'use client'
import { Aviation, AviationModel } from "@/lib/nobox/structures"
import { useEffect, useState } from "react";
import { ReturnObject } from "nobox-client";
import { slugify } from "@/utils";
import { searchAviation } from "@/utils/search";

const SearchForm = ({handleInput, handleSearch}: {handleInput: (e: any)=>void, handleSearch?: (e?:any)=>void}) => {
    return (
        <form action="/aviation" onSubmit={handleSearch}>
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
                />

                <button type="submit" className="btn btn-transparent btn-search">
                    Search
                </button>
            </div>

        </form>
    )
}


const SearchIndicator = ({data}: {data: Array<any>}) => {
    if (!data) return null;

    if (data.length <= 0) {
        return <p>No aviation service related to your search was found</p>
    }


    return (
        <p>
            Found {data.length} aviation service {data.length > 1 ? 's': ''} related to your search
        </p>
    )

}


interface SearchAviationServicesProps {
    headerText?: string
    indicate?: boolean
}

export const SearchAviationServices = (props: SearchAviationServicesProps) => {

    const [data, setData] = useState<ReturnObject<Aviation>[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const aviation = async () => {
        const result = await searchAviation(searchQuery);

        setData(result);
    };

    const getAll = async () => {
        const result = await AviationModel.find();
        setData(result);
    };


    useEffect(() => {
        if (searchQuery) {
            aviation();
        } else {
            getAll()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery]);
    

    return (
        <div className="search-wrapper">

            {props.headerText && <h2>{props.headerText}</h2>}

            <SearchForm handleInput={setSearchQuery}/>

            {props.indicate && <SearchIndicator data={data}/>}
        </div>
    )
}

