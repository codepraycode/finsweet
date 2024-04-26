'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import React from 'react'

export default function SearchHeader() {
    const params = useSearchParams()
    const query = params.get("query");
    const airline = params.get("query");
    
    return (
        <h1 className="section-header">
            <Link href={"/"} replace className="go-back">Go Back</Link>
            <br />
            <br />
            Search result for &#39;{query}&#39;
        </h1>
    )
}
