'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'
import { SearchAviationServices } from '../SearchAviationServices';

export default function SearchHeader() {
    const params = useSearchParams()
    const query = params.get("query");
    const airline = params.get("query");
    
    return (
        <div className='page-header'>

            <div>
                {/* <Link href={"/"} replace className="go-back">Go Back</Link> */}
                <SearchAviationServices indicate headerText='Find aviation services'/>
            </div>
            
            
            {/* <p className="section-header">                
                Search result for &#39;{query}&#39;
            </p> */}
        </div>
    )
}
