import { Aviation, AviationModel } from "@/lib/nobox/structures";


type SearchKey = keyof Aviation
const searchableFields: SearchKey[] = ["name", "company_name", "headoffice", "routes", "searchDump"]

export async function searchAviation(searchText: string, filter: string | undefined) {

    if (searchText.length <= 0) {
        if (filter && filter.length > 0) {
            // Search all

            if (filter === 'all') {
                return await AviationModel.find();
            }
            return await AviationModel.search({
                searchableFields: ['category'],
                searchText: filter
            })
        } else {
            return [];
        }
    }


    return await AviationModel.search({
        searchableFields,
        searchText,
    });
}
