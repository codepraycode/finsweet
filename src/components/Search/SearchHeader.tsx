'use client'
import { SearchAviationServices } from '../SearchAviationServices';

export default function SearchHeader() {

    return (
        <div className='search-page-header'>

            <div>
                {/* <Link href={"/"} replace className="go-back">Go Back</Link> */}
                <SearchAviationServices indicate headerText='Find aviation services'/>
            </div>

        </div>
    )
}
