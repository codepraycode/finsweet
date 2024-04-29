'use client'
import { useSearchContext } from '@/context/SearchContext';
import { SearchAviationServices } from './SearchAviationServices';

export default function SearchHeader() {
    const {handleSearch} = useSearchContext();
    return (
        <div className='search-page-header'>

            <div>
                <SearchAviationServices
                    indicate
                    headerText='Find aviation services'
                    handleSubmit={handleSearch}                    
                />
            </div>

        </div>
    )
}
