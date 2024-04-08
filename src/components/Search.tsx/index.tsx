import Link from "next/link";
import Section from "../UI/Section";
import SearchItems from "../SearchItems";
import { config } from "@/lib/nobox/config";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Aviation, AviationModel } from "@/lib/nobox/structures";



const fetchData = async (query:string) => {
    const myHeaders = new Headers();
    myHeaders.append("use-pre-stored-structure", "true");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${config.token}`);

    const requestOptions: any = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };


    const recordSpace = "aviation-list";
    const url = `${config.endpoint}/${config.project}/${recordSpace}/search?searchableFields[]=name&searchText=${query}`


    const res = await fetch(url, requestOptions)
    const data = await res.json();

    return data;
}






// // Define the options for the find operation
// const options = {
//   paramRelationship: "And",
//   pagination: {
//     limit: 10,
//     page: 1,
//   },
//   sort: {
//     // by: 'name',
//     // order: 'asc',
//   },
// };


const SearchContent = () => {
    const [data, setData] = useState<Aviation[] | null>(null);
    const params = useSearchParams();

    const query = params.get("query");

    useEffect(()=>{
        (
            async()=>{
                const params:any = {
                  name: query,
                };

                // const data = await AviationModel.find(params, {
                //     paramRelationship: "And",
                //     pagination: {
                //         limit: 10,
                //         page: 1,
                //     },
                //     sort: {
                //         by: 'name',
                //         order: 'asc',
                //     },
                // });


                const data = await fetchData(query as string);

                console.log(data);


                

                // console.log(data);

                setData(()=>data);
            }
        )()
    },[query])

    return (
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

            {
                data === null ? <h1 className="section-h3 text-center">Loading search...</h1>:<div className="search-item-list">

                {
                    !data ? <h3>No result</h3> : data.map((item, i)=>(
                        
                        <SearchItems key={i} item={item}/>
                    ))
                }
            </div>}
        </Section>
    )
}

export default SearchContent;
