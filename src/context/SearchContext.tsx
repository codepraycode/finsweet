'use client'
import { NoboxResponse } from "@/lib/nobox-client";
import { Aviation } from "@/lib/nobox/structures";
import { searchAviation } from "@/utils/search";
import React, { createContext, useContext, useEffect, useState } from "react";

type SearchResult = NoboxResponse<Aviation>;
export interface SearchProps {
    tag: string | undefined,
    query: string | undefined
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

    
    // let query: string | undefined, airline: string | undefined;


    const [searchResult, setSearchResult ] = useState<SearchResult[]>([]);
    const [searching, setSearching ] = useState<boolean>(false);
    const [searchParams, setSearchParams] = useState<SearchProps>({
        tag: undefined,
        query: undefined
    });

    const search = async (searchQuery:string, tag:string | undefined) => {
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

    useEffect(()=>{
        if (window) {
            const location = new URL(window.location.href);

            let query = location.searchParams.get("query") || undefined;
            let tag = location.searchParams.get("airline") || undefined;

            
            
            if (query || tag){
                
                setSearchParams(()=>({
                    tag,
                    query,
                }));
            }
            
        }
    }, []);
    
    
    const query: string | undefined = searchParams.query;
    const tag: string | undefined = searchParams.tag;


    useEffect(() => {
        (
            async () => {
                if (!query) return;
                // const data = await AviationModel.search({ searchableFields: ["name", "details", "routes"], searchText: query });

                search(query, tag);
            }
        )()
    }, [query, tag])


    function handleSearch(searchProps: SearchProps) {
        setSearchParams(()=> (searchProps))
        search(searchProps.query as string, searchProps.tag);
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
