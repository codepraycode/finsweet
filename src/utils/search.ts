import { Aviation, AviationModel } from "@/lib/nobox/structures";


type SearchKey = keyof Aviation
const searchableFields: SearchKey[] = ["name", "company_name", "details", "hubs", "headoffice", "routes", "searchDump"]

export async function searchAviation(searchText: string) {
    return await AviationModel.search({
        searchableFields,
        searchText,
    });
}
