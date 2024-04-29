'use client'
import { NoboxResponse } from "@/lib/nobox-client";
import { Aviation } from "@/lib/nobox/structures";
import { searchAviation } from "@/utils/search";
import { useSearchParams } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

type SearchResult = NoboxResponse<Aviation>;
export interface SearchProps {
    tag: string,
    query: string
}




interface SearchContextProps {
    handleSearch: (searchProps: SearchProps) => void,
    searchResult: SearchResult[],
    searchParams: SearchProps,
    searching: boolean
}

const SearchContext = createContext<SearchContextProps | null>(null);
SearchContext.displayName = "Search Context";

export const useSearchContext = ()=>useContext(SearchContext) as SearchContextProps;

interface SearchContextProvider {
    children: React.ReactNode
}


export const SearchContextProvider:React.FC<SearchContextProvider> = ({children}) => {

    const params = useSearchParams()
    const query = params.get("query");
    const airline = params.get("airline");

    const [searchResult, setSearchResult ] = useState<SearchResult[]>([]);
    const [searching, setSearching ] = useState<boolean>(false);
    const [searchParams, setSearchParams] = useState<SearchProps>(() => {
        return {
            tag: airline!,
            query: query!,
        }
    });


    const search = async (searchQuery:string, tag:string | null) => {
        let result: NoboxResponse<Aviation>[] = [];
        try {            
            result = await searchAviation(searchQuery);
            setSearching(true)
        } catch(err) {
            console.error(err);
        } finally {
            setSearching(()=>false);

            console.log("result", result);
            setSearchResult(result);
        }
    };

    useEffect(() => {
        (
            async () => {
                if (!query) return;
                // const data = await AviationModel.search({ searchableFields: ["name", "details", "routes"], searchText: query });

                search(query, airline);
            }
        )()
    }, [query, airline])


    function handleSearch(searchProps: SearchProps) {
        console.log("Search", searchProps)
        setSearchParams(()=> (searchProps))
        search(searchProps.query, searchProps.tag);
    }


    const contextValue: SearchContextProps = {
        handleSearch,
        searchResult,
        searchParams,
        searching
    }

    return (
        <SearchContext.Provider value={contextValue}>
            { children }
        </SearchContext.Provider>
    )
}
