import { Space } from "../../../nobox-client";
import { createRowSchema } from "../config";
import aviation from "../initialData/aviation";

type Route = {
    from: string,
    to: string,
}
export interface Aviation {
    name: string,
    detail: string,
    routes: Route[],
    link: string,
}

export const AviationStructure: Space<Aviation> = {
    space: "Aviation",
    description: "A Record Space for Aviation companies",
    initialData: aviation,
    structure: {
        name: {
            description: "Company's name",
            type: String,
            required: true
        },
        detail: {
            description: "Company's detail",
            required: true,
            type: String,
        },
        routes: {
            description: "Routes's First Name",
            required: true,
            type: Array,
        },
        link: {
            description: "Company's page",
            required: true,
            type: String,
        },
    }
}

export const AviationModel = createRowSchema<Aviation>(AviationStructure);